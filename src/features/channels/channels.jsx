import React from 'react';
import { connect } from 'react-redux';
import { ListGroup, Toast } from 'react-bootstrap';


const mapStateToProps = ({ channels, activeChannel, ui }) => {
  const props = { channels, activeChannel, ui };
  return props;
};

@connect(mapStateToProps)
class Channels extends React.PureComponent {
  render() {
    const {
      channels, activeChannel, setActiveChannel, ui,
    } = this.props;
    const { /* toastText, */ toastShow } = ui;

    return (
      <>
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
        <Toast show={toastShow} />
      </>
    );
  }
}

export default Channels;
