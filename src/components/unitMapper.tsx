import React,{useState, useEffect} from 'react'
import {FetchUnitByID} from "../imports";
import {BaseModel} from "../typeCollection.tsx";
import Unit from "../components/unit.tsx"

type Props = {
    unitId: string;
  };
  
  const unitMapper = ({ unitId }: Props) => {
    
    const [unit, setUnit] = useState<BaseModel>();
  
    useEffect(() => {
      FetchUnitByID(unitId, setUnit);
    }, []);
  
    return <Unit unit={unit} />;
  };
  
  export default unitMapper;