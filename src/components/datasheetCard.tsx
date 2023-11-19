import React, {useState} from 'react'
import "../style/datasheetCard.css"

//const[datasheetPointsValue, setDatasheetPointsValue] = useState<number>(0)

const datasheetCard: React.FC = () => {
  return (
                
                <div className="card">
                <div className="card-body">
                
                <table className="table custom-table" >
                        <thead>
                            
                            <p>Legion Terminator Detachment</p>
                            <p>Infantry (1)</p>
                            
                        </thead>
                        <tbody>
                            
                            <td>A Legion Terminator Detachment consists of 4 Terminator models</td>
                            
                            
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
                        <tbody>
                            
                            <td>4x Legion Terminators</td>
                            <td>5"</td>
                            <td>4+</td>
                            <td>+4</td>
                            <td>3+</td>
                            <td>1</td>
                            
                        </tbody>
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
                        
                        <td>Bulky</td>
                        <td>Deep Strike</td>
                        <td>Implacable</td>
                        <td>Invulnerable Save(6+)</td>
                        <td>Steadfast</td>
                        
                    </tbody>
                </table>
                
                
            
            </div>
                </div>
        
  );
};

export default datasheetCard
