import React, {useEffect, useState} from "react";
import {Categories} from "../../components/Categories/Categories";
import {Sort} from "../../components/Sort/Sort";
import {Skeleton} from "../../components/Skeleton/Skeleton";
import {PizzaBlock} from "../../components/PizzaBlock/PizzaBlock";

export const Home = () => {
	const [pizzas, setPizzas] = useState([]);
	const [isLoading,setIsLoading] = useState(true);
	const [categoryId,setCategoryId] = useState(0);
	const [sortType,setSortType] = useState({
		name: 'популярности',
		sort: 'rating'
	});

	useEffect(() => {
		setIsLoading(true)
		const order = sortType.sort
		fetch(`https://642843cd161067a83b0a88cc.mockapi.io/pizzas?category=${categoryId > 0 ? `${categoryId}` : ''}&
		sortBy=${order.replace('-','')}&order=${order.includes('-') ? 'asc' : 'desc'}`)
			.then((response) => {
				return response.json()
			})
			.then((array) => {
				setPizzas(array)
				setIsLoading(false)
			})
		window.scrollTo(0,0)
	},[categoryId,sortType.sort])
	return(
		<div className="container">
			<div className="content__top">
				<Categories activeIndex={categoryId} onClickCategory={(i) => setCategoryId(i)}/>
				<Sort active={sortType} onClickSort={(i) => setSortType(i)}/>
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{ isLoading
					? [...new Array(6)].map((_,index) => <Skeleton key={index}/>)
					: pizzas.map((obj) => (
						<PizzaBlock {...obj} key={obj.id}/>
					))
				}
			</div>
		</div>
	)
}