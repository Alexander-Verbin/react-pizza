import React from "react";

import {Route, Routes} from "react-router-dom";

import "./scss/app.scss"


import {Header} from "./components/Header/Header";
import {Home} from "./pages/Home/Home";
import {Card} from "./pages/Card/Card";
import {NotFound} from "./pages/NotFound/NotFound";


export const App = () => {

	return (
		<div className="wrapper">
			<Header/>
			<div className="content">
					<Routes>
						<Route path={"/"} element={<Home/>}/>
						<Route path={"/card"} element={<Card/>}/>
						<Route path={"*"} element={<NotFound/>}/>
					</Routes>
			</div>
		</div>
	);
}
