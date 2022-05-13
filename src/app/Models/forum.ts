import { Message } from "./message";

export class Forum {
    constructor(public id:number,
                public description:string,
                public messages:Message[]
        
       ){
        
    }
}
