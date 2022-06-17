import { Component } from "react";
import './card.styles.css'


class Card extends Component {
    render() {

        const { name, id, speed, power } = this.props.monster;
        return (
            //keys are used to give an unique identity to the monsters in the list
            <div className="card-container" key={id}>
                <img
                    alt={`Hero ${name}`}
                    src={`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/${id}-${name}.jpg`} />

                <h2>{name}</h2>
                <p><b>{`speed ${speed}`}</b></p>
                <p><b>{`power ${power}`}</b></p>
                {/* <button>Increase Power</button> */}
            </div>
        )
    }
}

export default Card;