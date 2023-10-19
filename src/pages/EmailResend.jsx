import React, { useEffect, useState } from 'react'
import EmailConfimationModal from "../Component/EmailConfimationModal"
import { useParams } from 'react-router-dom'
import LoadingPage from './Loading'
import GuestSignUp from "../Component/GuestSignUp"

const EmailResend = () => {
    const apiURL = "https://techstudiocommunity.onrender.com"
    const { uid} = useParams()
    const [modal,setModal] = useState({status:"",message:""})
    const [loading,setLoading] = useState(false)
    useEffect(() => {
        setLoading(true);
      
        const requestData = {
          uid,
        };
      
        fetch(`${apiURL}/auth/resend-confimation/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestData),
        })
          .then((response) => {
            if (response.ok) {
              console.log('Email confirmed successfully');
              response.json().then((data) => {
                setModal((prevModal) => ({
                  ...prevModal,
                  status: true,
                  message: data.message,
                }));
                setLoading(false);
              });
            } else {
              response.json().then((data) => {
                setModal((prevModal) => ({
                  ...prevModal,
                  status: false,
                  message: data.message,
                }));
                setLoading(false);
              });
            }
          })
          .catch((error) => {
            // Handle network or other errors
            console.error('An error occurred:', error);
            setModal((prevModal) => ({
              ...prevModal,
              status: false,
              message: error.message,
            }));
            setLoading(false);
          });
      }, []);

  return (
    <div>
        {loading?<LoadingPage/>:<>
        {modal.message !=="" && (<><EmailConfimationModal message={modal.message} status={modal.status}/>
        <GuestSignUp/></>)}</>}
    </div>
  )
}

export default EmailResend