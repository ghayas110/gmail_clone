import { Checkbox, IconButton } from '@material-ui/core'
import React from 'react'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import "./EmailRow.css"
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectMail } from './features/mailSlice';
function EmailRow({id,title,subject,description,time}) {
    const history = useHistory()
    const dispatch = useDispatch();
    const openMail=()=>{
        dispatch(selectMail({
           id,title,subject,description,time,
        }));
        history.push("./mail")
    };
    return (
        <div onClick={openMail} className="emailrow">
            <div className="emailrow__options">
                <Checkbox/>
                <IconButton>
                    <StarBorderIcon/>
                </IconButton>
                <IconButton>
                    <LabelImportantIcon/>

                </IconButton>
                

            </div>
            <h3 className="emailrow_title">
                    {title}
                </h3>
            <div className="emailrow__message">
                <h4>{subject} <span className="emailrow__description">
                    {description}
                    </span></h4>
            </div>
            <div className="emailrow__time">
                {time}
            </div>

        </div>
    )
}

export default EmailRow
