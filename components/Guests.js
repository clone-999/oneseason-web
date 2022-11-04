import { InputNumber } from 'antd';
import React, { useState } from 'react'

function Guests({setAdults, setChildren, setRooms, initAdults, initChildren, initRooms}) {
    
  return (
    <>
        <div className="input-group">
            <InputNumber 
                min={1} 
                defaultValue={initAdults ? initAdults : 1}
                onChange={(value) => {
                    setAdults(value)
                }} 
            />
            <InputNumber 
                min={0} 
                defaultValue={initChildren ? initChildren : 0} 
                style={{marginLeft: "5px"}}
                onChange={(value) => {
                    setChildren(value)
                }} 
            />
            <InputNumber 
                min={1} 
                defaultValue={initRooms ? initRooms : 1} 
                style={{marginLeft: "5px"}}
                onChange={(value) => {
                    setRooms(value)
                }}  
            />
        </div>
        <div className="input-group">
            <span style={{marginLeft: "10px"}}>Adults</span>
            <span style={{marginLeft: "55px"}}>Children</span>
            <span style={{marginLeft: "50px"}}>Rooms</span>
        </div>
    </> 
  )
}

export default Guests