import React from 'react';
import { Line } from 'rc-progress';
import ChildrenProgress from './ChildrenProgress'
import ChildrenProgressRestart from './ChildrenProgressRestart'

class StatefulProgressBar extends React.Component {
  constructor() {
    super();
    this.state = {
      percent: 0,
    };
    //this.changeState = this.changeState.bind(this);
    //this.restart = this.restart.bind(this);
  }

  changeState(value) {
    const colorMap = ['#73BF45'];
    this.setState({
      percent: this.state.percent + 25 < 100 ? this.state.percent + 25 : 100,
      color: colorMap,
    });
  }

  restart() {
    clearTimeout(this.tm);
    this.setState({
      percent: 0
    });
  }

  render() {
    const containerStyle = {
      width: '250px',
    };
    return (
      <div>
        <h3>Line Progress {this.state.percent}%</h3>
        <div style={containerStyle}>
          <Line percent={this.state.percent} trailWidth="4"
                                             strokeWidth="4"
                                             strokeColor={this.state.color}
                                             strokeLinecap="round" 	/>
        </div>
        <p>
          <ChildrenProgress changeState={this.changeState.bind(this)} />
          <ChildrenProgressRestart restart={this.restart.bind(this)} />
        </p>
      </div>
    );
  }
}

export default StatefulProgressBar;
