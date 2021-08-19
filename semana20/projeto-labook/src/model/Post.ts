export enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
}

export class Post {
    constructor(
        private photo: string,
        private id: string,
        private description: string,
        private type: POST_TYPES,
        private createdAt: Date,
        private authorId: string
    ) { }

    public getPhoto(): string {
        return this.photo
    }

    public getID(): string {
        return this.id
    }

    public getDescription(): string {
        return this.description
    }

    public getType(): POST_TYPES {
        return this.type
    }

    public getDate(): Date {
        return this.createdAt
    }

    public getAuthorID(): string {
        return this.authorId
    }

}

export type postDataDTO = {
    photo: string,
    description: string,
    type: POST_TYPES,
    token: string
}

export type postIdDTO = {
    id: string,
    token: string
}