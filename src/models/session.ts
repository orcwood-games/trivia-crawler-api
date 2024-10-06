import User from "./user";

export default class Session {
	code:string;
	uuid:string;
	created:Date;
	updated:Date;
	user:User;

	constructor(session:any){
		this.code = session.code;
		this.uuid = session.uuid;
		this.created = session.created;
		this.updated = session.updated;
		this.user = new User({
			id: session.user_id,
			uuid: session.user_uuid,
			created: session.user_created,
			updated: session.user_updated,
			lastLogin: session.user_last_login,
			steamId: session.user_steam_id,
			displayName: session.user_display_name
		});
	}
}