// the purpose of this is to have a general export file
// when importing you dont have to use multiple lines to import ...
// each of this module into the single module where its been used
// becuase this module exports all these as one object
// which cld then be import in a single line by destructuring this module

export { Home } from './Home';
export { default as Browse } from './Browse';
export { default as Signin } from './Signin';
export { default as Signup } from './Signup';