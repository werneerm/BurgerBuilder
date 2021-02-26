import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Layout/Burger/Burger";

export default class BurgerBuilder extends Component {
	render() {
		return (
			<Aux>
				<Burger />
				<div>Build Controls</div>
			</Aux>
		);
	}
}
