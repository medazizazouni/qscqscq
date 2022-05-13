import { Cours } from "./cours";
import { Utilisateur } from "./utilisateur";

export class Enseignant extends Utilisateur {
    constructor(public id:number,
        public username:String,
        public password:string,
        public mailAdress:Number,
        public cours:Cours[]){
        super(id,username,password,mailAdress)
    }
}
 

