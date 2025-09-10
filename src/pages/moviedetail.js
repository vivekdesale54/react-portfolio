import {useLocation} from "react-router-dom";
import styled from "styled-components";
import { MovieState} from "../moviestate";
import { useState, useEffect } from "react";

const MovieDetail = () => {
    const Navigate = useLocation();
    const url = Navigate.pathname; 
    const [movies, SetmMovies] = useState(MovieState);
    const [movie, SetMovie] = useState(null)

    //Effect//
    useEffect(() => {
        const currentMovie = movies.filter((StateMovie) => StateMovie.url === url);
        SetMovie(currentMovie);
    }, [movies, url]);
    return(
        <>
            <h1>Movie Detail</h1>
        </>
    )
}

export default MovieDetail;