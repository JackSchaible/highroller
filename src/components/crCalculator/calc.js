import React, { Component } from "react";
import "../../styles/Common.css";
import Input from "../forms/input";
import Collapse from "../ui/collapse/collapse";

import "./calc.css";

class CrCalulator extends Component {
	values = {};

	constructor(props) {
		super(props);
		this.state = {
			cr: ""
		};

		//TODO: is the mod modifying the value or the rating (i.e., table row position). Does it change?
		this.values = {
			atkMod: 0,
			babMod: 0,
			acMod: 0,
			hpMod: 0
		};

		this.handleChange = this.handleChange.bind(this);
		this.specialOptionChanged = this.specialOptionChanged.bind(this);
	}

	handleChange(id, value) {
		switch (id) {
			case "ac":
				this.values.ac = value;
				break;

			case "hp":
				this.values.hp = value;
				break;

			case "bab":
				this.values.bab = value;
				break;

			case "dps":
				this.values.dps = value;
				break;

			default:
				break;
		}

		if (this.values.ac && this.values.hp && this.values.bab && this.values.dps)
			this.calculateCr();
	}

	calculateCr() {
		let cr = 0,
			xp = 0,
			hpRating = 0,
			acRating = 0,
			dpsRating = 0,
			babRating = 0,
			defensiveCR = 0,
			offensiveCR = 0;

		hpRating = this.getHPRating(parseInt(this.values.hp, 10));
		acRating = this.getACRating(parseInt(this.values.ac, 10));
		dpsRating = this.getDPSRating(parseInt(this.values.dps, 10));
		babRating = this.getBABRating(parseInt(this.values.bab, 10));

		defensiveCR = hpRating;
		let defDiff = acRating - hpRating;

		if (defDiff < -1 || defDiff > 1) {
			defDiff = Math.ceil(defDiff / 2);
			defensiveCR += defDiff;
		}

		offensiveCR = dpsRating;
		let offDiff = babRating - dpsRating;

		if (offDiff < -1 || offDiff > 1) {
			offDiff = Math.ceil(offDiff / 2);
			offensiveCR += offDiff;
		}

		cr = Math.ceil((defensiveCR + offensiveCR) / 2);
		xp = this.getXP(cr);

		this.setState({ cr: cr, xp: xp });
	}

	getXP(cr) {
		let xp = 0;

		if (cr === 1) xp = 10;
		else if (cr === 2) xp = 25;
		else if (cr === 3) xp = 50;
		else if (cr === 4) xp = 100;
		else if (cr === 5) xp = 200;
		else if (cr === 6) xp = 450;
		else if (cr === 7) xp = 700;
		else if (cr === 8) xp = 1100;
		else if (cr === 9) xp = 1800;
		else if (cr === 10) xp = 2300;
		else if (cr === 11) xp = 2900;
		else if (cr === 12) xp = 3900;
		else if (cr === 13) xp = 5000;
		else if (cr === 14) xp = 5900;
		else if (cr === 15) xp = 7200;
		else if (cr === 16) xp = 8400;
		else if (cr === 17) xp = 10000;
		else if (cr === 18) xp = 11500;
		else if (cr === 19) xp = 13000;
		else if (cr === 20) xp = 15000;
		else if (cr === 21) xp = 18000;
		else if (cr === 22) xp = 20000;
		else if (cr === 23) xp = 22000;
		else if (cr === 24) xp = 25000;
		else if (cr === 25) xp = 33000;
		else if (cr === 26) xp = 41000;
		else if (cr === 27) xp = 50000;
		else if (cr === 28) xp = 62000;
		else if (cr === 29) xp = 75000;
		else if (cr === 30) xp = 90000;
		else if (cr === 31) xp = 105000;
		else if (cr === 32) xp = 120000;
		else if (cr === 33) xp = 135000;
		else if (cr === 34) xp = 155000;

		return xp;
	}

	getHPRating(value) {
		let rating = 0;

		if (value < 7) rating = 1;
		else if (value < 36) rating = 2;
		else if (value < 50) rating = 3;
		else if (value < 71) rating = 4;
		else if (value < 86) rating = 5;
		else if (value < 101) rating = 6;
		else if (value < 116) rating = 7;
		else if (value < 131) rating = 8;
		else if (value < 146) rating = 9;
		else if (value < 161) rating = 10;
		else if (value < 176) rating = 11;
		else if (value < 191) rating = 12;
		else if (value < 206) rating = 13;
		else if (value < 221) rating = 14;
		else if (value < 236) rating = 15;
		else if (value < 251) rating = 16;
		else if (value < 266) rating = 17;
		else if (value < 281) rating = 18;
		else if (value < 296) rating = 19;
		else if (value < 311) rating = 20;
		else if (value < 326) rating = 21;
		else if (value < 341) rating = 22;
		else if (value < 356) rating = 23;
		else if (value < 401) rating = 24;
		else if (value < 446) rating = 25;
		else if (value < 491) rating = 26;
		else if (value < 536) rating = 27;
		else if (value < 581) rating = 28;
		else if (value < 626) rating = 29;
		else if (value < 671) rating = 30;
		else if (value < 716) rating = 31;
		else if (value < 761) rating = 32;
		else if (value < 806) rating = 33;
		else if (value <= 850) rating = 34;

		return rating;
	}

	getACRating(value) {
		let rating = 0;

		if (value < 14) rating = 1;
		else if (value === 14) rating = 8;
		else if (value === 15) rating = 9;
		else if (value === 16) rating = 12;
		else if (value === 17) rating = 14;
		else if (value === 18) rating = 17;
		else if (value === 19) rating = 21;

		return rating;
	}

