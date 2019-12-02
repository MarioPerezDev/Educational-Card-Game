import React from 'react';

export default class Card extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    let cardClassName = "card";
    /*
    if (algo que se active al hacerle click){
    cardClassName += " selected"
  }
    */
    return (
      <div className={caddClassName}>
        <div className="card-top row">
            <div id="number" className="card-number column">
            {this.props.number}
            </div>
            <div className="card-name column">
            {this.props.name}
            </div>
            <div className="card-power column">
            {this.props.power}
            </div>
        </div>

        <div className="card-image">
            <img src={this.props.image} alt="cardimage"/>
        </div>
        <div className="card-power-text">
          <p>
            {this.props.powerinfo}
          </p>
        </div>
      </div>
    );
  }
}
