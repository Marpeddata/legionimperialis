import React from "react";
import {DatasheetModel} from "../src/typeCollection.tsx"
import {BaseModel} from "../src/typeCollection.tsx"

export const FetchDatasheets = (setDatasheets: React.Dispatch<React.SetStateAction<DatasheetModel[]>>)=> {

    fetch('http://localhost:3000/datasheets')
        .then(res => res.json())
        .then(json => setDatasheets(json));

}

export const FetchUnitByID = (unitId: string, setUnit: React.Dispatch<React.SetStateAction<BaseModel | undefined>>)=> {

    fetch('http://localhost:3000/units?=' + unitId)
        .then(res => res.json())
        .then(json =>  setUnit(json));
}
