import { Routes, Route, Link } from "react-router-dom";
import IntroductionHelp from "./IntroductionHelp";
import AddTaskHelp from "./AddTaskHelp";
import RemoveTaskHelp from "./RemoveTaskHelp";
import ChangeStatusHelp from "./ChangeStatusHelp";
import './Help.scss';

function Help() {
    return (
        <div className="HelpandMenu">
            <h2>Help</h2>
            <nav className="help-menu">
            <Link to="/help/intro" className="help-link">・Introduction</Link>
                <Link to="/help/remove" className="help-link">・Removing Tasks</Link>
                <Link to="/help/add" className="help-link">・Adding Tasks</Link>
                <Link to="/help/change" className="help-link">・Changing Status</Link>
            </nav>
            <Routes>
                <Route path="intro" element={<IntroductionHelp />} />
                <Route path="add" element={<AddTaskHelp />} />
                <Route path="remove" element={<RemoveTaskHelp />} />
                <Route path="change" element={<ChangeStatusHelp />} />
            </Routes>
        </div>
    );
}

export default Help;
