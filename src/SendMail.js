import React from 'react'
import "./SendMail.css"
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import { db } from './firebase';
import firebase from 'firebase';
function SendMail() {
    const dispatch = useDispatch()
    const { handleSubmit, register } = useForm();
    const onSubmit=(fdata)=>{
      console.log(fdata)
      db.collection("email").add(
          {
              to:fdata.to,
              subject:fdata.subject,
              message:fdata.message,
              timestamp: firebase.firestore.FieldValue.serverTimestamp()

          }
          
      )
      dispatch(closeSendMessage());
    }
    return (
        <div className="sendmail">
            <div className="sendmail__header">
                <h3>New Messege</h3>
                <CloseIcon onClick={()=>dispatch(closeSendMessage())} className="sendmail__close"/>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("to",{required:true})} name="to" placeholder="To" type="text"  />
                  
                    <input {...register("subject")} placeholder="subject" type="text"  />
                    <input {...register("message")} placeholder="Message" type="text" className="sendmail__messege"  />
                    <div className="sendmail__options">
                        <Button className="sendMail__send" variant="contained" color="primary" type="submit">Send</Button>
                    </div>
                </form>

            
        </div>
    )
}

export default SendMail
