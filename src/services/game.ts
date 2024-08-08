import GameModel from "../models/game";

class Game {
	async get():Promise<GameModel>{
		return new Promise((resolve, reject) => {
			if(1 === 1){
				resolve({name: "I've got game"});
			}else{
				reject({message: "No game :( "});
			}
		});
	}
}

export default new Game()