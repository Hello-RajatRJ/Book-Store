import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {incNumber,decNumber} from './Redux1/Action/index'


const Inc = () => {
    const myState =useSelector((state)=>state.changeNumber)
    const dispatch = useDispatch();
  return (
    <div>
        <h1 style={{height:"100px",textAlign:"center"}}>Increment or Decrement</h1>
        <h4 style={{height:"100px",textAlign:"center"}}>Using React and Redux</h4>
        <div style={{height:"100px",textAlign:"center"}}>
            <a onClick={()=>dispatch(decNumber())}className='quantity_minus'style={{height:"50px"}} tittle="Decrement" href="" ><span>-</span></a>
            <input className='quantity_input' value={myState}style={{height:"50px",width:"40px"}} name="qantity"type="text" />
            <a onClick={()=>dispatch(incNumber())}className='quantity_plus'style={{height:"50px"}} tittle="inrement" href=""><span>+</span></a>
        </div>
    </div>
  )
}

export default Inc