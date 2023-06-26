// Get the form element
const form = document.getElementById("demand-form");

// Handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  const productName = document.getElementById("product-name").value;
  const productDescription = document.getElementById("product-description").value;
  const contactInfo = document.getElementById("contact-info").value;

  // Create a demand object with form values
  const demand = {
    productName: productName,
    productDescription: productDescription,
    contactInfo: contactInfo
  };

  // Send the demand to the server or perform further actions
  console.log(demand);
  // You can send the demand data to the server using AJAX or fetch API for further processing

  // Reset the form
  form.reset();
});
