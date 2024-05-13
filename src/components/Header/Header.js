import './Header.scss';
import { FcTodoList } from "react-icons/fc";
import MainMenu from '../MainMenu/MainMenu';

function Header() {

return (
    <>

<header>
<div className='title'><FcTodoList /> Todo App</div>
<div className='author'>by Rentaro Kinoshita</div>
</header>
<MainMenu />
</>
);

}

export default Header;