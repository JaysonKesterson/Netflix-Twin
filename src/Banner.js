import React, {useState, useEffect} from 'react'
import axios from './axios.js'
import requests from './requests.js'

function Banner() {
    const [movie, setMovie]=useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[Math.floor(Math.random() * request.data.results.length-1)
                ]
        );
        return request;
        }
        fetchData();
    }, []);

    return(
        <header>
            <div>
                
            </div>
            {/* div > 2 buttons */}
        </header>
    )
}

export default Banner