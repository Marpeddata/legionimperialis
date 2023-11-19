import React,{useState, useEffect} from 'react'
import {FetchUnitByID} from "../imports";
import {BaseModel} from "../typeCollection.tsx";
import Unit from "../components/unit.tsx"

type Props = {
    unitId: string;
  };
  
  const UnitMapper = ({ unitId }: Props) => {
    
    const [unit, setUnit] = useState<BaseModel | undefined>();
  
    useEffect(() => {
      FetchUnitByID(unitId, setUnit);
    }, [unitId]);
  
    return <Unit unit={unit} />;
  };
  
  export default UnitMapper;