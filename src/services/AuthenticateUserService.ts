import { getCustomRepository } from "typeorm"

import { compare } from "bcryptjs";

import { sign } from "jsonwebtoken"

import { UsersRepositories } from "../repositories/UsersRepositories"




interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {

  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    // Verificar se email existe
    const user = await usersRepositories.findOne({
      email
    });

    if (!user) {
      throw new Error("Email/Password incorrect")
    }

    //verificar se a senha está correta
    // 12345 / hjhkjehjhrkew

    const passwordMatch = await compare(password, user.password/*hash*/);

    /*await sempre q tiver o retorno de uma promise*/

    if (!passwordMatch) {
      throw new Error("Email/Password incorrect")
    }

    //gerar token
    //md5 hash generator
    const token = sign({
      emil: user.email
    }, "7ejoakfakfojqggj4o5ijokw", {
      subject: user.id,
      expiresIn: "1d"
    });

    return token;

  }
}

export { AuthenticateUserService }