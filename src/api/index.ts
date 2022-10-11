import { $ } from '@builder.io/qwik';
import { Client, Account, ID } from 'appwrite';

// Register User
export const registerUser = $(
  (email: string, password: string, name: string) => {
    const client = new Client()
      .setEndpoint('https://localhost/v1') // Your API Endpoint
      .setProject('632cce4e4acb6c10a605'); // Your project ID
    const account = new Account(client);
    account.create(ID.unique(), email, password, name).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
);
