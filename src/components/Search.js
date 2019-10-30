import React from 'react';

class Search extends React.Component {
	filterUpdate(event) {
		this.props.filterUpdate(this.myValue.value);
	}
	render() {
		//You will need to save the value from the textbox and update it as it changes
		//You will need the onChange value for the input tag to capture the textbox value
		
		return (
			<form>
				<input className="searchBar" type="text"
				 placeholder="Type to Filter" 
				 ref= {(value) => this.myValue = value}
				 onChange={this.filterUpdate.bind(this)}/>
			</form>
		);
	}
}
export default Search;
