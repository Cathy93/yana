// Dependencies
import React from 'react'
import ReactDOM from 'react-dom';
import Mosaic from 'mosaic-audio';
import { Line } from 'rc-progress';
import ChildrenProgress from '../components/ChildrenProgress'



// Components
import Footer from '../components/Footer'

// Img
import Thumbnails from '../components/Thumbnails'
import ActionButton from '../components/ActionButton'
import ActionButton1 from '../components/ActionButton1'
import ProgressBar from '../components/ProgressBar'

class WordPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      percent: 0,
    };
    //this.changeState = this.changeState.bind(this);
  }

  changeState(value) {
    const colorMap = ['#73BF45'];
    this.setState({
      percent: this.state.percent + 25 < 100 ? this.state.percent + 25 : 100,
      color: colorMap,
    });
  }

  render() {
    return (
      <div>

        <Thumbnails
          course_icon={this.props.word.image}
          course_icon_alt="animal_icon"
          titleOne={this.props.word.title[this.props.languageId]}
          titleTwo ={this.props.word.title["eng"]}
        />


        <Mosaic
          key={this.props.word.audio[this.props.languageId]}
          hover={true}
          margin={false}
          playClass="fa fa-volume-up audio"
          pauseClass="fa fa-volume-up audio"
          source={this.props.word.audio[this.props.languageId]}
        />

        <div className="button-wrapper" >
          <ActionButton1 className="button-thin" title="Next"
            onClick={ this.changeState.bind(this)}
            onClick={ this.props.nextWord.bind(this)}

          />

          <ActionButton className="button-thin" title="Progress"
            onClick={this.changeState.bind(this)} />

          <h3>Word Progress {this.state.percent}%</h3>
          <Line percent={this.state.percent} trailWidth="4"
                                             strokeWidth="4"
                                             strokeColor={this.state.color}
                                             strokeLinecap="round" 	/>
        </div>

        <h2>{this.props.languageId}</h2>
        <ProgressBar CurrentLevel={25} />
        <Footer />
      </div>
    );
  }

}


///const WordPage = ({word, nextWord, languageId}) => (

///)

export default WordPage;
