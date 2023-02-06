import React, { useState, useEffect } from 'react'
import movieApi from '../../api/MovieApi'
import { ApiKey } from '../../api/MovieApiKey'
import { useDispatch } from 'react-redux'
import { addMovie } from '../../store/Reducer'

const Home = () => {

    const dispatch = useDispatch();
    const [search, setSearch] = useState("");
    useEffect(() => {
        const fetchMovies = async () => {
            const searchKey = search ? search : "Thor";
            const res = await movieApi.get(`?apikey=${ApiKey}&s=${searchKey}&type=movie`)
        }
    }, [])

    return (
        <div>Home</div>
    )
}

export default Home