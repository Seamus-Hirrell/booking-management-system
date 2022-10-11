import { $ } from '@builder.io/qwik';
import { Client, Account, ID } from 'appwrite';

export const client = new Client()
  .setEndpoint('https://localhost/v1') // Your API Endpoint
  .setProject('632cce4e4acb6c10a605'); // Your project ID

export const account = new Account(client);

// Register User
export const registerUser = $(
  (email: string, password: string, name: string) => {
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
