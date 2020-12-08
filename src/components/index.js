// reference to all components we created
export { default as Jumbotron } from './Jumbotron';
export { default as Footer } from './Footer';
export { default as Accordion } from './Accordion';
export { OptForm } from './opt-form';
export { Header } from './Header';
export { Feature } from './Feature';
export { default as Form } from './form';



// import and export explanation
// https://medium.com/@etherealm/named-export-vs-default-export-in-es6-affb483a0910


// ES6 provides us to import a module and use it in other files. Strictly speaking in React terms, one can use stateless components in other components by exporting the components from their respective modules and using it in other files.
// ES6 provides two ways to export a module from a file: named export and default export.
// Named Export: (export)
// With named exports, one can have multiple named exports per file. Then import the specific exports they want surrounded in braces. The name of imported module has to be the same as the name of the exported module.
// // imports
// // ex. importing a single named export
// import { MyComponent } from "./MyComponent";
// // ex. importing multiple named exports
// import { MyComponent, MyComponent2 } from "./MyComponent";
// // ex. giving a named import a different name by using "as":
// import { MyComponent2 as MyNewComponent } from "./MyComponent";
// // exports from ./MyComponent.js file
// export const MyComponent = () => {}
// export const MyComponent2 = () => {}
// Import all the named exports onto an object:
// import * as MainComponents from "./MyComponent";
// // use MainComponents.MyComponent and MainComponents.MyComponent2
// here