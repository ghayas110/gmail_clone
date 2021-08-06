import React from 'react'
import './SideOptions.css'
function SideOptions({title,Icon,number,selected}) {
    return (
        <div className={`sideOptions  ${selected && "sideOptions--active" }`}>
       <Icon/>
       <h3>{title}</h3>
       <p>{number}</p>
        </div>
    )
}

export default SideOptions
