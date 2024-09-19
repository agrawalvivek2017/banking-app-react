import React, { useState } from 'react';
import axios from 'axios';

const AccountDetails = () => {
    const [accountId, setAccountId] = useState('');
    const [account, setAccount] = useState(null);
    const [error, setError] = useState(null);

    const fetchAccountDetails = () => {

        axios.get(`${process.env.REACT_APP_API_BASE_URL}/accounts/getAccount/${accountId}`)
            .then(response => {
                setAccount(response.data);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
                setAccount(null);
            });
    };

    return (
        <div>
            <h2>Account Details</h2>
            <input
                type="text"
                value={accountId}
                onChange={(e) => setAccountId(e.target.value)}
                placeholder="Enter Account ID"
            />
            <button onClick={fetchAccountDetails}>Get Account</button>

            {error && <p>Error: {error}</p>}
            {account && (
                <div>
                    <p>ID: {account.id}</p>
                    <p>Holder Name: {account.accountHolderName}</p>
                    <p>Balance: ${account.balance}</p>
                </div>
            )}
        </div>
    );
};

export default AccountDetails;
