import React, { Component } from "react";
import "./collapse.css";

class Collapse extends Component {
	bodyClasses = "";

	constructor(props) {
		super(props);

		this.state = {
			shown: false,
			onCollapse: props.onCollapse,
			onCollapsed: props.onCollapsed,
			onExpand: props.onExpand,
			onExpanded: props.onExpanded,
			headerContent: props.headerContent
		};

		this.toggle = this.toggle.bind(this);
		this.show = this.show.bind(this);
		this.hide = this.hide.bind(this);
	}

	toggle() {
		this.setState({ shown: !this.state.shown });
	}

	show() {
		this.setState({ shown: true });
	}

	hide() {
		this.setState({ shown: true });
	}

	render() {
		return (
			<div className="col-12">
				<div className={"c-collapse card" + (this.state.shown ? "" : " shown")}>
					<div className="c-collapse__header card-header" onClick={this.toggle}>
						{!!this.state.headerContent
							? this.state.headerContent
							: "Header Panel"}

						<i className="fa fa-arrow-circle-up" />
					</div>

					<div className="c-collapse__body card-body">
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
}

export default Collapse;
