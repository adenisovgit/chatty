import React from 'react';
import { ListGroup } from 'react-bootstrap';

export default function Channel(props) {
  const {
    key, variant, name, removable, isActive
  } = props;
  return (
    <ListGroup.Item
      key={key}
      variant={variant}
      className={id === activeChannel ? 'active' : ''}
      onClick={() => setActiveChannel(id)}
    >
      {name}
      {removable && (
        <>
          <button type="button" className="close float-right" aria-label="Delete">
            <span aria-hidden="true">&times;</span>
          </button>
          <button type="button" className="close float-right" aria-label="Rename">
            <img className="float-right" src="assets/edit.svg" alt="" />
          </button>
        </>
      )}
    </ListGroup.Item>
  );
}
