import { useState, useEffect } from "react";
import axios from 'axios';

function FetchData() {

    const [logements, setLogements] = useState([]);

    useEffect(() => {
        axios
            .get('/data.json')
            .then((res) => setLogements(res.data))
            .catch((err) => console.log(err));
    }, []);
    
    return (

    <div>
        <ul>
            {logements.map((logement, id) => (
                <li key={id}>
                    <p>{logement.title}</p>
                </li>
            ))}
        </ul>
    </div>
        
    )
}

export default FetchData
