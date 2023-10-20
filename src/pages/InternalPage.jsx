import React, { useEffect, useState } from 'react';
import { useAuth } from '../contextData/DataContext';
import { Link } from 'react-router-dom';

const InternalPage = () => {
    const apiURL = "https://techstudiocommunity.onrender.com";
    const { token } = useAuth();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
        };

        fetch(`${apiURL}/auth/user/`, requestOptions)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((result) => {
                setUser(result);
                setLoading(false);
            })
            .catch((error) => {
                console.log('Error:', error);
                setLoading(false);
            });
    }, [token]);

    return (
        <div>
            {loading ? (
                <p>Loading...</p> // Show loading indicator
            ) : (
                <>
                    {user && (
                        <>
                            <p>email: {user.email}</p>
                            <p>full name : {user.full_name}</p>
                            <p>followers : {user.followers_count}</p>
                            <p>following : {user.following_count}</p>
                            <p>community: {user.community_name}</p>
                            {user.image && <><img src={user.image} alt="" height={"300px"} /></>}
                        </>
                    )}
                    {!user && (
                        <Link to={"/Login"}>
                            <button className="btn btn-primary">Login</button>
                        </Link>
                    )}
                </>
            )}
        </div>
    );
};

export default InternalPage;
