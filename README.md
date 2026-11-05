# Homework 9: JavaScript Built-In Objects — JavaScript Mini Demo

COMP 484

## Live Site (GitHub Pages)

(https://brianfigueroa281.github.io/hw9-javascript-demo/)

## Screenshot

!(screenshot.png)

Path: `screenshot.png`

## Built-In Objects and Methods Used

**Date object**
- `new Date()`
- `getMonth()`, `getDate()`, `getFullYear()`

**Number object**
- `Number()`
- `Number.isNaN()`
- `Number.isInteger()`
- `Number.parseFloat()`
- `toFixed()`
- `toLocaleString()`

**String**
- `String()`
- `padStart()`

**Document (DOM)**
- `document.getElementById()`
- `textContent`, `innerHTML`

## Extra Credit

Added light CSS styling (`style.css`) so each section displays as a separate card.

## Reflection

<!-- Edit this so it's in your own words -->
The easiest part was the math section, because multiplying and adding values and formatting them with `toFixed(2)` was straightforward. The hardest part was the number conversion section, since doing every value without arrays or loops meant writing a lot of repeated code and keeping the variable names organized. I learned that the `Date` object's `getMonth()` starts counting at 0, so I had to add 1, and that `padStart()` is an easy way to keep the month and day at two digits. I learned that `Number()` returns `NaN` when a string can't be converted, and that `Number.isNaN()` and `Number.isInteger()` are reliable ways to check the result. Finally, I learned that `getElementById()` with `textContent` or `innerHTML` lets JavaScript put results directly on the page instead of only in the console.

## Sources

- MDN Web Docs — Date, Number, and String.prototype.padStart reference pages
