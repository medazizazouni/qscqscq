import { Utilisateur } from "./utilisateur";

export class Message {
 constructor(public utilisateur:Utilisateur,
             public contenu:String){}
}
