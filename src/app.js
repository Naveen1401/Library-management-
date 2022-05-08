import HomePage from "./pages/homepage";
import AddUser from "./pages/addUser";
import Issue from "./pages/books";
import './style.css';
import {
    Switch,
    Route,
    Link,
    Routes
} from "react-router-dom";
import SideBar from "./components/SideBar";



const App = () => {
    return <>
        <div className="main_div">
            <div className="sidebar">
                <SideBar />
            </div>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/user' element={<AddUser />} />
                <Route path='/issue' element={<Issue />} />
            </Routes>
        </div>
    </>
}

export default App;