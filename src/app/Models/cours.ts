import { Apprenant } from "./apprenant";
import { Chapitre } from "./chapitre";
import { Enseignant } from "./enseignant";
import { Forum } from "./forum";

export class Cours {
                    

 
    constructor(public id:number,
        public enseignant:Enseignant,
        public duree:number,
        public titre:string,
        public slugs:string,
        public image:string,
        public modifiedAt:Date,
        public description: Text,
        public chapitres:Chapitre[],
        public forum:Forum,
        public apprenants:Apprenant[],){
        
    }
}
