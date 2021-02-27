import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import ToggleButton from "../ToggleButton/ToggleButton";
import classes from "./Toolbar.css";
const Toolbar = (props) => (
	<header className={classes.Toolbar}>
		<ToggleButton clicked={props.clicked} />
		<div className={classes.Logo}>
			<Logo />
		</div>
		<nav className={classes.DesktopOnly}>
			<NavigationItems />
		</nav>
	</header>
);

export default Toolbar;
