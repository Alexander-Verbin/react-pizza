import React from "react";

export const Categories = ({activeIndex,onClickCategory}) => {
	const categories = [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые'
	];
  return(
		<div className="categories">
			<ul>
				{
					categories.map((value,index) => (
						<li key={index}
								onClick={()=> onClickCategory(index)}
								className={activeIndex === index ? 'active' : ''}>
							{value}
						</li>
					))
				}

			</ul>
		</div>
	)
}