import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import cn from 'classnames';

import { handleRemoveChannel } from './processingChannelSlice';

export default function Channel(props) {
  const {
    variant, name, removable, isActive, handleClick, id,
  } = props;
  const [isShown, setIsShown] = useState(false);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleRemove = (event) => {
    event.stopPropagation();
    dispatch(handleRemoveChannel(id, name));
  };
  const handleRename = (event) => {
    event.stopPropagation();
    dispatch(handleRemoveChannel(id, name));
  };

  const itemCN = cn(isActive, 'position-relative');
  return (
    <ListGroup.Item
      variant={variant}
      className={itemCN}
      onClick={handleClick}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {name}
      {removable && isShown && (
        <div className="position-absolute" style={{ right: 0, top: 0 }}>
          <button onClick={handleRename} className="btn btn-light" type="button" aria-label="Rename" title={t('renamechannel')}>
            <img src="assets/edit.svg" alt="" />
          </button>
          <button onClick={handleRemove} className="btn btn-light" type="button" aria-label="Remove" title={t('removechannel')}>
            &times;
          </button>
        </div>
      )}
    </ListGroup.Item>
  );
}
