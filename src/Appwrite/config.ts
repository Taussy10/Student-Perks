import { Client, Account, OAuthProvider, Databases, ID , Query , Storage } from 'appwrite';

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

export const addData = async () => {
  try {
    await databases.createDocument(
      appwriteConfig.databaseId, // Database ID
      appwriteConfig.collectionId, // Collection ID
      ID.unique(), // Automatically generate unique ID
    
      {
        companyName: "Git bucket",
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

// Upload files in storage

const uploadFiles =  async(file) =>  {
  try {
    const storeFiles = storage.createFile(
      appwriteConfig.logoBucketId,
      ID.unique(),
      file
      
    )
  } catch (error) {
    console.log(error , "Error aa raha hai");
    
  }
  
  
}