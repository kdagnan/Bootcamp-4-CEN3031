import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      originalListSize: this.props.data.length,
      selectedBuilding: null,
      buildingData: this.props.data
    };
  }

  filterUpdate(value) {
    this.setState({
      filterText: value
    });
    //Here you will need to set the filterText property of state to the value passed into this function
  }

  selectedUpdate(id) {
    console.log("Selected: " + id);
    const selectedBuilding = this.state.buildingData.filter(building => building.id === id)[0];
    console.log("Building: " + JSON.stringify(selectedBuilding));
    this.setState({selectedBuilding: selectedBuilding});
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
  }

  removeBuilding(id){
    console.log("Removing " + id);
    this.setState({
      buildingData: this.state.buildingData.filter(building => building.id !== id),
      selectedBuilding: null
    });
  }

  clearSelection(){
    this.setState({
      selectedBuilding: null
    })
  }

  addBuilding(building){
    var newBuildings = this.state.buildingData;
    building.id = this.state.originalListSize + 1;
    newBuildings.push(building);
    this.setState({
      buildingData: newBuildings
    });
  }

  render() {
    
    return (
      <div className="bg container">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search filterUpdate={this.filterUpdate.bind(this)}/>
        <main>
          <div className="row">
            <div className="column1">
                <button className="btn btn-primary" style={{margin: 5 + 'px'}} onClick={() => this.clearSelection()}>Add Building</button>
                <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <td>Code</td>
                    <td>Name</td>
                  </tr>
                </thead>
                  <BuildingList
                    data={this.state.buildingData}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                  />
                </table>
            </div>
            <div className="column2">
              <ViewBuilding selectedBuilding={this.state.selectedBuilding} removeBuilding={this.removeBuilding.bind(this)} addBuilding={this.addBuilding.bind(this)}/>
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
