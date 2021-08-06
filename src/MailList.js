import { Checkbox, IconButton } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import "./MailList.css"
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import RedoIcon from '@material-ui/icons/Redo';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import Section from './Section';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import EmailRow from './EmailRow';
import { db } from './firebase';


function MailList() {
    const [email, setEmail] = useState([]);
    useEffect(() => {
        db.collection("email").orderBy("timestamp","desc").onSnapshot((snapshot)=>setEmail(snapshot.docs.map((doc)=>({
            id:doc.id,
            data:doc.data()
        }))))
    }, [])
    return (
        <div className="maillist">
            <div className="mail__settings">
                <div className="mail__settingsLeft">
                <Checkbox/>
                    <IconButton>
                        <ArrowDownwardIcon/>
                    </IconButton>
                    <IconButton>
                        <RedoIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
                <div className="mail__settingsRight">
                <IconButton>
                        <ChevronLeftIcon/>

                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon/>

                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon/>

                    </IconButton>
                    <IconButton>
                        <SettingsIcon/>
                    </IconButton>
                </div>
                </div>
            <div className="maillist__sections">
            <Section Icon={InboxIcon} title="Primary" color="red" selected/>
                <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
                <Section Icon={LocalOfferIcon} title="Promotion" color="green" />
                </div>
                <div className="maillist__list">
                    {email.map(({id,data:{to,subject,message,timestamp}})=>(
                        <EmailRow
                        id={id}
                        key={id}
                        title={to}
                        subject={subject}
                        description={message}
                        time={new Date(timestamp?.seconds*1000).toUTCString()}
                        />
                    ))}
              
                    </div>    
            
            {/* <div className="mail__settings">
                <div className="mail__settingsLeft">
                    <Checkbox/>
                    <IconButton>
                        <ArrowDownwardIcon/>
                    </IconButton>
                    <IconButton>
                        <RedoIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
                <div className="mail__settingsRight">
                    <IconButton>
                        <ChevronLeftIcon/>

                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon/>

                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon/>

                    </IconButton>
                    <IconButton>
                        <SettingsIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="maillist__sections">
                <Section Icon={InboxIcon} title="Primary" color="red" selected/>
                <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
                <Section Icon={LocalOfferIcon} title="Promotion" color="green" />
            </div>
            <div className="mailist__list">
                <EmailRow title="Ghayas" subject="Hi Messege" description="How are you" time="10pm"/>
                <EmailRow title="Ghayas" subject="Hi Messege" description="How are you" time="10pm"/>
            </div> */}
        </div>
    )
}

export default MailList
