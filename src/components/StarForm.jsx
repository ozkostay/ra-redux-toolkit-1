import React from "react";
import { useDispatch } from "react-redux";
import { setCount } from '../store/starWarsSlice';

export default function StarForm() {
  const dispatch = useDispatch();
  return <>
    <form>
      <p>Form</p>
      <input 
        type='number' 
        min="1" 
        max="5" 
        onChange={(e) => {
          dispatch(setCount(e.target.value))
        }}/> 
    </form>
  </>
}