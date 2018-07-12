/**
*
* AppBar
*
*/

import React from 'react';

import styles from './styles.css';
import IconButton from '../IconButton';
import { Link } from 'react-router';

function AppBar({ toggleDrawer, email }) {
  const loginLink = email || (<Link to="/login"> login </Link>);

  return (
    <div className={styles.appBar}>
      <IconButton
        buttonClass={styles.iconButton}
        icon="bars"
        iconClass={styles.icon}
        onClick={toggleDrawer}
      />
      <div className={styles.heading}>
        Coder Daily
      </div>
      <div className={styles.linkContainer}>
        {loginLink}
      </div>
    </div>
  );
}

AppBar.propTypes = {
  email: React.PropTypes.string,
  toggleDrawer: React.PropTypes.func.isRequired,
};

export default AppBar;
