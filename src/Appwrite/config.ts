import { Client, Account, OAuthProvider, Databases, ID , Query , Storage } from 'appwrite';
import { courseData } from '../Data/Data';
import {  useNavigate } from 'react-router-dom';
// Use navigate hook can only work in JSX component not in standalone functin

const appwriteConfig = {
 endPoint: import.meta.env.VITE_Endpoint,
 projectId: import.meta.env.VITE_Project_ID,
 databaseId: import.meta.env.VITE_DATABASE_ID,
 collectionId: import.meta.env.VITE_COLLECTIONS_ID,
 logoBucketId: import.meta.env.VITE_LOGO_BUCKET_ID
}

export const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client)

export const loginUser = async(e) => {
  try {
    // e.preventDefault()
    await account.createOAuth2Session(
      OAuthProvider.Google,
      "http://localhost:5173",
      "http://localhost:5173/auth",

      // Always use http not https cause for https you need 
      // SSL certificate and that you don't have that's why
      // BTW what's SSL certificate? a certi that says this site is secur 
      // and give https protocol 

    
    )
  } catch (error) {
    // console.log(error , "Getting error while authrization");
    console.error("Error adding data:", error.message, error.code, error.response);

    
  }

}




export const getUser = async () => {
  try {
    return await account.get()
  } catch (error) {
    console.error(error)
  }
}










export const addData = async () => {
  try {

     courseData.forEach((data) => {
     databases.createDocument(
      appwriteConfig.databaseId, // Database ID
      appwriteConfig.collectionId, // Collection ID
      [Query.limit(100)], // Set an appropriate limit to match your total number of documents
      ID.unique(), // Automatically generate unique ID
      data
    
    );
      
     });
    console.log( "Added all the data");
  } catch (error) {
    console.error("Error adding data:", error);
  }
};


export const updateData = async () => {
  try {
    await databases.updateDocument(
        appwriteConfig.databaseId, // Database ID
        appwriteConfig.collectionId, // Collection ID
      "67210249002b4a51cd02", // Automatically generate unique ID
    
      {
        companyName: "Git bucket",
        desc: "Get free",
        image: "https://cloud.appwrite.io/console/project-670f793200296470b5b2/databases/database-670f82490001a68bcdb8/collection-670f827900311996afe4/document-67210249002b4a51cd02/data",
      }
    );
    console.log( "Update all the data");
  } catch (error) {
    console.error("Error adding data:", error);
  }
};



export const listData = async () => {
  try {
  const gotData =   await databases.listDocuments(
    appwriteConfig.databaseId, // Database ID
    appwriteConfig.collectionId, // Collection ID
  //  Want to list all data that is in database 
  // so don't use query then it will list all the data 
  [
    Query.limit(50),
    Query.offset(0)
]
    );
    return gotData.documents
    // console.log( gotData.documents ,"Got all data bhai");
  } catch (error) {
    console.error("Error adding data:", error);
  }
};





