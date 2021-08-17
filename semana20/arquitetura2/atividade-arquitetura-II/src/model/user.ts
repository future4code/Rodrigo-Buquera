export enum USER_ROLES {
   NORMAL = 'NORMAL',
   ADMIN = 'ADMIN'
}

export type authenticationData = {
   id: string,
   role: USER_ROLES
}

export type userData = {
   name: string,
   nickname: string,
   email: string,
   password: string,
   role: USER_ROLES
}

export type user = userData & { id: string }

export type signupInputDTO = {
   name: string,
   nickname: string,
   email: string,
   password: string,
   role: USER_ROLES
}

export type signupInput = {
   name: string,
   nickname: string,
   email: string,
   password: string,
   role: USER_ROLES
}

export class User {
   constructor(
   public id: string,
   public name: string,
   public nickname: string,
   public email: string,
   public password: string,
   public role: USER_ROLES
   ){}
}