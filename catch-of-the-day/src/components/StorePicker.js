import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    goToStore(event) {
        event.preventDefault();
        const storeId = this.storeInput.value;

        this.context.router.transitionTo(`/store/${storeId}`);
    }

    render() {
        return (
            <form className="store-selector" onSubmit={ this.goToStore.bind(this) }>
            { /* <form className="store-selector" onSubmit={ (event) => this.goToStore(event) }> <- this is syntactically equal to the line above */ }
                <h2>Please Enter A Store</h2>
                <input type="text" required placeholder="Store Name" defaultValue={ getFunName() } ref={ (input) => { this.storeInput = input } } />
                <button type="submit">Visit Store -></button>
            </form>
        )
    }
}

// Surface the router using context
StorePicker.contextTypes = {
    router: React.PropTypes.object
};

export default StorePicker;