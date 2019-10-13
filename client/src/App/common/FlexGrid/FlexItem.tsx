import React from 'react';

import style from '../../styles/main.module.scss';

interface IProps {
  children: any;
  itemsPerRow: 2 | 3;
  key: number;
}

const FlexItem = (props: IProps) => {
  const { children, itemsPerRow, key } = props;

  return (
    <div
      key={key}
      className={itemsPerRow === 2 ? style.flex_item : style.flex_item_3}
    >
      {children}
    </div>
  );
};

FlexItem.defaultProps = {
  itemsPerRow: 2,
  key: 1
};

export default FlexItem;
