export class Recipe {
    constructor(
        public id: string,
        public title: string,
        public description: string,
        public date: string,
        public userId?: string,

    ) { }

    }