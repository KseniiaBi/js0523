import { API_KEY, url } from "./constants.js";
// import {url} from './calc.js'; // Uncaught SyntaxError: Identifier 'url' has already been declared
// import {url as u} from './calc.js';
import * as calc from './calc.js';
import {hi} from './helper.js';
import User from './user.js';

console.log(API_KEY);
console.log(url);
console.log(calc.url);

console.log(`sum 5,6 => ${calc.sum(5,6)}`);

console.log(calc);

hi();

let admin = new User('Admin', 22);
admin.greet();

//  all modules always use strict
// 'this' in module is undefined
// modules load deffered

