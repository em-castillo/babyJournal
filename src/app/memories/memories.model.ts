export class Memories{

    constructor(
        public _id:string,
        public id:string, 
        public title:string, 
        public description:string,
        public children?:Memories[] 
        ){}
}