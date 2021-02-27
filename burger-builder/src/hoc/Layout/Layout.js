import React, { Component } from "react";
import Aux from "../Aux";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import classes from "./Layout.css";

class Layout extends Component {
	state = {
		showSideDrawer: false,
	};
	sideDrawerCloseHandler = () => {
		this.setState({ showSideDrawer: false });
	};
	sideDrawerToggleHandler = () => {
		this.setState((prevState) => {
			return { showSideDrawer: !prevState.showSideDrawer };
		});
	};
	render() {
		return (
			<Aux>
				<Toolbar clicked={this.sideDrawerToggleHandler} />
				<SideDrawer
					open={this.state.showSideDrawer}
					closed={this.sideDrawerCloseHandler}
				/>
				{/* <div>Toolbar,SideDrawer,Backdrop</div> */}
				<main className={classes.Content}>{this.props.children}</main>
			</Aux>
		);
	}
}

export default Layout;
