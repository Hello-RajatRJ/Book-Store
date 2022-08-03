import React, { useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import {dropdown ,dropdownButton} from 'react-bootstrap'
// import './preview.css'
import { useState } from 'react';
import { NavLink } from "react-router-dom";

const Preview = () => {
    



   

    const items = JSON.parse(localStorage.getItem('data'));
    const items1 = JSON.parse(localStorage.getItem('data1'));
    const items2 = JSON.parse(localStorage.getItem('data2'));
    


    
       
        
        console.log(items, items1, items2);
        Object.entries(items,items1,items2 ).map((ele, val) => {
            console.log(ele)
        })
        

    const data = async () => {
        const resp = await axios.post('http://localhost:3008/Form', items);
        console.log(resp.data);
      
    }

    const data1 = async () => {
        const resp = await axios.post('http://localhost:3008/forms2',items1);
        console.log(resp)
        console.log(resp.data); 
    }
    
    const data2 = async () => {
        const rep = await axios.post('http://localhost:3008/forms3',items2);
        console.log(rep.data);
      
    }
    
  
const datafound =() =>{
    console.log("data found")
    data();
      data1();
      data2();
    

}




    return (
        <div>

        <div className='prev1'>
 
            <div className='prev' >
                {
                    Object.entries(items).map((ele, val) => {
                        console.log(ele);
                        return (
                            <p>{`${ele[0]} : ${ele[1]}`}</p>
                            )
                        })
                    }
            </div>
           <div className='prev'  >
                {
                    Object.entries(items1).map((ele, val) => {
                        console.log(ele);
                        return (
                            <p>{`${ele[0]} : ${ele[1]}`}</p>
                            )
                        })
                    }
            </div> 
                    </div>




                    <div className='prev2'>

              <div className='prev'  >
                {
                    Object.entries(items2).map((ele, val) => {
                        console.log(ele);
                        return (
                            <p>{`${ele[0]} : ${ele[1]}`}</p>
                            )
                        })
                    }
            </div>
           
         
                    </div>
            <NavLink type='submit'className="styleN" activeClassName="active1" to="/"  onClick={()=>{datafound()}}>Store Data</NavLink>
                  
                    </div>
    )
}

export default Preview;