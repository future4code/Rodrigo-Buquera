export class Relation {
    constructor(
       private userId: string,
       private friendId: string
       ){}
    
    public getUserID(): string {
        return this.userId
    }

    public getFriendId(): string {
        return this.friendId
    }
 }

 export type relationsDataDTO = {
    friendId: string,
    token: string
 }