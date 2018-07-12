/**
*
* IconButton
*
*/

import React from 'react';


import styles from './styles.css';
import FontAwesome from 'react-fontawesome';
import classNames from 'classnames';

function IconButton({ onClick, icon, iconClass, buttonClass }) {
  return (
    <div
      className={classNames(styles.iconButton, buttonClass)}
      onClick={onClick}
    >
      <FontAwesome
        className={iconClass}
        name={icon}
      />
    </div>
  );
}

IconButton.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  icon: React.PropTypes.string.isRequired,
  iconClass: React.PropTypes.string,
  buttonClass: React.PropTypes.string,
};

export default IconButton;
