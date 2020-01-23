import React from 'react';
import { ListGroup } from 'react-bootstrap';
import connect from '../../connect';

import Channel from './channel';

const mapStateToProps = ({ channels, activeChannel, ui }) => {
  const props = { channels, activeChannel, ui };
  return props;
};

@connect(mapStateToProps)
class Channels extends React.PureComponent {
  render() {
    const {
      channels, activeChannel, setActiveChannel,
    } = this.props;
    return (
      <ListGroup>
        {channels.map(({
          id, name, style, removable,
        }) => (
          <Channel
            key={id}
            id={id}
            variant={style}
            isActive={id === activeChannel ? 'active' : ''}
            handleClick={() => setActiveChannel(id)}
            name={name}
            removable={removable}
          />
        ))}
      </ListGroup>
    );
  }
}

export default Channels;
