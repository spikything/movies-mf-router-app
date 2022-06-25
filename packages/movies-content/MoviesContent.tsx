import React from "react";
import { MovieCard } from 'card';
import { Grid } from "@mantine/core";

const movies = [
    {
        title: 'Peaky Blinders',
        image: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg'
    },
    {
        title: 'The Flash',
        image: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/lJA2RCMfsWoskqlQhXPSLFQGXEJ.jpg'
    },
    {
        title: 'My Little Pony: Make Your Mark',
        image: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/jfmQPOHnuARC7YxGYC1vMMph3vp.jpg'
    },
];

const MoviesContent = () => (
    <Grid sx={{ gap: '1rem' }}>
        {
            movies.map((movie) => (
                <MovieCard {...movie} key={movie.title} showAddButton />
            ))
        }
    </Grid>
);

export default MoviesContent;
