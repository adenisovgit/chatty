import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import cn from 'classnames';

import { handleRemoveChannel } from './processingChannelSlice';
import RenameChannelButton from './renameChannelButton';
import RemoveChannelButton from './removeChannelButton';

export default function Channel(props) {
  const {
    variant, name, removable, isActive, handleClick, id,
  } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();

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
