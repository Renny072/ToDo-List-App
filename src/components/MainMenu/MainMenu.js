import { Link } from "react-router-dom";
import './MainMenu.scss';

function MainMenu() {
return (
<nav className="main-menu">
<Link to="/" className="header-link">Tasks</Link>
<Link to="/add" className="header-link">Add</Link>
<Link to="/help" className="header-link">Help</Link>
</nav>
);
}
export default MainMenu;