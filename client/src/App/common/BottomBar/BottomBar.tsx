import React from 'react';
import { Container } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap-grid.css';
import style from '../../styles/main.module.scss';

interface IProps {
  children: React.ReactChild;
}

const BottomBar = (props: IProps) => {
  const { children } = props;
  return (
    <div className={style.bottom_bar}>
      <Container>{children}</Container>
    </div>
  );
};

export default BottomBar;
