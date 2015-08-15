import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Canvas from './components/Canvas';
import { createCanvas, addToCanvas } from 'actions/canvas';
import { getOptions } from 'actions/options';

const App = React.createClass({
  render() {
    const boundActionCreators = bindActionCreators({
      createCanvas,
      addToCanvas,
      getOptions
    }, this.props.dispatch);

    return (
      <div>
        <Canvas id="boom" productId={1} {...boundActionCreators} />
        <Canvas id="yo" productId={2} {...boundActionCreators} />
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    canvas: state.canvas,
    options: state.options
  };
}

export default connect(mapStateToProps)(App);
