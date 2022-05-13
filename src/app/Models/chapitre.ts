import { Lecon } from "./lecon";
import { Test } from "./test";

export class Chapitre {
    constructor(public id:number,
        public titre:String,
        public description:String,
        public isCompleted:Boolean,
        public lessons:Lecon[],
        public test:Test
        ){
        
    }
}
