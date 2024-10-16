import { Client, Account, OAuthProvider, Databases, ID , Query } from 'appwrite';

const appwriteConfig = {
 endPoint: import.meta.env.VITE_Endpoint,
 projectId: import.meta.env.VITE_Project_ID,
 databaseId: import.meta.env.VITE_DATABASE_ID,
 collectionId: import.meta.env.VITE_COLLECTIONS_ID,
}

export const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);

export const addData = async () => {
  try {
    await databases.createDocument(
      appwriteConfig.databaseId, // Database ID
      appwriteConfig.collectionId, // Collection ID
      ID.unique(), // Automatically generate unique ID
    
      {
        companyName: "Github",
        desc: "Get free",
        image: "Naahi hai bhai",
      }
    );
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
      "671001e50018d86f23b7", // Automatically generate unique ID
    
      {
        companyName: "Github",
        desc: "Get free",
        image: "Naahi hai bhai",
      }
    );
    console.log( "Added all the data");
  } catch (error) {
    console.error("Error adding data:", error);
  }
};


export const listData = async () => {
  try {
  const gotData =   await databases.listDocuments(
    appwriteConfig.databaseId, // Database ID
    appwriteConfig.collectionId, // Collection ID
      [
        Query.equal('companyName', 'Microsoft'),
        Query.equal('desc', 'Free nahi hai bhia'),
        Query.equal('image', 'Hai image'),
    ]
    );
    return gotData.documents
    // console.log( gotData.documents ,"Got all data bhai");
  } catch (error) {
    console.error("Error adding data:", error);
  }
};


