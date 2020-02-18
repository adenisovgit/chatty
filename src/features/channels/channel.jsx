import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import cn from 'classnames';

import { handleRemoveChannel } from './processingChannelSlice';
import RenameChannelButton from './renameChannelButton';

export default function Channel(props) {
  const {
    variant, name, removable, isActive, handleClick, id,
  } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleRemove = (event) => {
    event.stopPropagation();
    dispatch(handleRemoveChannel(id, name));
  };

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
          <button onClick={handleRemove} className="btn" type="button" aria-label="Remove" title={t('removechannel')}>
            &times;
          </button>
        </div>
      )}
    </ListGroup.Item>
  );
}
