import { Request, Response, NextFunction, response } from "express"


export function ensureAdmin(request: Request, responde: Response, next: NextFunction) {
  // Verificar se usuario é admin
  const admin = true;

  if (admin) {
    return next();
  }

  return response.status(401).json({
    error: "Unauthorized",
  });

}
