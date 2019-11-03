import React from 'react';

class RemoveBuilding extends React.Component {
	render() {

        return (
            <button onClick={this.props.removeBuilding}>Remove Building</button>
        );
    }
}
export default RemoveBuilding;
