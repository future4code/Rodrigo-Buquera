export class CustomError extends Error {
    constructor(
        message: any,
        protected statusCode: number = 400
    ) {
        super(message)
    }
}

export class NotFoundError extends CustomError {
    constructor() {
        super("Não encontrado", 404);
    }
}

export class InvalidRequest extends CustomError{
    constructor() {
        super("Preencha corretamente os campos ", 400);
    }
}

export class Unauthorized extends CustomError{
    constructor() {
        super("Usuário não autorizado", 401);
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
        super("Data inválida", 406);
    }
}