	getDPSRating(value) {
		let rating = 0;

		if (value < 2) rating = 1;
		else if (value < 4) rating = 2;
		else if (value < 6) rating = 3;
		else if (value < 9) rating = 4;
		else if (value < 15) rating = 5;
		else if (value < 21) rating = 6;
		else if (value < 27) rating = 7;
		else if (value < 33) rating = 8;
		else if (value < 39) rating = 9;
		else if (value < 45) rating = 10;
		else if (value < 51) rating = 11;
		else if (value < 57) rating = 12;
		else if (value < 63) rating = 13;
		else if (value < 69) rating = 14;
		else if (value < 75) rating = 15;
		else if (value < 81) rating = 16;
		else if (value < 87) rating = 17;
		else if (value < 93) rating = 18;
		else if (value < 99) rating = 19;
		else if (value < 105) rating = 20;
		else if (value < 111) rating = 21;
		else if (value < 117) rating = 22;
		else if (value < 123) rating = 23;
		else if (value < 141) rating = 24;
		else if (value < 159) rating = 25;
		else if (value < 177) rating = 26;
		else if (value < 195) rating = 27;
		else if (value < 213) rating = 28;
		else if (value < 231) rating = 29;
		else if (value < 249) rating = 30;
		else if (value < 267) rating = 31;
		else if (value < 285) rating = 32;
		else if (value < 303) rating = 33;
		else if (value <= 320) rating = 34;

		return rating;
	}

	getBABRating(value) {
		let rating = 0;

		if (value < 4) rating = 1;
		else if (value === 4) rating = 7;
		else if (value === 5) rating = 8;
		else if (value === 6) rating = 9;
		else if (value === 7) rating = 12;
		else if (value === 8) rating = 15;
		else if (value === 9) rating = 20;
		else if (value === 10) rating = 21;
		else if (value === 11) rating = 25;
		else if (value === 12) rating = 28;
		else if (value === 13) rating = 27;
		else if (value === 14) rating = 34;

		return rating;
	}

	specialOptionChanged(id, value) {
		if (id === "aggressive")
			if (value) this.values.atkMod += 2;
			else this.values.atkMod -= 2;
	}

	render() {
		let acValidators = [
			{ type: "Required" },
			{ type: "Numeric" },
			{ type: "Range", max: 19 }
		];

		let dpsValidators = [
			{ type: "Required" },
			{ type: "Numeric" },
			{ type: "Range", max: 320 }
		];

		let hpValidators = [
			{ type: "Required" },
			{ type: "Numeric" },
			{ type: "Range", max: 850, min: 0 }
		];

		let babValidators = [
			{ type: "Required" },
			{ type: "Numeric" },
			{ type: "Range", max: 19 }
		];

		let crDiv;

		if (this.state.cr) {
			let cr;

			if (this.state.cr < 5) {
				if (this.state.cr === 1) cr = 0;
				else if (this.state.cr === 2) cr = "1/8";
				else if (this.state.cr === 3) cr = "1/4";
				else cr = "1/2";
			} else cr = this.state.cr - 4;

			crDiv = (
				<div className="col-12 c-calc__cr-div">
					<div className="u-center u-margin-auto u-text-center">
						<p>Your monster's CR is:</p>{" "}
						<h3>
							{cr} ({this.state.xp}
							xp)
						</h3>
					</div>
				</div>
			);
		}

		return (
			<div className="c-calc u-margin-top-2x">
				<div className="u-text-center">
					<h3>Challenge Rating (CR) Calculator</h3>
					<p>A simple calculator for finding out the CR of your monsters!</p>
				</div>

				<div className="jumbotron u-margin-top-2x d-flex flex-wrap">
					<Input
						type="number"
						containerClasses="col-sm-6 col-12"
						id="hp"
						onChange={this.handleChange}
						label={
							<span>
								Step 1. Pick your <strong>Hit Points</strong>:
							</span>
						}
						validators={hpValidators}
						placeholder="HP"
						tabIndex="1"
					/>
					<Input
						type="number"
						containerClasses="col-sm-6 col-12"
						id="dps"
						onChange={this.handleChange}
						label={
							<span>
								Step 3. Pick your <strong>Damage per Round</strong>:
							</span>
						}
						validators={dpsValidators}
						placeholder="Damage/Round"
						tabIndex="3"
					/>
					<Input
						type="number"
						containerClasses="col-sm-6 col-12"
						id="ac"
						onChange={this.handleChange}
						label={
							<span>
								Step 2. Pick your <strong>AC</strong>:
							</span>
						}
						validators={acValidators}
						placeholder="Armor Class"
						tabIndex="2"
					/>
					<Input
						type="number"
						containerClasses="col-sm-6 col-12"
						id="bab"
						onChange={this.handleChange}
						label={
							<span>
								Step 4. Pick your <strong>Attack Bonus</strong>:
							</span>
						}
						validators={babValidators}
						placeholder="Attack Bonus"
						tabIndex="4"
					/>
					{/*
					<Collapse headerContent="Advanced Options">
						<div className="u-flex u-flex__wrap">
							<div className="col-sm-6 col-12">
								<Input
									type="checkbox"
									label="Aggressive"
									id="aggressive"
									name="aggressive"
									onChange={this.specialOptionChanged}
								/>
							</div>
						</div>
</Collapse>*/}
					{crDiv}
				</div>
			</div>
		);
	}
}

export default CrCalulator;
