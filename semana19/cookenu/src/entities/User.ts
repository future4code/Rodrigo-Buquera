export class User {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public password: string,
        public role?: string,

    ) { }


    static toUserModel(data: any): User {
        return new User(data.id, data.name, data.email, data.password, data.role);
      }
}

