//
//
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { increment, decrement } from './testReducer';
import { openModal } from '../../app/common/modals/modalReducer';
// import TestPlaceInput from './TestPlaceInput';

export default function Sandbox() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.test.data);
  const { loading } = useSelector((state) => state.async);
  return (
    <>
      <h1>Testing 123</h1>
      <h3>The Data is: {data}</h3>
      <Button
        loading={loading}
        content='Increment'
        color='green'
        onClick={() => dispatch(increment(20))}
        // onClick={() => dispatch({ type: INCREMENT_COUNTER, payload: 10 })}
      />
      <Button
        loading={loading}
        content='Decrement'
        color='red'
        onClick={() => dispatch(decrement(10))}
      />
      <Button
        content='Open Modal'
        color='teal'
        onClick={() =>
          dispatch(openModal({ modalType: 'TestModal', modalProps: { data } }))
        }
      />
      {/* <div style={{ marginTop: 15 }}>
        <TestPlaceInput />
      </div> */}
    </>
  );
}
