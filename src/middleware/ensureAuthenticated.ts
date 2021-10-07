import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {

  //receber o token
  // "bearer token" no insomnia

  const authToken = request.headers.authorization

  //validar se token está preenchido
  if (!authToken) {
    return response.status(401).end();
  }

  const [, token] = authToken.split(" ") //tirar a palavra "bearer"

  try {
    // validar se token é valido
    const { sub } = verify(token, "7ejoakfakfojqggj4o5ijokw") as IPayload;

    // recuperar informações do usuário
    request.user_id = sub;

    return next();
  } catch (err) {
    return response.status(401).end();
  }

}