function isValidDate(dateStr) {
 
  const parts = dateStr.split("/");
  if (parts.length !== 3) return false;

  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const year = parseInt(parts[2], 10);

  if (isNaN(day) || isNaN(month) || isNaN(year)) return false;
  if (year < 1000 || year > 9999) return false;
  if (month < 1 || month > 12) return false;
  if (day < 1 || day > 31) return false;
  const maxDay = maxDaysInMonth(month, year);
  if (day > maxDay) return false;
  return true;
}

function maxDaysInMonth(month, year) {
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (month === 2 && isLeapYear(year)) {
    return 29;
  }
    return daysInMonth[month - 1]; 
}


function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log(isValidDate("03/04/2001")); // true
console.log(isValidDate("31/11/2001")); // false
console.log(isValidDate("29/02/2024")); // true
console.log(isValidDate("29/02/2023")); // false
console.log(isValidDate("03/14/2001")); // false



// ETAPE 02 

function isPalindrome(dateStr) {
  if (!isValidDate(dateStr)) return false;
  const cleanStr = dateStr.replaceAll("/", "");
  const reversedStr = cleanStr.split("").reverse().join("");
  return cleanStr === reversedStr;
}
console.log(isPalindrome("11/02/2011")); // true
console.log(isPalindrome("03/04/2001")); // false
console.log(isPalindrome("22/02/2022")); // true
console.log(isPalindrome("31/04/2022")); // false



// ETAPE 03

function getNextPalindromes(x) {
  const results = [];
  let currentDate = new Date();

  while (results.length < x) {
    currentDate.setDate(currentDate.getDate() + 1);

    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // mois = 0 à 11 en JS
    const year = currentDate.getFullYear();

    const dateStr = `${day}/${month}/${year}`;

    if (isDatePalindrome(dateStr)) {
      results.push(dateStr);
    }
  }
    return results;
}
console.log(getNextPalindromes(5));



// ETAPE 04

function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

function isDatePalindrome(dateStr) {
  if (!isValidDate(dateStr)) return false;
  const cleanDate = dateStr.replaceAll("/", "");
  return isPalindrome(cleanDate);
}






