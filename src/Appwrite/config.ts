import { Client, Account  ,OAuthProvider  } from 'appwrite';

export const client = new Client();
client
 

export const account = new Account(client);

export { OAuthProvider }
