const form = document.getElementById('nameForm');

const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click',function(event) {
  event.preventDefault();

  const formData = new FormData(form);

  for (let [key , value] of FormData.AuthenticatorAssertionResponse()) {
    console.log(`${key}: ${value}`);
  }
  // Perform the form submission, AJAX call, or any other action here
      // For example, submitting the form using fetch API:
      fetch('/submit-form-endpoint', {
          method: 'POST',
          body: formData,
      })
      .then(response => response.json())
      .then(data => {
          console.log('Form submitted successfully:', data);
          // Handle success - e.g., show a success message
      })
      .catch(error => {
          console.error('Error submitting form:', error);
          // Handle error - e.g., show an error message
      });
  });
