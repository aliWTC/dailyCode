// Function to check if the number is prime
function isPrime(num) {
	if (num <= 1) return false; // 0 and 1 are not prime numbers
	for (let i = 2; i <= Math.sqrt(num); i++) {
	  if (num % i === 0) {
		return false; // Not prime if divisible by any number other than 1 and itself
	  }
	}
	return true;
  }
  
  // Get the button and input element from the DOM
  var form = document.getElementById('form');
  var numberInput = document.getElementById('number');
  
  // Add an event listener to the form submit
  form.addEventListener('submit', function(event) {
	event.preventDefault(); // Prevent the form from refreshing the page
  
	var number = parseInt(numberInput.value); // Get the number from the input field
  
	// Check if the number is prime
	if (isPrime(number)) {
	  window.alert(number + " is a prime number!");
	} else {
	  window.alert(number + " is not a prime number.");
	}
  });
  