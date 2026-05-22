/**
 * Palindrome Check Logic
 * Triggered only on Button Click
 */

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('inputString');
    const checkBtn = document.getElementById('checkBtn');
    const resultBox = document.getElementById('resultBox');
    const resultText = document.getElementById('resultText');
    const resultIcon = document.getElementById('resultIcon');
    const clearBtn = document.getElementById('clearBtn');

    // Action on Button Click
    checkBtn.addEventListener('click', () => {
    const val = input.value.trim();
    
    if (!val) {
        alert("Please enter some text first!");
        return;
    }

    // Function to find the shortest palindrome addition
    const makeShortestPalindrome = (str) => {
        // Check if a substring is a palindrome
        const isPalindrome = (s) => s === s.split('').reverse().join('');

  // Clean input
const cleaned = val
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');

// Reverse string
const reversed = cleaned
    .split('')
    .reverse()
    .join('');

// Check palindrome
const isPalindrome = cleaned === reversed;
    // Update UI
    resultBox.className = `result-container mt-4 text-center ${
    isPalindrome ? 'success-bg' : 'error-bg'
}`;

resultText.innerText = isPalindrome
    ? `"${val}" is a Palindrome ✅`
    : `"${val}" is NOT a Palindrome ❌`;

resultIcon.innerText = isPalindrome ? "🎯" : "❌";

// Confetti only if palindrome
if (isPalindrome) {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
}
});


    clearBtn.addEventListener('click', () => {
        input.value = '';
        resultBox.className = "result-container mt-4 text-center";
        resultText.innerText = "Waiting for you to click check...";
        resultIcon.innerText = "⌨️";
    });
});
