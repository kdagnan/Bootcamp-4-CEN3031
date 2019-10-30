import React from 'react';


class BuilingList extends React.Component {

	render() {
		//console.log('This is my directory file', this.props.data);
		const { data } = this.props;

		const buildingList = data.filter(building => {
			return building.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) > -1 || building.code.toLowerCase().indexOf(this.props.filterText.toLowerCase()) > -1
		})
		.map(directory => {
			return (
				<tr key={directory.id}
				onClick={() => this.props.selectedUpdate(directory.id)}
				>
					<td>{directory.code} </td>
					<td> {directory.name} </td>
				</tr>
			);
		});

		return <tbody>{buildingList}</tbody>;
	}
}
export default BuilingList;
