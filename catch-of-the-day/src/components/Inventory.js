import React from 'react';

import AddFishForm from './AddFishForm';
import '../sample-fishes';

class Inventory extends React.Component {


    render() {
        return (
            <div>
                <h2>Inventory</h2>
                <AddFishForm addFish={ this.props.addFish } />
                <button onClick={ this.props.loadSamples }>Load Sample Fishes</button>
            </div>
        )
    }
}

export default Inventory;