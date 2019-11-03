import React from 'react';

class AddBuilding extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            id: '',
            code: '',
            name: '',
            coordinates: {
                latitude: '',
                longitude: ''
            },
            address: '',
            error: false
        };
	}
	changeName(){
		this.setState({name: this.name.value})
	}
	changeCode(){
		this.setState({code: this.code.value})
	}
	changeLong(){
		this.setState({coordinates: {latitude: this.state.coordinates.latitude, longitude: this.newlong.value}})
	}
	changeLat(){
		this.setState({coordinates: {latitude: this.newlat.value , longitude: this.state.coordinates.longitude}})
	}
	changeAddr(){
		this.setState({address: this.addr.value})
	}
	Add(){
		if(this.state.name && this.state.code){
			this.props.addBuilding(this.state)
			this.setState({id: '',
			code: '',
			name: '',
			coordinates: {
				latitude: '',
				longitude: ''
			},
			address: '',})
		} else {
			this.setState({error: true})
		}
	}

	render() {
		let error = this.state.error ? 
            <p className="error-text">Please enter a name and a code</p> : null;
        return (
            <div>
                {error}
                <input 
                    type="text" 
					placeholder="Code: " 
					value={this.state.code}
                    ref={ (value) => { this.code = value } } 
                    onChange={this.changeCode.bind(this)}
                />
                <input 
                    type="text" 
					placeholder="Name: "
					value={this.state.name}
                    ref={ (value) => { this.name = value } }
                    onChange={this.changeName.bind(this)}
                />
                <input 
                    type="text" 
					placeholder="Latitude: " 
					value={this.state.coordinates.latitude}
                    ref={ (value) => { this.newlat = value } } 
                    onChange={this.changeLat.bind(this)}
                />
                <input 
                    type="text" 
					placeholder="Longitude: " 
					value={this.state.coordinates.longitude}
                    ref={ (value) => { this.newlong = value } } 
                    onChange={this.changeLong.bind(this)}
                />
                <input 
                    type="text" 
					placeholder="Address: " 
					value={this.state.address}
                    ref={ (value) => { this.addr = value} } 
                    onChange={this.changeAddr.bind(this)}
                />
                <button onClick={this.Add.bind(this)}>Add</button>
            </div>
        );
	}
}
export default AddBuilding;
