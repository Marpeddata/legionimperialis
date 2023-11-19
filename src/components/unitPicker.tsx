import React from 'react'
import {DatasheetModel} from "../typeCollection.tsx"



//Til syenladende er det ikke nok at importere en type here og bruge som parameter. Var nød til at oprette type data for at kunne bruge den som proptype.
type Data = {
   data: DatasheetModel[];
   setList: React.Dispatch<React.SetStateAction<DatasheetModel[]>>
   setPointsTotal: React.Dispatch<React.SetStateAction<number>>
}

const onClick = (model: DatasheetModel, setList: React.Dispatch<React.SetStateAction<DatasheetModel[]>>, setPointsTotal: React.Dispatch<React.SetStateAction<number>>) => {

        setList(list => [...list, model])
        setPointsTotal((total) => total + model.pointsValue)
       
}


const unitPicker = ({data, setList, setPointsTotal}: Data): React.ReactElement => {
  return (
    <div>
      <table>
        <tr>
            <th>Name</th>
            <th>Cost</th>
            <th></th>

            
        </tr>
        {data.map((val, key) => {
           
        //    let stringArray = val.specialRules.map(rule => {
        //       return <ul>{rule}</ul>
        //   }
        //   )
            return (
                <tr key={key}>
                    <td>{val.name}</td>
                    <td>{val.pointsValue}</td>
                    <td><button onClick={() => onClick(val, setList, setPointsTotal)}>add</button></td>
                    

                </tr>
            )
        })}
    </table>
    </div>
  )
}

export default unitPicker
