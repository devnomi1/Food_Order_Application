import React from 'react';
import classes from './Header.module.css'
import imageMeals from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton';
const Header = (props) => {
    return (
			<React.Fragment>
				<header className={classes.header}>
					<h1>ReactMeals</h1>
				<HeaderCartButton onClick={props.onShowCart}/>
				</header>

				<div className={classes['main-image']}>
					<img src={imageMeals} alt='A Table of full dilious' />
				</div>
			</React.Fragment>
		);
};

export default Header;
