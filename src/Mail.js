import { IconButton } from '@material-ui/core'
import React from 'react'
import "./Mail.css"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import ErrorIcon from '@material-ui/icons/Error';
import DeleteIcon from '@material-ui/icons/Delete';
import EmailIcon from '@material-ui/icons/Email';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import PrintIcon from '@material-ui/icons/Print';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { useHistory } from 'react-router-dom';
import { LabelImportant } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { selectOpenMail } from './features/mailSlice';
function Mail() {
    const history=useHistory();
    const selectedMail=useSelector(selectOpenMail);
    return (
        <div className="mail">
            <div className="mail__tools">
                <div className="mail__toolsleft">
                    <IconButton onClick={()=>history.push("/")}>
                        <ArrowBackIcon />
                    </IconButton>
                    <IconButton>
                        <MoveToInboxIcon/>
                    </IconButton>
                    <IconButton>
                        <ErrorIcon/>
                    </IconButton>
                    <IconButton>
                        <DeleteIcon/>
                    </IconButton>
                    <IconButton>
                        <EmailIcon/>
                    </IconButton>
                    <IconButton>
                        <WatchLaterIcon/>
                    </IconButton>
                    <IconButton>
                        <CheckCircleIcon/>
                    </IconButton>                    


                </div>
                <div className="mailtoolsright">
                    <IconButton>
                        <PrintIcon/>
                    </IconButton>
                    <IconButton>
                        <ExitToAppIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="mail__body">
                <div className="mail__bodyHeader">
                    <h2 className="head">{selectedMail?.subject}</h2>
                    <LabelImportant className="important"/>
                    <p>{selectedMail?.title}</p>
                    <p className="mail__time">{selectedMail?.time}</p>
                </div>
                <div className="mail__message">
                   {selectedMail?.description}                </div>
            </div>
        </div>
    )
}

export default Mail
