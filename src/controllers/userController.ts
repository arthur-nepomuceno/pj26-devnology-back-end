import { Request, Response } from "express";

async function signUp(req: Request, res: Response){
    res.status(200).send('signUp ok');
    return;
}

async function logIn(req: Request, res: Response){
    res.status(200).send('logIn ok');
}

export {
    signUp,
    logIn
}