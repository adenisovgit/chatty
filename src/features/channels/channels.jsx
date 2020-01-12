import React from 'react';
import { ListGroup } from 'react-bootstrap';
import connect from '../../connect';


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
          <ListGroup.Item
            key={id}
            variant={style}
            className={id === activeChannel ? 'active' : ''}
            onClick={() => setActiveChannel(id)}
          >
            {name}
            {removable && (
            <button type="button" className="close float-right" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            )}
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
}

export default Channels;
