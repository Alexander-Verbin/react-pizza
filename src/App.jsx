import React from "react";

import "./scss/app.scss"


import {Header} from "./components/Header/Header";
import {Categories} from "./components/Categories/Categories";
import {Sort} from "./components/Sort/Sort";
import {PizzaBlock} from "./components/PizzaBlock/PizzaBlock";
export const App = () => {
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
						<PizzaBlock title={'Мексиканская'} price={500}/>
						<PizzaBlock title={'Гавайская'} price={350}/>
						<PizzaBlock title={'Чизбургер-пицца'} price={550}/>
						<PizzaBlock title={'Маргарита'} price={250}/>
						<PizzaBlock title={'Мясная'} price={375}/>
					</div>
				</div>
			</div>
		</div>
	);
}