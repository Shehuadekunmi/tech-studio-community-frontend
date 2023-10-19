import React, { useEffect, useState } from 'react'
import GuestSignUp from '../components/GuestSignUp'
import { useParams } from 'react-router-dom'
import LoadingPage from "./Loading"
import EmailConfimationModal from "../components/EmailConfimationModal"

const EmailConfirmation = () => {
    const apiURL = "https://techstudiocommunity.onrender.com"
    const { uid, token } = useParams()
    const [modal,setModal] = useState({status:"",message:""})
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
      
        const requestData = {
          uid,
          token,
        };
      
        fetch(`${apiURL}/auth/confirm-email/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestData),
        })
          .then((response) => {
            if (response.ok) {
              // Email confirmation was successful
              console.log('Email confirmed successfully');
              response.json().then((data) => {
                setModal((prevModal) => ({
                  ...prevModal,
                  status: true,
                  message: data.message,
                  login: true,
                }));
                setLoading(false);
              });
            } else {
              response.json().then((data) => {
                setModal((prevModal) => ({
                  ...prevModal,
                  status: false,
                  login:false,
                  message: data.message,
                }));
                setLoading(false);
              });
            }
          })
          .catch((error) => {
           
            console.error('An error occurred:', error);
            setModal((prevModal) => ({
              ...prevModal,
              status: false,
              login:false,
              message: error.message,
            }));
            setLoading(false);
          });
      }, []);
      
    
  return (
    <div>
        {loading?<LoadingPage/>:<>
        {modal.message !=="" && (<><EmailConfimationModal message={modal.message} status={modal.status} login={modal.login} uid={uid}/>
        <GuestSignUp/></>)}</>}
    </div>
  )
}

export default EmailConfirmation