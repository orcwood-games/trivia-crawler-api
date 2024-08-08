export default class User {
	id?:number;
	uuid?:string;
	created?:Date;
	updated?:Date;
	lastLogin?:Date;
	steamId?:number;
	displayName?:string;

	constructor(user:any){
		this.id = user.id;
		this.uuid = user.uuid;
		this.created = user.created;
		this.updated = user.updated;
		this.lastLogin = user.last_login;
		this.steamId = user.steam_id;
		this.displayName = user.display_name;
	}
}