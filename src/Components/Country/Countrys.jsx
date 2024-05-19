 
import { useState } from 'react';
import './Countrys.css';
const Countrys = ({countrys, handleMarkVisited}) => {
   
    const {name, flags ,cca3}= countrys;
    const [visited, setVisited] = useState(false);

    const handleVisited = () =>{
        setVisited(!visited)
    }
    return (
        <div className={`country ${visited && 'visited'}`}>
           <li className='list-item'><small className='cca3'>{cca3}</small></li>
            <p></p>
            <h4 style={{color: visited && 'purple'}}>Country Name: {name.common} </h4>
            <img src={flags.png} alt="" />
            <button onClick={ () => handleMarkVisited(countrys)}>Mark Visited Country</button>
            <button onClick={handleVisited}>Visited-Country</button>
            {visited ? 'I want to visited' : 'I wona visited'}
        </div>
    );
};

export default Countrys;