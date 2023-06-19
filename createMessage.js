import { signs, luck, advice } from "./data.js";
import { random } from "./random.js";

export const createMessage = ()=>{
   
    console.log(`Sing: ${random(signs)}`);
    console.log(`Luck: ${random(luck)}`);
    console.log(`Advice: ${random(advice)}`);

}