import React from 'react';

class AddBuilding extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            code: '',
            address: '',
            latitude: '',
            longitude: '',
            addedBuilding: false
        };
        this.alert = "";
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }
    
    processForm(event){
        event.preventDefault();
        var building = {
            name: this.state.name,
            code: this.state.code,
            address: this.state.address,
            coordinates: {
                longitude: this.state.longitude,
                latitude: this.state.latitude
            }
        }
        this.props.addBuilding(building);
        this.setState({
            name: '',
            code: '',
            address: '',
            latitude: '',
            longitude: '',
            addedBuilding: true
        });
    }

	render() {

        function Alert(props){
            if(props.addedBuilding){
                return(<div className='alert alert-primary alert-dismissible fade show'>Added Building!</div>);
            }else{
                return("");
            }
        }
		return(
            <form onSubmit={this.processForm.bind(this)}>
                <Alert addedBuilding={this.state.addedBuilding}/>
                <h1>Add Building</h1>
                <div className="form-group">
                    <label htmlFor="name">Building Name</label>
                    <input type="text" className="form-control" name="name" value={this.state.name} placeholder="Full Building Name" onChange={this.handleInputChange.bind(this)}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="code">Building Code</label>
                    <input type="text" className="form-control" name="code" value={this.state.code} placeholder="Code" onChange={this.handleInputChange.bind(this)}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Building Address</label>
                    <input type="text" className="form-control" name="address" value={this.state.address} placeholder="Full Building Address" onChange={this.handleInputChange.bind(this)}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Latitude</label>
                    <input type="number" className="form-control" name="latitude" value={this.state.latitude} placeholder="Latitude" onChange={this.handleInputChange.bind(this)}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Longitude</label>
                    <input type="number" className="form-control" name="longitude" value={this.state.longitude} placeholder="Longitude" onChange={this.handleInputChange.bind(this)}></input>
                </div>
                <input type="submit" className="btn btn-primary"></input>
            </form>
        );
	}
}
export default AddBuilding;
