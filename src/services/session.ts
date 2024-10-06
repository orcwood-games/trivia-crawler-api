import db from "../helpers/db";
import UserModel from "../models/user";
import SessionModel from "../models/session";

class Session {
	async new(user:UserModel):Promise<SessionModel>{
		return new Promise((resolve, reject) => {
			db.query(`CALL sp_session_new(?)`, [user.id], (error, results:any) => {
				if(error) return reject(error);
				if(results[0]?.length){
					resolve(new SessionModel(results[0][0]));
				}else{
					reject({message: "Failed to get session data"});
				}
			});
		});
	}
}

export default new Session()