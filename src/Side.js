import React from 'react'
import "./Side.css"
import { Button, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import SideOptions from './SideOptions';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';
function Side() {
    const dispatch = useDispatch();
    return (
        <div className="side">
            <Button onClick={()=>dispatch(openSendMessage())}  className="side__compose" startIcon={<AddIcon fontSize="large"/>}>Compose</Button>
           <SideOptions Icon={InboxIcon} title="Inbox" number="23" selected={true}/>
           <SideOptions Icon={StarIcon} title="Starred" number={54}/>
            <SideOptions Icon={LabelImportantIcon} title="Important" number={54}/>
            <SideOptions Icon={NearMeIcon} title="Sent" number={54}/>
            <SideOptions Icon={NoteIcon} title="Draft" number={54}/>
            <SideOptions Icon={ExpandMoreIcon} title="More" number={54}/>
            <div className="side__footer">
            <div className="footer__options">
                <IconButton>
                    <PersonIcon/>
                </IconButton>
                <IconButton>
                    <DuoIcon/>
                </IconButton>
                <IconButton>
                    <PhoneIcon/>
                </IconButton>
            </div>
            </div>
        </div>
      
    )
}

export default Side
