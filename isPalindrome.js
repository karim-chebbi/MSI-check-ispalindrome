function isPalindrome(word) {
  // Stop condition: empty or single character
  if (word.length <= 1) {
    return true;
  }

  // If mismatch found, it's not a palindrome
  if (word[0] !== word[word.length - 1]) {
    return false;
  }

  // Recursive step: check inner substring
  return isPalindrome(word.slice(1, -1));
}

// Examples
console.log(isPalindrome("kayak")); // true
console.log(isPalindrome("radar")); // true
console.log(isPalindrome("hello")); // false
