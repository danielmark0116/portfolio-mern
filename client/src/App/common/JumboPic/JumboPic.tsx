import React from 'react';

import style from '../../styles/main.module.scss';

interface IProps {
  picString: string;
}

const JumboPic = (props: IProps) => {
  const { picString } = props;

  return (
    <div className={style.jumbo_pic_container}>
      <div className={style.pic_container}>
        <img src={`data:image/jpeg;base64,${picString}`} alt="" />
      </div>
    </div>
  );
};

JumboPic.defaultProps = {
  picString: ''
};

export default JumboPic;
