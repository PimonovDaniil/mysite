import './Header.css';
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <NavLink to="/about" className="item" activeClassName="keklul">Обо мне</NavLink>
            <NavLink to="/projects" className="item" activeClassName="keklul">Проекты</NavLink>
            <NavLink to="/contests" className="item" activeClassName="keklul">Конкурсы</NavLink>
        </div>
    )
}

export default Header;