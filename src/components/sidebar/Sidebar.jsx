import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import InsertChartOutlinedTwoToneIcon from '@mui/icons-material/InsertChartOutlinedTwoTone';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {Link} from 'react-router-dom'
import {useContext} from 'react'
import { DarkModeContext } from "../../context/darkModeContext";
const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
        <div className="top">
            <Link to="/" style={{textDecoration: 'none'}}>
                <span className="logo">Booking Admin</span>
            </Link>
        </div>
        <hr/>
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <li>
                        <DashboardIcon className="icon"/>
                        <span >Dashboard</span>
                    </li>
                </Link>
                
                <p className="title">LIST</p>
                <Link to="/users" style={{textDecoration: 'none'}}>
                    <li>
                        <PersonOutlinedIcon className="icon"/>
                        <span>Users</span>
                    </li>
                </Link>
                <Link to="/products" style={{textDecoration: 'none'}}>
                    <li>
                        <Inventory2OutlinedIcon className="icon"/>
                        <span>Products</span>
                    </li>
                </Link>
                <li>
                    <ArticleOutlinedIcon className="icon"/>
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShippingOutlinedIcon className="icon"/>
                    <span>Delivery</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <InsertChartOutlinedTwoToneIcon className="icon"/>
                    <span>Stats</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <HealthAndSafetyOutlinedIcon className="icon"/>
                    <span>System Health</span>
                </li>
                <li>
                    <AssignmentOutlinedIcon className="icon"/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsSuggestOutlinedIcon className="icon"/>
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <AssignmentIndOutlinedIcon className="icon"/>
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutOutlinedIcon className="icon"/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption" onClick={() => dispatch({type: "LIGHT"})}></div>
            <div className="colorOption" onClick={() => dispatch({type: "DARK"})}></div>
        </div>
    </div>
  )
}

export default Sidebar