import { Client, Account, Databases, Teams } from 'appwrite';

const client = new Client()
  .setEndpoint('https://appwrite.xn--samushirrell-beb.live/v1')
  .setProject('63b0a101b617044131c3');

export const account = new Account(client);
export const databases = new Databases(client);
export const teams = new Teams(client);
