import React from 'react';
import { connect } from 'react-redux';
import { ListGroup } from 'react-bootstrap';


// import { addChannel, removeChannel } from '../actions';
import { setActiveChannel } from './activeChannelSlice';


const mapStateToProps = ({ channels, activeChannel }) => {
  const props = { channels, activeChannel };
  return props;
};

const mapDispatchToProps = { setActiveChannel };

class Channels extends React.PureComponent {
  render() {
    // eslint-disable-next-line no-shadow
    const { channels, activeChannel, setActiveChannel } = this.props;

    return (
      <ListGroup>
        {channels.map(({ id, name, style }) => (
          <ListGroup.Item
            as="button"
            type="button"
            key={id}
            variant={style}
            className={id === activeChannel ? 'active' : ''}
            onClick={() => setActiveChannel(id)}
          >
            {name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Channels);
