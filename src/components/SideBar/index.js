import "./style.css";
import LibraryBooksTwoToneIcon from '@mui/icons-material/LibraryBooksTwoTone';
import LibraryAddTwoToneIcon from '@mui/icons-material/LibraryAddTwoTone';
import GroupTwoToneIcon from '@mui/icons-material/GroupTwoTone';
import { Link } from "react-router-dom";

const SideBar = ()=>{
    return <div className="sidebarDiv">
        <div className="logo">
            <img src="Images/library.svg" alt="Logo" srcset="" />
            <span>LibMag</span>
        </div>
        <div>
            <Link to='/' style={{textDecoration: 'none'}}>
                <div className="sideBar-options">
                    {/* <img src="Images/book.png" alt="Book" srcset="" /> */}
                    <LibraryBooksTwoToneIcon/>
                    Books
                </div>
            </Link>
            <Link to='/issue' style={{ textDecoration: 'none' }}>
                <div className="sideBar-options">
                    {/* <img src="Images/book.png" alt="Book" srcset="" /> */}
                    <LibraryAddTwoToneIcon/>
                    Issued Books
                </div>
            </Link>
            <Link to='/user' style={{ textDecoration: 'none' }}>
                <div className="sideBar-options">
                    {/* <img src="Images/book.png" alt="Book" srcset="" /> */}
                    <GroupTwoToneIcon/>
                    Add Student
                </div>
            </Link>
        </div>
    </div>
}

export default SideBar;