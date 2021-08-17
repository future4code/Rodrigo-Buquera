export type taskData = {
   title: string,
   description: string,
   deadline: string,
   authorId: string
}

export type task = taskData & { id: string }

export type taskIdDTO = { id: string }

export class Task {
   constructor (
  public id: string,
  public title: string,
  public description: string,
  public deadline: string,
  public status: string,
  public authorId: string,
  public authorNickname: string
   ) {}
}