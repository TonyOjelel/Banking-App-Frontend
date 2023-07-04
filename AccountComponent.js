import React, { useEffect, useState } from 'react';
import { getAccount, createAccount } from '../API/accountApi';

const AccountComponent = () => {
  const [account, setAccount] = useState(null);

  useEffect(() => {
    // Make an API request to fetch the account details
    getAccount('account_id')
      .then(response => {
        // Handle the response data
        setAccount(response.data);
      })
      .catch(error => {
        // Handle the error
        console.error('Error fetching account:', error);
      });
  }, []);

  const handleCreateAccount = () => {
    // Make an API request to create a new account
    createAccount({ name: 'New Account' })
      .then(response => {
        // Handle the response data
        console.log('New account created:', response.data);
      })
      .catch(error => {
        // Handle the error
        console.error('Error creating account:', error);
      });
  };

  return (
    <div>
      {/* Display the account details */}
      {account && (
        <div>
          <h2>{account.name}</h2>
          <p>Account ID: {account.id}</p>
          {/* Additional account information */}
        </div>
      )}

      {/* Button to create a new account */}
      <button onClick={handleCreateAccount}>Create Account</button>
    </div>
  );
};

export default AccountComponent;
