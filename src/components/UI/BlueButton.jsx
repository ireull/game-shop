import classNames from 'classnames';
import React from 'react';

import './BlueButton.scss';

export const BlueButton = ({ children, onClick, type, size = 's' }) => {
  const btnClass = classNames({
    btn: true,
    'btn-secondary': type === 'secondary',
    'btn-primary': type === 'primary',
    'btn-order': size === 'order',
    'btn-medium': size === 'm',
  });
  return (
    <button className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
};
