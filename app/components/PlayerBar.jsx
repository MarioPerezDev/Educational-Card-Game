import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default class PlayerBar extends React.Component {
  render(){
      const percentage = 66;
    return (
      <div className={this.props.class}>
          <div className="player-image playerbar-item">
          Imagen
          </div>
          <div className="player-name playerbar-item">
          Enemigo
          </div>
          <div className="player-health playerbar-item">
          <CircularProgressbar className="health" value={percentage} text={`${percentage}`} strokeWidth={16}
          styles={buildStyles({
            textSize: "30px",
            strokeLinecap: "butt",
          })} />
          </div>
      </div>
    );
  }
}
