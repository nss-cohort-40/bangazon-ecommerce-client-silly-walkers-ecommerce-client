import React, { useEffect, useState } from 'react'; 


const Account = (props) => {
    const [profile, setProfile] = useState({ user: {} });
    const [paymentTypes, setPaymentTypes] = useState([]);

    const profile_id = profile.user_id;
    console.log('this is the profile_id', profile_id)

    const getProfiles = (props) => {
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
        console.log(props)
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
            console.log(paymentTypes)
        })
    }

    useEffect(() => {
        getProfiles();
        getPaymentTypes();
    }, []);

    console.log('this is profile', profile)
    console.log('this is payment', paymentTypes)
    

    return (
            <main style={{ textAlign: "center"}}>
                <h1> My Account</h1>    

                        <h2>{profile.user.first_name} {profile.user.last_name}</h2>
                        <p><strong>Phone Number: </strong>{profile.phone_number}</p>
                        <p><strong>Address: </strong>{profile.address}</p>
                        <p>Payment Options: </p>
                        {paymentTypes.map((item) => {
                            return <div>
                            {item.account_number}
                            </div>
                        })
                    }



                        
            </main>
        );
    };

export default Account;