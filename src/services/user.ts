import db from "../helpers/db";
import UserModel from "../models/user";

class User {
	async login(user:UserModel):Promise<UserModel>{
		return new Promise((resolve, reject) => {
			db.query(`CALL sp_login(?)`, [user.steamId], (error, results:any) => {
				if(error) return reject(error);
				if(results[0]?.length){
					resolve(new UserModel(results[0][0]));
				}else{
					reject({message: "Failed to get user data"});
				}
			});
		});
	}
}

export default new User()