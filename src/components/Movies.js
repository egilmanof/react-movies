import Movie from "./Movie";




function Movies(props) {
    const {movies = []} = props;

    return(
        <div className='movies'>
            {movies.length ? movies.map(movies => (
                <Movie key = {movies.imdbID} {...movies}/>
            )) : <h4>Ничего не найдено</h4>
            }
        </div>
    )
}


export default Movies;