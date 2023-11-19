import { useEffect, useState } from 'react'
import './style/App.css'
import {FetchDatasheets} from "./imports";
import {DatasheetModel} from "./typeCollection.tsx"
import UnitPicker from "./components/unitPicker.tsx";
import UnitList from "./components/unitList.tsx";
import DatasheetCard from "./components/datasheetCard.tsx";


function App() {
  const [datasheets, setdatasheets] = useState<DatasheetModel[]>([])
  const [armyList, setarmyList] = useState<DatasheetModel[]>([])
  const [pointsTotal, setPointsTotal] = useState<number>(0)

  useEffect(() => {
    FetchDatasheets(setdatasheets)
  },)

  


  return (
    <div>
        
        
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    List:
                    <UnitList data = {armyList} setData={setarmyList} setPointsTotal={setPointsTotal} pointsTotal={pointsTotal}/>
                    Points Total: {pointsTotal}
        </div>
                <div className="col-sm">
                    preview:
                    <DatasheetCard /> 
                    
                <div className="col-sm">
        Units:
                    <UnitPicker data={datasheets} setList={setarmyList} setPointsTotal={setPointsTotal}/>
    
              </div>
            </div>

            
        </div>

      

        
    </div>
    </div>

   
);
      
  
}

export default App
