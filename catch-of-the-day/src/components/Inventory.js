import React from 'react';

import AddFishForm from './AddFishForm';
import '../sample-fishes';

class Inventory extends React.Component {
    constructor(){
        super();

        this.renderInventory = this.renderInventory.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, key) {
        const fish = this.props.fishes[key];

        const updatedFish = { ...fish, [event.target.name]: event.target.value };
        this.props.updateFish(key, updatedFish);
    }

    renderInventory(key) {
        const fish = this.props.fishes[key];
        return(
            <div className="fish-edit" key={key}>
                <input type="text" name="name" placeholder="Fish Name"
                       value={fish.name}
                       onChange={(event) => this.handleChange(event, key)}/>

                <input type="text" name="price" placeholder="Fish Price"
                       value={fish.price}
                       onChange={(event) => this.handleChange(event, key)}/>

                <select name="status" placeholder="Fish Status"
                        value={fish.status}
                        onChange={(event) => this.handleChange(event, key)}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>

                <textarea type="text" name="desc" placeholder="Fish Desc"
                          value={fish.desc}
                          onChange={(event) => this.handleChange(event, key)}>
                </textarea>
                <input type="text" name="image" placeholder="Fish Image"
                       value={fish.image}
                       onChange={(event) => this.handleChange(event, key)}/>
                <button onClick={ () => this.props.removeFish(key)}>Remove Fish</button>
            </div>
        )
    }

    render() {
        return (
            <div>
                <h2>Inventory</h2>
                { Object.keys(this.props.fishes).map(this.renderInventory) }
                <AddFishForm addFish={ this.props.addFish } />
                <button onClick={ this.props.loadSamples }>Load Sample Fishes</button>
            </div>
        )
    }
}

Inventory.PropTypes = {
    fishes: React.PropTypes.object.isRequired,
    addFish: React.PropTypes.func.isRequired,
    updateFish: React.PropTypes.func.isRequired,
    removeFish: React.PropTypes.func.isRequired,
    loadSamples: React.PropTypes.func.isRequired
};

export default Inventory;