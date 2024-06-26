import {Link} from "react-router-dom";

export function Header() {

    return (
        <header>
            <nav className="navigation">
                <Link to="/">Главная</Link>
                <Link to="/contacts">Контакти</Link>
                <Link to="/about">Обо мне</Link>
            </nav>
        </header>
    );
}

