import { Component } from 'react';

export default class Image extends Component {
  render() {
    //extract the necessary props and setup the CSS attributes
    //as inline styles on our <div />
    // Ideally, want to use our component as if it was
    //regular HTML markup
    let {mode, src, height, width, style, ...props} = this.props;

    //mode which may be specified as fit or fill. This allows
    //us to scale proportionally and crop the image appropriately.
    let modes = {
      'fill': 'cover',
      'fit': 'contain'
    };


    //Either one of the mode
    let size = modes[mode] || 'contain';

    //Add some default styles if they are not
    //specified by the parent component
    let defaults = {
       height: height || 100,
       width: width || 100,
       backgroundColor: 'gray'
       };

    //setup the CSS styles we require (mostly background-
    //attributes.) ES6's template strings allow us to
    //interpolate the url from src easily
    let important = {
        backgroundImage: `url("${src}")`,
        backgroundSize: size,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
    };

    //spread operator ... to expand props
    //into the <div /> element and also merge inline style
    //the parent component might have specified
    //keys from important to override the same keys
    //if they are specified in style
    return <div> {...props} style={{...style, ...important}} </div>
  }
}
