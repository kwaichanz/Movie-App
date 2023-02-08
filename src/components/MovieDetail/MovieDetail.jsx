import React, { useState, useEffect } from 'react'
import './MovieDetail.scss'
import movieApi from '../../api/MovieApi'
import { ApiKey } from '../../api/MovieApiKey'
import { useParams } from 'react-router-dom'

const MovieDetail = () => {

    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState([]);
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        const fetchDetail = async () => {
            const res = await movieApi.get(`?apikey=${ApiKey}&i=${id}&plot=full`)
        }
    }, []);

    return (
        <div>MovieDetail</div>
    )
}

export default MovieDetail