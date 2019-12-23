import React from 'react';

import { connect } from 'react-redux';
// import { addChannel, removeChannel } from '../actions';


const mapStateToProps = ({ channels, activeChannel }) => {
  const props = { channels, activeChannel };
  return props;
};

class Channels extends React.PureComponent {
  render() {
    const { channels, activeChannel } = this.props;
    return (
      <ul className="list-group">
        {channels.map(({ id, name }) => (
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
