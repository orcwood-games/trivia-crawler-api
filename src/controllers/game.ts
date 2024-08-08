import { Request, Response } from "express";
import GameService from '../services/game';

export const get = async (req:Request, res:Response) => {
	const result = await GameService.get().catch((error) => {
		console.error(error);
	});

	if(!result) return res.status(500).json({message: "Failed to get game"});

	res.json(result);
}