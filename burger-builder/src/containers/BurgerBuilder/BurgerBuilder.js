import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Layout/Burger/Burger";
import BuildControls from "../../components/Layout/Burger/BuildControls/BuildControls";

export default class BurgerBuilder extends Component {
	// constructor(props){
	//     super(props)
	//     this.state={}
	// }
	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0,
		},
	};
	render() {
		return (
			<Aux>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls />
			</Aux>
		);
	}
}
