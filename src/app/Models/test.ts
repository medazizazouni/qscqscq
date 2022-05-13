import { Question } from "./question";

export class Test {
    constructor(public id:number,
       
        public description:string,
        public note:number,
        public isPassed:boolean,
        public questions:Question[]
       ){
        
    }
}
