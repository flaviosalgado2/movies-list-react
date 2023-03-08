import { useSelector } from "react-redux";

export const Favorites = () => {

    const favorites = useSelector(state => state.favorites)

    return (
        <section>
            <h1>meus filmes favoritos</h1>
            {favorites.movies.map(movie => <li>{movie.title}</li>)}
        </section>
    );
};