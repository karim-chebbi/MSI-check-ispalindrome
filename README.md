# 🔁 Palindrome Checker (Recursion - Low Level Design)

## 📖 Description

This project implements a simple **Palindrome Checker** using **recursion in JavaScript**.

A word is considered a palindrome if it reads the same from left to right and right to left.

Examples:
- kayak → ✅ palindrome  
- radar → ✅ palindrome  
- hello → ❌ not a palindrome  

---

## 🎯 Objective

- Apply **recursion concept**
- Practice **Low-Level Design thinking**
- Understand **base case and recursive case**
- Work with **string manipulation**

---

## 🧠 Algorithm

The solution follows this logic:

1. Compare the first and last characters of the word
2. If they are different → return `false`
3. If they are equal → check the inner substring
4. Stop when:
   - The word is empty, OR
   - The word has one character

---

## 💻 Implementation (JavaScript)

```js
function isPalindrome(word) {
  // Base case: 0 or 1 character
  if (word.length <= 1) {
    return true;
  }

  // If mismatch found
  if (word[0] !== word[word.length - 1]) {
    return false;
  }

  // Recursive case
  return isPalindrome(word.slice(1, -1));
}

// Examples
console.log(isPalindrome("kayak"));  // true
console.log(isPalindrome("radar"));  // true
console.log(isPalindrome("hello"));  // false
