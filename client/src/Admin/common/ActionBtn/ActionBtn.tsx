import React from 'react';
import EditBtn from '../../assets/actionBtn.svg';

import style from './action_btn.module.scss';

interface IProps {
  type?: 'edit';
  action: Function;
}

const ActionBtn = (props: IProps) => {
  const { type, action } = props;

  return (
    <div className={style.action_btn} onClick={() => action()}>
      <img src={type === 'edit' ? EditBtn : ''} alt="" />
    </div>
  );
};

ActionBtn.defaultProps = {
  type: 'edit'
};

export default ActionBtn;
