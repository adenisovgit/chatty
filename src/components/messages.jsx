import React from 'react';

import { connect } from 'react-redux';
// import { addChannel, removeChannel } from '../actions';


const mapStateToProps = ({ messages }) => {
  const props = { messages };
  return props;
};

class Messages extends React.PureComponent {
  render() {
    const { messages, activeChannel } = this.props;
    return (
      <ul className="list-group">
        {messages.map(({ id, name }) => (
          <button
            type="button"
            key={id}
            className={`list-group-item list-group-item-action ${id === activeChannel ? 'active' : ''}`}
          >
            {name}
          </button>
        ))}
      </ul>
    );
  }
}

export default connect(mapStateToProps)(Channels);
