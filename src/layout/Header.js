

function Header() {
    return(
        <nav>
            <div className="nav-wrapper">
                <a href="https://egilmanof.github.io/react-movies/" className="brand-logo">Поиск фильмов</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="https://github.com/egilmanof/react-movies" target="_blank">Ссылка на мой репозиторий</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;