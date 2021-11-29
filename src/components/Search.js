import React from "react";


class Search extends React.Component {

    state = {
        search: '',
        type: 'all'
    }

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    }

    handleFilter = (event) => {
        this.setState(
            () => ({type: event.target.dataset.type}),
            () => {this.props.searchMovies(this.state.search, this.state.type);});
    }

    render() {
        return (
            <div className="row">
                <div className="input-field">
                    <input
                        className="validate"
                        id="email_inline"
                        type="search"
                        placeholder="Введите название фильма на английском, например: Terminator, Matrix, Batman и т.д."
                        value={this.state.search}
                        onChange={(event) => this.setState({search: event.target.value})}
                        onKeyDown={this.handleKey}
                    />

                    <button
                        className="btn search-btn"
                        onClick={() => this.props.searchMovies(this.state.search, this.state.type)}
                    >
                        Поиск
                    </button>
                </div>
                <div>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type="all"
                            onChange={this.handleFilter}
                            checked={this.state.type === 'all'}
                        />
                        <span className="retreat">Все</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type="movie"
                            onChange={this.handleFilter}
                            checked={this.state.type === 'movie'}
                        />
                        <span className="retreat">Только фильмы</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type="series"
                            onChange={this.handleFilter}
                            checked={this.state.type === 'series'}
                        />
                        <span className="retreat">Только сериалы</span>
                    </label>
                </div>
            </div>

        )
    }
}


export default Search;