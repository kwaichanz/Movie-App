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
                .catch((error) => {
                    console.log("Error", error);
                })
            setMovie(res.data);
            setLoading(true);
        }
        fetchDetail();
    }, []);

    return (
        <div className="container">
            {loading ? (
                <div className='movie-detail-con'>
                    <div className="movie-detail-img">
                        <img src={movie.Poster} alt={movie.Title} />
                    </div>
                    <div className="movie-detail-info">
                        <h3>{movie.Title}</h3>
                        <p style={{ margin: "2rem 0" }}>{movie.Plot}</p>
                        <div>
                            <strong>Released : {movie.Released}</strong>
                        </div>
                    </div>
                </div>
            ) : (
                <h4 style={{ margin: "1rem 0" }}>Loading</h4>
            )}
        </div>
    )
}

export default MovieDetail