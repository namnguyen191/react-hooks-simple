import { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = (resource) => {
    const [resources, setResources] = useState([]);

    // const fetchResource = async () => {
    //     const res = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
    //     setResources(res.data);
    // }

    // This function runs everytime the element(s) inside the array changed compare to the previous time it was run
    // This is object comparision
    useEffect(() => {
        (async resource => {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
            setResources(res.data);
        })(resource)
    }, [resource]);

    return resources;
};

export default useResources;