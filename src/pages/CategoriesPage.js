import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

export default function Categories() {
  const status = useSelector((store) => store.categories);

  const dispatch = useDispatch();

  return (
    <div>
      Categories Page
      <br />
      <button
        type="button"
        onClick={() => {
          dispatch(checkStatus());
        }}
      >
        Check status
      </button>
      {status}
    </div>
  );
}
