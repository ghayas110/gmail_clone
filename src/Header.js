import React from 'react'
import "./Header.css"
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar,IconButton } from '@material-ui/core';
import logo from "./gmail_logo.png"
import SearchIcon from '@material-ui/icons/Search';
import { ArrowDropDown } from '@material-ui/icons';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useSelector,useDispatch } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
function Header() {
    const user =useSelector(selectUser);
    const  dispatch = useDispatch();
    const signOut=()=>{
        auth.signOut().then(()=>{
            dispatch(logout())
        })

    }

    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon/>
                </IconButton>
                <img src={logo} alt="" />

            </div>
            <div className="header__mid">
                <SearchIcon/>
                <input placeholder="Search mail" type="text" />
                <ArrowDropDown/>
            </div>
            <div className="header__right">
                <IconButton><AppsIcon/></IconButton>
                <IconButton>
                    <NotificationsIcon/>
                </IconButton>
                <Avatar onClick={signOut} src={user?.photoUrl}/>

            </div>
        </div>
    )
}

export default Header

// import React from 'react'
// import "./Header.css"
// import MenuIcon from '@material-ui/icons/Menu';
// import { Avatar,IconButton } from '@material-ui/core';
// import logo from "./gmail_logo.png"
// import SearchIcon from '@material-ui/icons/Search';
// import { ArrowDropDown } from '@material-ui/icons';
// import AppsIcon from '@material-ui/icons/Apps';

// import NotificationsIcon from '@material-ui/icons/Notifications';
// function Header() {
//     return (
//         <div className="header">
//             <div className="header__left">
//                 <IconButton>
//                     <MenuIcon/>
//                 </IconButton>
//                 <img src={logo} alt="" />
//             </div>
//             <div className="header__mid">
//                 <SearchIcon/>
//                 <input placeholder="Seach Mail" type="text" />
//                 <ArrowDropDown className="Header_Drop"/>
//             </div>
//             <div className="header__right">
//                 <IconButton>
//                     <AppsIcon/>
//                 </IconButton>
//                 <IconButton>
//                     <NotificationsIcon/>
//                 </IconButton>
//                 <Avatar/>
//             </div>
//         </div>
//     )
// }

// export default Header
