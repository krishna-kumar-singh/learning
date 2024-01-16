import conf from '../conf/conf.js';
import { Client, ID , Databases,Storage,Query} from "appwrite";

export class Service{
    client = new Client()
    databases;
    bucket;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl) // Your API Endpoint
        .setProject(conf.appwriteProjectId);    // Your project ID
        this.databases=new Databases(this.client)
        this.bucket=new Storage(this.client)
    }
    
    async createPost({title,content,slug,featuredImage,userId,status}){
        try {
            return await this.databases.createDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug, {
                title,
                content,
                featuredImage,
                userId,
                status,
            });
        } catch (error) {
            console.log('app write service :: createPost error ', error)
        }
    }

    async updatePost({title,content,slug,featuredImage,userId,status}){
        try {
            return await this.databases.updateDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug,{
                title,
                content,
                featuredImage,
                status
            })
        } catch (error) {
            console.log('app write service :: updatePost error ', error)
        }
    }
    
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug)
            return true
        } catch (error) {
            console.log('app write service :: deletePost error ', error)
        }
        return false
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug)
        } catch (error) {
            console.log('app write service :: getPost error ', error)
        }
        return false
    }

    async getPosts(queries=[Query.equal("status",'active')]){
        try {
            return await this.databases.listDocuments(conf.appwriteDatabaseId,conf.appwriteCollectionId,queries)
        } catch (error) {
            console.log('app write service :: getPosts error ', error)
        }
    }

    // async getPosts(queries = [Query.equal("status", "active")]){
    //     try {
    //         return await this.databases.listDocuments(
    //             conf.appwriteDatabaseId,
    //             conf.appwriteCollectionId,
    //             queries,
                

    //         )
    //     } catch (error) {
    //         console.log("Appwrite serive :: getPosts :: error", error);
    //         return false
    //     }
    // }


    // file upload
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
                )
        } catch (error) {
            console.log('app write service :: uploadFile error ', error)
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(conf.appwriteBucketId,fileId)
            return true
        } catch (error) {
            console.log('app write service :: getPosts error ', error)
        }
        return false
    }

    getFilePreview(fileID){
        try {
            return this.bucket.getFilePreview(conf.appwriteBucketId,fileID)
        } catch (error) {
            
        }
    }
}
const service = new Service()
export default service
