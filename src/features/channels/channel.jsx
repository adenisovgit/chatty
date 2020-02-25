import React from 'react';
import { ListGroup } from 'react-bootstrap';
import cn from 'classnames';

import RenameChannelButton from './renameChannelButton';
import RemoveChannelButton from './removeChannelButton';

export default function Channel(props) {
  const {
    variant, name, removable, isActive, handleClick, id,
  } = props;

  const itemCN = cn(isActive, 'hover-button');
  return (
    <ListGroup.Item
      variant={variant}
      className={itemCN}
      onClick={handleClick}
    >
      {name}
      {removable && (
        <div className="hover-button-icons">
          <RenameChannelButton id={id} oldName={name} />
          <RemoveChannelButton id={id} name={name} />
        </div>
      )}
    </ListGroup.Item>
  );
}
