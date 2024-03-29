export class CustomError extends Error {
    constructor(
        message: any,
        public statusCode: number = 400
    ) {
        super(message)
    }
}

export class NotFoundError extends CustomError {
    constructor() {
        super("Item não encontrado", 404);
    }
}

export class InvalidRequest extends CustomError{
    constructor() {
        super("Preencha corretamente os campos da requisição", 400);
    }
}

export class Unauthorized extends CustomError{
    constructor() {
        super("Usuário não autorizado", 401);
    }
}

export class InvalidCredentials extends CustomError{
    constructor() {
        super("Credenciais inválidas", 401);
    }
}


export class Forbiden extends CustomError{
    constructor() {
        super("Ação não permitida", 403);
    }
}


export class InvalidEmail extends CustomError{
    constructor() {
        super("Email inválido", 406);
    }
}

export class InvalidDate extends CustomError{
    constructor() {
        super("Data inválida, uso o formatao dd/mm/aaa", 406);
    }
}