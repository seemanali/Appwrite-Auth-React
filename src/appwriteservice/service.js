import { Client, Account, ID } from "appwrite";
import config from "../myver";
import { data } from "autoprefixer";

class appwriteAuth  {
     client = new Client();
     account;

     constructor(){
        this.client.setProject(config.Project_ID);
        this.account = new Account(this.client);
       
     }

     async signupfunction (name , email , password){
        try {
            const response = await this.account.create(ID.unique(), email, password , name);
            return {success :true , data : response};
        } catch (error) {
            return {success : false  , error : error.message}
        }

     }

     async getcurrentUser(){
        try {
            const response =  await this.account.get();
                return {success : true , data:response}
        } catch (error) {
            return {success : false , error:error.message}
        }
     }
     
     async loginfunction(email , password){
        try {
            const result = await this.account.createEmailPasswordSession(email, password);
            return {success : true , data : result};
        } catch (error) {
            return {success : false  , error : error.message}
        }
     }

     async logoutfunction(){
        try {
            const result = await this.account.deleteSession("current");
            return {success : true , data : result};
        } catch (error) {
            return {success : false  , error : error.message}
        }
     }
};


const authservice  = new appwriteAuth();

export default authservice;