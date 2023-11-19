import React, {useState} from 'react'
import {BaseModel} from '../typeCollection'


type Props = {
    unit: BaseModel | undefined;
}

const unit = ({unit}: Props) => {


  return (
    
    
                       
                        <tbody>
                            
                            <td>{unit!.name}</td>
                            <td>{unit!.movement}</td>
                            <td>{unit!.save}</td>
                            <td>{unit!.caf}</td>
                            <td>{unit!.morale}</td>
                            <td>{unit!.wounds}</td>
                            
                        </tbody>
                 
    
  )
}

export default unit
