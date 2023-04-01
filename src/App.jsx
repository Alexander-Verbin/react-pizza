import React, {useEffect, useState} from "react";

import "./scss/app.scss"


import {Header} from "./components/Header/Header";
import {Categories} from "./components/Categories/Categories";
import {Sort} from "./components/Sort/Sort";
import {PizzaBlock} from "./components/PizzaBlock/PizzaBlock";

export const App = () => {
	const [pizzas, setPizzas] = useState([])

	useEffect(() => {
		fetch('https://642843cd161067a83b0a88cc.mockapi.io/pizzas')
			.then((response) => {
				return response.json()
			})
			.then((array) => {
				setPizzas(array)
			})
	},[])

	return (
		<div className="wrapper">
			<Header/>
			<div className="content">
				<div className="container">
					<div className="content__top">
						<Categories/>
						<Sort/>
					</div>
					<h2 className="content__title">Все пиццы</h2>
					<div className="content__items">
						{
							pizzas.map((obj) => (
								<PizzaBlock {...obj} key={obj.id}/>
							))
						}
					</div>
				</div>
			</div>
		</div>
	);
}
