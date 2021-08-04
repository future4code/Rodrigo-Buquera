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

export class BadRequest extends CustomError{
    constructor() {
        super("Preencha corretamente os campos ", 400);
    }
}

export class InvalidEmail extends CustomError{
    constructor() {
        super("Email inválido", 400);
    }
}