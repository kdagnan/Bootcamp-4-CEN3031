import React from 'react';
import AddBuilding from './AddBuilding';



class ViewBuilding extends React.Component {
	render() {
		var link = '';
		if(this.props.selectedBuilding){
			if(this.props.selectedBuilding.coordinates){
				var latLong = this.props.selectedBuilding.coordinates.latitude + ',' + this.props.selectedBuilding.coordinates.longitude;
				link = "https://www.google.com/maps/search/?api=1&query=" + latLong;
			}
		}
		if(this.props.selectedBuilding != null){
			return(
				<div>
					<h1>Building Details</h1>
					<div className="card">
						<div className="card-body">
							<h5 className="card-title">{this.props.selectedBuilding.name}  <small className="text-muted">({this.props.selectedBuilding.code})</small></h5>
							<p className="card-text"><b>Address: </b> {this.props.selectedBuilding.address ? this.props.selectedBuilding.address : 'None Provided'}</p>
							<a className="btn btn-primary" rel="noopener noreferrer" href={link} target="_BLANK">Open in Google Maps</a>
							<button className="btn btn-danger" style={{margin: 5 + 'px'}} onClick={() => this.props.removeBuilding(this.props.selectedBuilding.id)}>Delete</button>
						</div>
					</div>
				</div>
			);
		}else{
			return (
				<div>
					<AddBuilding addBuilding={this.props.addBuilding.bind(this)}></AddBuilding>
				</div>
			);
		}
	}
}
export default ViewBuilding;
