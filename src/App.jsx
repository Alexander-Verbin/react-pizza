import React, {useState,createContext} from "react";

import {Route, Routes} from "react-router-dom";

import "./scss/app.scss"

import {Header} from "./components/Header/Header";
import {Home} from "./pages/Home/Home";
import {Card} from "./pages/Card/Card";
import {NotFound} from "./pages/NotFound/NotFound";

export const AppContext = createContext();
export const App = () => {

	const [searchValue, setSearchValue] = useState('');

	return (
		<div className="wrapper">
			<AppContext.Provider value={{searchValue,setSearchValue}}>
				<Header/>
				<div className="content">
					<Routes>
						<Route path={"/"} element={<Home/>}/>
						<Route path={"/card"} element={<Card/>}/>
						<Route path={"*"} element={<NotFound/>}/>
					</Routes>
				</div>
			</AppContext.Provider>
		</div>
	);
}
