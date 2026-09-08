/*
 * Node.js program for reading text input from the keyboard.
 * The "readline-sync" module is used for this:
 * https://github.com/anseki/readline-sync
 *
 * Installation: npm install readline-sync
 *
 * Since the "readline-sync" module is listed as a dependency in "package.json",
 * the following command is also sufficient: npm install
 */

import readlineSync from "readline-sync";

const inputString = readlineSync.question( "\nPlease enter a string!\n> " );

console.log( `\nA string with ${inputString.length} characters was entered.\n` );
