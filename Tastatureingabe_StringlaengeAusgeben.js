#!/usr/bin/env node

/*
 * Node.js-Programm zum Einlesen von Texteingaben von der Tastatur.
 * Hierfür wird das Modul "readline-sync" verwendet:
 * https://github.com/anseki/readline-sync 
 *
 * Installation: npm install readline-sync
 * 
 * This file is licensed under the terms of the BSD 3-Clause License.
 */

const readlineSync = require("readline-sync");

const eingabeStr = readlineSync.question("\nBitte geben Sie eine Zeichenkette ein!\n> ");

console.log(`\nEs wurde eine Zeichenkette mit ${eingabeStr.length} Zeichen eingegeben.\n`);
