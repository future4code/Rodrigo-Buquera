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
        super("Email inválido", 406);
    }
}

export class InvalidDate extends CustomError{
    constructor() {
        super("Data inválida, uso o formatao dd/mm/aaa", 406);
    }
}