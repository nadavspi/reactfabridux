import React from 'react';
import fabric from 'fabric';
import { connect } from 'react-redux';
import OptionsList from './OptionsList';

export default React.createClass({
  propTypes: {
    productId: React.PropTypes.number.isRequired,
    createCanvas: React.PropTypes.func.isRequired,
    addToCanvas: React.PropTypes.func.isRequired,
    getOptions: React.PropTypes.func.isRequired
  },

  componentDidMount() {
    this.props.createCanvas(this.props.id);
  },

  handleGetOptions() {
    this.props.getOptions(this.props.productId);
  },

  handleAddShape() {
    this.props.addToCanvas({
      id: this.props.id,
      newObject: new fabric.Rect({
	width: 10, height: 20, fill: '#f55', opacity: 0.7
      })
    });
  },

  render() {
    return (
      <div>
        <h1>My name is <code>{this.props.id}</code></h1>
        <canvas id={this.props.id} width="600" height="600" style={{ border: '1px solid black' }}></canvas>
	<div>
          <button type="button" onClick={this.handleAddShape}>Add a rectangle</button>{' '}
	</div>
	<OptionsList handleGetOptions={this.handleGetOptions} />
      </div>
    );
  }
});
