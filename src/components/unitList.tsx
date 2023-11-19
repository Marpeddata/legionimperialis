import React from 'react'
import {DatasheetModel} from "../typeCollection.tsx"


type Data = {
    data: DatasheetModel[];
    setData: React.Dispatch<React.SetStateAction<DatasheetModel[]>>;
    setPointsTotal: React.Dispatch<React.SetStateAction<number>>
    pointsTotal: number
 }

 


const unitList = ({data, setData, setPointsTotal, pointsTotal}: Data) => {

const removeUnit = (unit: DatasheetModel) => {

    setData((prevState) => {
        const newState = [...prevState]; // Create a copy of the original array
        const indexToRemove = newState.indexOf(unit);
        if (indexToRemove !== -1) { //Checking if the index of the unit to be removed is not -1, meaning it doesnt exist.
          newState.splice(indexToRemove, 1); // Remove the element at indexToRemove
        }
        

        return newState; // Return the modified array
      });
      
        setPointsTotal(pointsTotal - unit.pointsValue);
}

  return (
    <div>
      
      <table>
        <tr>
            <th>Name</th>
            <th>Cost</th>
            <th>Units</th>
            <th>Size</th>
            <th>Info</th>
            <th>Special Rules</th>
            <th></th>

            
        </tr>
        {data.map((val, key) => {
           
            return (
                <tr key={key}>
                    <td>{val.name}</td>
                    <td>{val.pointsValue}</td>
                    <td>{val.units}</td>
                    <td>{val.defNumberUnit} Models</td>
                    <td>{val.info}</td>
                    <td>{val.specialRules.map(rule => {
                            return <ul>{rule}</ul>
                            }
                 )}</td>
                    <td><button onClick={() => removeUnit(val)}>X</button></td>
                    

                </tr>
            )
        })}
    </table>
    
    </div>
  )
}

export default unitList
