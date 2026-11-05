// ==========================
// Part 1: Date Display
// ==========================

// Create a Date object that holds the current date and time
const today = new Date();

// getMonth() is 0-based (January = 0), so add 1 to get the real month number
const monthNumber = today.getMonth() + 1;
const dayNumber = today.getDate();
const fullYear = today.getFullYear();

// Convert to strings and pad with a leading zero so they are always 2 digits
const monthText = String(monthNumber).padStart(2, "0");
const dayText = String(dayNumber).padStart(2, "0");

// Build the final message in the format "Today is MM/DD/YYYY"
const dateMessage = "Today is " + monthText + "/" + dayText + "/" + fullYear;

// Display the message on the page (not just in the console)
document.getElementById("dateOutput").textContent = dateMessage;

// ==========================
// Part 2: Number Conversion
// ==========================

// Four separate starting values (all strings)
const wholeNumberString = "42";      // numeric string (integer)
const decimalString = "19.75";       // numeric string with a decimal
const wordString = "hello";          // cannot be converted to a number
const hundredString = "100";         // another numeric string (integer)

// --- Value 1: "42" ---
const convertedWhole = Number(wholeNumberString);
const wholeIsNaN = Number.isNaN(convertedWhole);
const wholeIsInteger = Number.isInteger(convertedWhole);

// --- Value 2: "19.75" ---
const convertedDecimal = Number(decimalString);
const decimalIsNaN = Number.isNaN(convertedDecimal);
const decimalIsInteger = Number.isInteger(convertedDecimal);

// --- Value 3: "hello" ---
const convertedWord = Number(wordString);
const wordIsNaN = Number.isNaN(convertedWord);
const wordIsInteger = Number.isInteger(convertedWord);

// --- Value 4: "100" ---
const convertedHundred = Number(hundredString);
const hundredIsNaN = Number.isNaN(convertedHundred);
const hundredIsInteger = Number.isInteger(convertedHundred);

// Part 4 (conditionals): pick a message for each value with if/else.
// Checks NaN first; if it is a valid number, checks whether it is an integer.
let wholeMessage = "";
if (wholeIsNaN) {
  wholeMessage = "This value is not a valid number.";
} else if (wholeIsInteger) {
  wholeMessage = "This value is an integer.";
} else {
  wholeMessage = "This value is a valid number with a decimal.";
}

let decimalMessage = "";
if (decimalIsNaN) {
  decimalMessage = "This value is not a valid number.";
} else if (decimalIsInteger) {
  decimalMessage = "This value is an integer.";
} else {
  decimalMessage = "This value is a valid number with a decimal.";
}

let wordMessage = "";
if (wordIsNaN) {
  wordMessage = "This value is not a valid number.";
} else if (wordIsInteger) {
  wordMessage = "This value is an integer.";
} else {
  wordMessage = "This value is a valid number with a decimal.";
}

let hundredMessage = "";
if (hundredIsNaN) {
  hundredMessage = "This value is not a valid number.";
} else if (hundredIsInteger) {
  hundredMessage = "This value is an integer.";
} else {
  hundredMessage = "This value is a valid number with a decimal.";
}

// Build one sentence per value
const wholeLine = "Original: '" + wholeNumberString + "' → Converted: " + convertedWhole +
  " → isNaN: " + wholeIsNaN + " → isInteger: " + wholeIsInteger + ". " + wholeMessage;

const decimalLine = "Original: '" + decimalString + "' → Converted: " + convertedDecimal +
  " → isNaN: " + decimalIsNaN + " → isInteger: " + decimalIsInteger + ". " + decimalMessage;

const wordLine = "Original: '" + wordString + "' → Converted: " + convertedWord +
  " → isNaN: " + wordIsNaN + " → isInteger: " + wordIsInteger + ". " + wordMessage;

const hundredLine = "Original: '" + hundredString + "' → Converted: " + convertedHundred +
  " → isNaN: " + hundredIsNaN + " → isInteger: " + hundredIsInteger + ". " + hundredMessage;

// Combine all results into ONE string (as an HTML list)
const conversionHtml = "<ul>" +
  "<li>" + wholeLine + "</li>" +
  "<li>" + decimalLine + "</li>" +
  "<li>" + wordLine + "</li>" +
  "<li>" + hundredLine + "</li>" +
  "</ul>";

// Display the combined result on the page
document.getElementById("numberConversionOutput").innerHTML = conversionHtml;

// ==========================
// Part 3: Math & Formatting
// ==========================

// Option A: Price calculator
const itemPrice = 24.99;        // price of one item
const itemQuantity = 3;         // how many items
const taxRate = 0.095;          // 9.5% sales tax
const shippingCost = 7.5;       // flat shipping fee
const freeShippingMinimum = 50; // subtotal needed for free shipping

// Multiplication: subtotal before tax
const subtotal = itemPrice * itemQuantity;

// Multiplication: tax amount
const taxAmount = subtotal * taxRate;

// Part 4 (conditionals): free shipping if subtotal meets the minimum
let finalShipping = 0;
let shippingMessage = "";
if (subtotal >= freeShippingMinimum) {
  finalShipping = 0;
  shippingMessage = "Your order qualifies for free shipping!";
} else {
  finalShipping = shippingCost;
  shippingMessage = "Add more items to get free shipping.";
}

// Addition: grand total
const totalCost = subtotal + taxAmount + finalShipping;

// Large number displayed with toLocaleString() (adds commas)
const yearlyStoreVisitors = 1250000;

// Number.parseFloat() reads a number out of a string like "12.5%"
const discountText = "12.5% off";
const discountPercent = Number.parseFloat(discountText);

// Build the output, formatting money with toFixed(2) so it always shows 2 decimals
const mathHtml =
  "<p>Item price: $" + itemPrice.toFixed(2) + " × " + itemQuantity + "</p>" +
  "<p>Subtotal: $" + subtotal.toFixed(2) + "</p>" +
  "<p>Tax (" + (taxRate * 100).toFixed(1) + "%): $" + taxAmount.toFixed(2) + "</p>" +
  "<p>Shipping: $" + finalShipping.toFixed(2) + " — " + shippingMessage + "</p>" +
  "<p><strong>Total cost: $" + totalCost.toFixed(2) + "</strong></p>" +
  "<p>Yearly store visitors: " + yearlyStoreVisitors.toLocaleString() + "</p>" +
  "<p>Number.parseFloat('" + discountText + "') → " + discountPercent + "</p>";

// Display the results on the page
document.getElementById("mathOutput").innerHTML = mathHtml;
