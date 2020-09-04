import React, { useEffect, useState } from 'react'; 


const Account = () => {
    const [profile, setProfile] = useState({ user: {} });
    const [paymentTypes, setPaymentTypes] = useState([]);

    const getProfiles = () => {
        fetch("http://localhost:8000/customers/profile", {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
            }
        })
        .then(response => response.json())
        .then((profile) => {
            setProfile(profile)
        })
    }

    const getPaymentTypes = () => {
        fetch("http://localhost:8000/paymenttypes", {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
            }
        })
        .then(response => response.json())
        .then((paymentTypes) => {
            setPaymentTypes(paymentTypes)
        })
    }

    useEffect(() => {
        getProfiles();
        getPaymentTypes();
    }, []);

    return (
            <main>
                <div style={{ textAlign: "center"}}>
                    <h1> My Account </h1>    
                    <h2>{profile.user.first_name} {profile.user.last_name}</h2>
                    <p><strong>Phone Number: </strong>{profile.phone_number}</p>
                    <p><strong>Address: </strong>{profile.address}</p>
                    <button className="btn btn-success">Edit</button>          
                </div>
                <div className="container d-flex flex-wrap">
                    <div className="col-6">
                    <h2>Payment Options: </h2>
                    <ol>
                            {paymentTypes.map((paymentType) => {
                                return <div>
                                    <li><h3 className="ml-4">{paymentType.merchant_name}</h3></li>
                                    <div className="container d-flex flex-wrap">
                                        <div className="ml-4 col-4">Account Number: {paymentType.account_number}</div>
                                        <div className="ml-4 col-4">Expiration Date: {paymentType.expiration_date}</div>
                                    </div>
                                </div>
                            })
                        }
                        </ol>
                    </div>
                    <div className="col-6">
                        <h2>This is the second 1/2 of the screen</h2>
                    </div>
                </div>          
            </main>
        );
    };

export default Account;