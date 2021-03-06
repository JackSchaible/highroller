import React, { Component } from "react";
import "../../styles/Common.css";
import "./input.css";
import { isArray } from "util";

class Input extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "",
			valid: false,
			touched: false,
			pristine: true,
			error: "",
			type: !!props.type ? props.type : "text",
			containerClasses: "form-group " + props.containerClasses,
			id: props.id,
			label: props.label,
			placeholder: props.placeholder,
			validators: props.validators,
			onChange: props.onChange,
			tabIndex: props.tabIndex
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
		this.isValid(false, event.target.value);

		if (this.state.onChange)
			this.state.onChange(this.state.id, event.target.value);
	}

	handleBlur() {
		this.setState({
			touched: true,
			pristine: false
		});

		this.isValid(!this.state.touched);
	}

	isValid(justTouched, newValue) {
		let value = this.state.value;
		if (!value && newValue) value = newValue;

		let me = this,
			valid = true;

		if (!this.state.validators || !isArray(this.state.validators)) return valid;

		this.state.validators.forEach(e => {
			if (valid) {
				if (e.type === "Required") {
					if (!value) {
						me.setState({
							error: (
								<span>
									<i className="fal fa-engine-warning" /> A value must be
									entered.
								</span>
							)
						});
						valid = false;
					}
				} else {
					const numericValue = parseFloat(value);

					if (e.type === "Numeric") {
						if (isNaN(numericValue)) {
							me.setState({
								error: (
									<span>
										<i className="fal fa-engine-warning" /> A numeric value must
										be entered.
									</span>
								)
							});
							valid = false;
						}
					} else if (e.type === "Range") {
						if (e.min && !e.max && numericValue < e.min) {
							me.setState({
								error: (
									<span>
										<i className="fal fa-engine-warning" /> Value must be
										greater than {e.min}.
									</span>
								)
							});
							valid = false;
						} else if (e.max && !e.min && numericValue > e.max) {
							me.setState({
								error: (
									<span>
										<i className="fal fa-engine-warning" /> Value must be less
										than {e.max}.
									</span>
								)
							});
							valid = false;
						} else if (numericValue > e.max || numericValue < e.min) {
							me.setState({
								error: (
									<span>
										<i className="fal fa-engine-warning" /> Value must be
										between {e.min} and {e.max}.
									</span>
								)
							});
							valid = false;
						}
					}
				}
			}
		});

		let result;

		if (!justTouched) result = valid || !this.state.touched;
		else result = valid;

		if (valid) this.setState({ error: null });

		return result;
	}

	render() {
		let view = null;

		if (
			!this.state.type ||
			this.state.type === "text" ||
			this.state.type === "number"
		)
			view = (
				<div>
					<label htmlFor={this.state.id}>{this.state.label}</label>
					<input
						tabIndex={this.state.tabIndex}
						name={this.state.id}
						type={this.state.type}
						className="form-control"
						placeholder={this.state.placeholder}
						value={this.state.value}
						onChange={this.handleChange}
						onBlur={this.handleBlur}
					/>
				</div>
			);
		else if (this.state.type === "radio" || this.state.type === "checkbox")
			view = (
				<label className="u-flex u-flex__align-items--center">
					<input
						tabIndex={this.state.tabIndex}
						name={this.state.id}
						type={this.state.type}
						placeholder={this.state.placeholder}
						value={this.state.value}
						onChange={this.handleChange}
						onBlur={this.handleBlur}
					/>
					<span>{this.state.label}</span>
				</label>
			);

		return (
			<div className={this.state.containerClasses}>
				{view}
				<p className="text-danger u-margin-top-half">{this.state.error}</p>
			</div>
		);
	}
}

export default Input;
