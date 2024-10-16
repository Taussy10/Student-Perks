import { Client, Account} from 'appwrite';
export const client = new Client();

client
    .setEndpoint(import.meta.env.VITE_Appwrite_Endpoint)
    .setProject(import.meta.env.VITE_Appwrite_Project_ID); 


export const account = new Account(client);
export { ID } from 'appwrite';
