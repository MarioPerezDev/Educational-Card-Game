import React from 'react';

export default class Card extends React.Component {
  render(){
    return (
      <div className="card">
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
