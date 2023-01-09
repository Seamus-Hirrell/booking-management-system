import { $ } from '@builder.io/qwik';
import { Client, Account, ID } from 'appwrite';

const client = new Client()
  .setEndpoint('http://134.122.105.209/v1')
  .setProject('63b0a101b617044131c3');
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

// Log In User
export const loginUser = $((email: string, password: string) => {
  account.createEmailSession(email, password).then(
    (response) => {
      console.log(response);
    },
    (error) => {
      console.log(error);
    }
  );
});

// Get User
export const getUser = $(() => {
  account.get().then(
    (response) => {
      console.log(response);
    },
    (error) => {
      console.log(error);
    }
  );
});
