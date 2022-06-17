import { Component } from "react";
import './search-box.styles.css'


// created the individual SearchBox component so that it will be reusable.
class SearchBox extends Component {
    render() {
        return (

            <input
                // classname, plaseholder, onchange should be unique if it needs to be used in multiple times, hence used 'this.props'
                className={`search-box ${this.props.className}`}
                type='search'
                placeholder={this.props.placeholder}
                onChange={this.props.onChangeHandler}
            />

        )
    }
}

export default SearchBox;