import { Client, Databases, ID, Query } from 'appwrite';

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

const client = new Client()
   .setEndpoint('https://cloud.appwrite.io/v1')
   .setProject(PROJECT_ID);

const database = new Databases(client);

// Declare the updateSearchCount function as async
export const updateSearchCount = async (searchTerm, movie) => {
   try {
      const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, 
         [Query.equal('searchTerm', searchTerm)]
      );

      if (result.documents.length > 0) {
         const document = result.documents[0];

         // Update the document with the new count
         await database.updateDocument(DATABASE_ID, COLLECTION_ID, document.$id, {
            count: document.count + 1
         });

      } else {
         // Create a new document if no document found
         await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
            searchTerm,
            count: 1,
            movie_id: movie.id,
            poster_url: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
         });
      }
   } catch (error) {
      console.error("Error updating search count:", error);
   }
};

export const getTrendingMovies = async () => {
   try {
      const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
         Query.orderDesc('count'),
         Query.limit(10),
      ]);
      
      return result.documents;
        
   } catch (error) {
      console.error(`Error fetching movies: ${error}`);
   }
}