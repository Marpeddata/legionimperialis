import React from 'react'
import {DatasheetModel} from "../typeCollection.tsx"
import Unitmapper from "./unitMapper.tsx";


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
        {data.map((val, key) => {
           
            return (
              


                <div className="card" key={key}>
                
                <div className="card-body">
                
                <table className="table custom-table" >
                        <thead>
                            
                            <p>{val.name}<button onClick={() => removeUnit(val)}>X</button></p>
                            <p>{val.unitType}</p>
                            
                        </thead>
                        <tbody>
                            
                            <td>{val.info}</td>
                            
                            
                        </tbody>
                </table>
                <table className="table custom-table" >
                        <thead>
                    
                            <th>Name</th>
                            <th>Movement</th>
                            <th>Save</th>
                            <th>CAF</th>
                            <th>Morale</th>
                            <th>Wounds</th>
                            
                        </thead>
                       
{/* issues with unit and unit mapper, test to se if the fetch can be manipulated to fetch both weapon and basemodel when fetching datasheet. */}
                        {val.units.map(unit => {
                            // return <Unitmapper unitId={unit} />
                            return unit;
                            }
                 )}
                            
                        
                </table>
                <table className="table custom-table" >
                        <thead>
                            
                            <th scope="col">Weapons</th>
                            <th scope="col">Range</th>
                            <th scope="col">Dice</th>
                            <th scope="col">To Hit</th>
                            <th scope="col">AP</th>
                            <th scope="col">Traits</th>
                            
                        </thead>
                        <tbody>
                            
                            <td>Legion combi-bolters</td>
                            <td>8"</td>
                            <td>1</td>
                            <td>5+</td>
                            <td>0</td>
                            <td>
                            
                                <ul>
                                    <li>Accurate</li>
                                    <li>Assult</li>
                                    <li>Light</li>
                                </ul>
                            

                            </td>
                            
                        </tbody>
                </table>
                <table className="table custom-table">
                    <thead>
                        
                        <th colSpan={5}>Special Rules</th>
                        
                    </thead>
                    <tbody>
                        
                    {val.specialRules.map(rule => {
                            return <td>{rule}</td>
                            }
                 )}
                        
                    </tbody>
                </table>
                
                
            
            </div>
                </div>

                         )
        })}

    
    



    </div>
  )
}

export default unitList
