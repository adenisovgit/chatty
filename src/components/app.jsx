import React from 'react';
import { connect } from 'react-redux';
// import { addChannel, removeChannel } from '../actions';


const mapStateToProps = ({ channels }) => {
  const props = { channels };
  return props;
};

class App extends React.Component {
  renderChannels = (channels) => {
    if (channels.length === 0) {
      return null;
    }
    return (
      <ul className="list-group">
        {channels.map(({ id, name }) => (
          <li key={id} className="list-group-item d-flex">
            <span className="mr-auto">{name}</span>
          </li>
        ))}
      </ul>
    );
  };

  render() {
    const { channels } = this.props;
    return (
      <div className="col-12 col-md-3">
        {this.renderChannels(channels)}
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
