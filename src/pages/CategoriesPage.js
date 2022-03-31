import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

export default function Categories() {
  const status = useSelector((store) => store.categories);

  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-4 items-center">
      <h2 className="text-gray-500 font-serif font-bold uppercase">
        Categories Page
      </h2>

      <button
        type="submit"
        onClick={() => {
          dispatch(checkStatus());
        }}
        className="h-12 w-44 px-4 grid place-content-center font-serif border rounded bg-blue-500 text-white uppercase text-sm font-bold"
      >
        Check status
      </button>
      {status}
    </div>
  );
}
