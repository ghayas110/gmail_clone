
import React from 'react'
import "./SideBarOptions.css"
function SideBarOptions({Icon,title,number,selected}) {
    return (
        <div className={`sideBarOptions ${selected && "sideBarOptions--active"}`}>
            <Icon/>
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
    )
}

export default SideBarOptions
