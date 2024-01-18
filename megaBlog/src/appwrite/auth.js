import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";



// const 

// const promise = account.create('[USER_ID]', 'email@example.com', '');

// promise.then(function (response) {
//     console.log(response); // Success
// }, function (error) {
//     console.log(error); // Failure
// });

export class AuthService{
    client = new Client()
    account;
    constructor(){
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);               
        this.account = new Account(this.client);
    }
    async createAccount({name,email,password}){
        try {
            const userAccount=await this.account.create(ID.unique(),email,password,name)
            if (userAccount) {
                return this.login(email,password);
            } else {
                console.log(userAccount)
                return userAccount;
            }
        } catch (error) {
            throw error
        }
    }
    async login({email,password}){
        try {
            return await  this.account.createEmailSession(email, password);
        } catch (error) {
            throw error
        }
    }

    async getAccountUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log("appwrite service :: getAccountUser",error)
        }
    }

    // async getCurrentUser() {
    //     try {
    //         return await this.account.get();
    //     } catch (error) {
    //         console.log("Appwrite serive :: getCurrentUser :: error", error);
    //     }

    //     return null;
    // }

    async logout(){
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            console.log('logouterror',error)
        }
        return null
    }
}

const authService =new AuthService();
export default authService
