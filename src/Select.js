import React from 'react';
// import createClass from 'create-react-class';
// import PropTypes from 'prop-types';
import Select from 'react-select';
// import { defaults } from 'gh-pages';
// import { options_filters } from '.';



const MultiSelect = ({
  // dark,
  // handleToggleSidebar,
  // handleDefaultf,
  options_filters,
  defaultf,
  handleDefaultf,
}) => {

// var MultiSelectField = createClass({
// 	displayName: 'MultiSelectField',
// 	propTypes: {
// 		label: PropTypes.string,
	
// 	},
// 	getInitialState () {
// 		return {
// 			removeSelected: true,
// 			disabled: false,
// 			crazy: false,
// 			stayOpen: false,
// 			value: [],
// 			rtl: false,
// 		};
// 	},
// 	handleSelectChange (value) {
// 		console.log('You\'ve selected:', value);
// 		this.setState({ value });
// 	},

// 	render () {
// 		const { crazy, disabled, stayOpen, value } = this.state;
// 		const options = crazy ? WHY_WOULD_YOU : FLAVOURS;
		return (
			<div className="section">
				<h3 className="section-heading">Filtros</h3>
				<Select
					// closeOnSelect={!stayOpen}
					// disabled={disabled}
					isMulti
					onChange={handleDefaultf}
					options={options_filters}
					placeholder="Select your favourite(s)"
          // removeSelected={this.state.removeSelected}
					// rtl={this.state.rtl}
					// simpleValue
					value={defaultf}
				/>
			</div>
		);
	// }
};

export default MultiSelect;

// module.exports = MultiSelect;