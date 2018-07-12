/**
*
* Drawer
*
*/

import React from 'react';


import styles from './styles.css';
import classNames from 'classnames';

function Drawer({ items, selectedItem, itemLabelAttr, itemKeyAttr, isDrawerOpen }) {
  const itemNodes = items.map(item => (
    <div
      className={styles.item}
      key={item[itemKeyAttr]}
      onClick={() => selectedItem(item)}
    >
      {item[itemLabelAttr]}
    </div>
  ));
  return (
    <div
      className={classNames(styles.drawer, { [styles.drawerOpen]: isDrawerOpen })}
    >
      {itemNodes}
    </div>
  );
}

Drawer.propTypes = {
  items: React.PropTypes.array.isRequired,
  selectedItem: React.PropTypes.func.isRequired,
  itemLabelAttr: React.PropTypes.string.isRequired,
  itemKeyAttr: React.PropTypes.string.isRequired,
  isDrawerOpen: React.PropTypes.bool.isRequired,
};

export default Drawer;
