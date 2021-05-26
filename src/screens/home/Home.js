import React, { useEffect, useState } from "react";
import Header from "../../common/header/Header";
import './Home.css';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { GridListTileBar } from "@material-ui/core";

const Home = function () {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8085/api/v1/movies?page=1&limit=10&status=PUBLISHED')
            .then(result => result.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(false);
                    setError(error);
                }
            )
    }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded || (isLoaded && typeof items.movies === 'undefined')) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <Header/>
                <div className = 'upcoming-movies-heading'>Upcoming Movies</div>
                <GridList cols = {6} style = {{flexWrap: 'nowrap'}}>
                    {items.movies.map((movie) => (
                        <GridListTile key={movie.id}>
                            <img src={movie.poster_url} alt={movie.title} />
                            <GridListTileBar title = {movie.title}/>
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        )   
    }
}

export default Home;