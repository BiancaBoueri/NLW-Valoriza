import { Request, Response, NextFunction, response } from "express"
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

export async function ensureAdmin(request: Request, responde: Response, next: NextFunction) {

  const { user_id } = request;

  const usersRepositories = getCustomRepository(UsersRepositories);

  const { admin } = await usersRepositories.findOne(user_id);

  // Verificar se usuario é admin

  if (admin) {
    return next();
  }

  return response.status(401).json({
    error: "Unauthorized",
  });

}
