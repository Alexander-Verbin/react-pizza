import React, {useContext, useEffect, useState} from "react";
import {Categories} from "../../components/Categories/Categories";
import {Sort} from "../../components/Sort/Sort";
import {Skeleton} from "../../components/Skeleton/Skeleton";
import {PizzaBlock} from "../../components/PizzaBlock/PizzaBlock";
import {Pagination} from "../../components/Pagination/Pagination";
import {AppContext} from "../../App";
import {useDispatch, useSelector} from "react-redux";
import {setCategoryId} from "../../redux/slices/filterSlice"
export const Home = () => {
	const categoryId = useSelector(state => state.filter.categoryId);
	const dispatch = useDispatch();
	const onClickCategory = (id) => {
		dispatch(setCategoryId(id))
	};
	const [pizzas, setPizzas] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const sortType = useSelector(state => state.filter.sort.sortProperty)

	const [currentPage, setCurrentPage] = useState(1)
	const pizzasItems = pizzas.map((obj) => (<PizzaBlock {...obj} key={obj.id}/>))
	const {searchValue} = useContext(AppContext)


	useEffect(() => {
		setIsLoading(true)
		const search = searchValue ? `&search=${searchValue}` : '';
		fetch(`https://642843cd161067a83b0a88cc.mockapi.io/pizzas?page=${currentPage}&limit=4&category=${categoryId > 0 ? `${categoryId}` : ''}&
		sortBy=${sortType}${search}`)
			.then((response) => {
				return response.json()
			})
			.then((array) => {
				setPizzas(array)
				setIsLoading(false)
			})
		window.scrollTo(0, 0)
	}, [categoryId, sortType, searchValue, currentPage])
	return (
		<div className="container">
			<div className="content__top">
				<Categories activeIndex={categoryId} onClickCategory={(i) => onClickCategory(i)}/>
				<Sort/>
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{isLoading
					? [...new Array(6)].map((_, index) => <Skeleton key={index}/>)
					: pizzasItems
				}
			</div>
			<Pagination currentPage={currentPage} onChangePage={(number) => setCurrentPage(number)}/>
		</div>
	)
}