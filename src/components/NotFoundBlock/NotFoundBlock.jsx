import React from "react";

import style from "./NotFound.module.scss"

import {Link} from "react-router-dom";

export const NotFoundBlock = () => {
  return(
		<h1 className={style.notFound}>
			<p>Станица не найдена <icon>😕</icon></p>
			<p>
				Такой страницы нет в нашем интернет магазине
			</p>
			<Link to={"/"}  className="button button--black">
				<span>Вернуться на главную</span>
			</Link>
		</h1>
	)
}