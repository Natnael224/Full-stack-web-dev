import { pi, e } from './user.js';
console.log(pi); // 3.14159
console.log(e); // 2.71 trials of importing 

import {createUser} from './user.js';
const User = createUser("Natnael Tsegaye", 28, "Engineer");
console.log(User);
import { caroptions } from './cars.js';
const carType = caroptions(User.money);
console.log(`The user can purchase a: ${carType}`);