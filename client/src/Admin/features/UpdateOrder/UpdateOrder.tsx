import React, { useState } from 'react';

import Button from '../../common/Button/Button';
import { stateToProps, dispatchToProps } from './UpdateOrderContainer';

type Props = stateToProps & dispatchToProps;

const UpdateOrder = (props: Props) => {
  const [orderNo, updateOrder] = useState(props.value);

  return (
    <div style={{ display: 'inline', margin: '0 20px' }}>
      <Button
        size="small"
        type="secondary"
        action={() => {
          updateOrder(orderNo - 1);
          props.updateOrder(props.projectId, -1);
        }}
      >
        -
      </Button>
      <div style={{ display: 'inline', margin: '0 10px 0 8px' }}>{orderNo}</div>
      <Button
        size="small"
        action={() => {
          updateOrder(orderNo + 1);
          props.updateOrder(props.projectId, 1);
        }}
      >
        +
      </Button>
    </div>
  );
};

export default UpdateOrder;
