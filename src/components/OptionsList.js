import React from 'react';
import fabric from 'fabric';

export default React.createClass({
  propTypes: {
    handleGetOptions: React.PropTypes.func.isRequired
  },

  render() {
    return (
      <div>
	<h2>Options</h2>
	<button type="button" onClick={this.props.handleGetOptions}>Get options</button>
      </div>
    );
  }
});
