document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");
  const submitBtn = document.getElementById("submitBtn");

  // Input fields
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const contactInput = document.getElementById("contact");
  const addressInput = document.getElementById("address");

  // Error fields
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const contactError = document.getElementById("contactError");
  const addressError = document.getElementById("addressError");
  const genderError = document.getElementById("genderError");
  const subjectsError = document.getElementById("subjectsError");

  // Validation Functions
  function validateName() {
    const name = nameInput.value.trim();
    if (name === "") {
      nameError.textContent = "Name is required.";
      return false;
    }
    nameError.textContent = "";
    return true;
  }

  function validateEmail() {
    const email = emailInput.value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
      emailError.textContent = "Invalid email format.";
      return false;
    }
    emailError.textContent = "";
    return true;
  }

  function validateContact() {
    const contact = contactInput.value.trim();
    const contactPattern = /^[0-9]{10}$/;
    if (!contactPattern.test(contact)) {
      contactError.textContent = "Enter a valid 10-digit contact number.";
      return false;
    }
    contactError.textContent = "";
    return true;
  }

  function validateAddress() {
    const address = addressInput.value.trim();
    if (address === "") {
      addressError.textContent = "Address is required.";
      return false;
    }
    addressError.textContent = "";
    return true;
  }

  function validateGender() {
    const genderSelected = document.querySelector('input[name="gender"]:checked');
    if (!genderSelected) {
      genderError.textContent = "Please select your gender.";
      return false;
    }
    genderError.textContent = "";
    return true;
  }

  function validateSubjects() {
    const subjectsSelected = document.querySelectorAll('input[name="subjects"]:checked');
    if (subjectsSelected.length === 0) {
      subjectsError.textContent = "Please select at least one subject.";
      return false;
    }
    subjectsError.textContent = "";
    return true;
  }

  // Enable or disable submit button based on validations
  function validateForm() {
    const isValid =
      validateName() &&
      validateEmail() &&
      validateContact() &&
      validateAddress() &&
      validateGender() &&
      validateSubjects();

    submitBtn.disabled = !isValid;
    return isValid;
  }

  // Event listeners for input fields
  nameInput.addEventListener("input", validateForm);
  emailInput.addEventListener("input", validateForm);
  contactInput.addEventListener("input", validateForm);
  addressInput.addEventListener("input", validateForm);

  document.querySelectorAll('input[name="gender"]').forEach(input =>
    input.addEventListener("change", validateForm)
  );

  document.querySelectorAll('input[name="subjects"]').forEach(input =>
    input.addEventListener("change", validateForm)
  );

  // Final form submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      form.reset();
      submitBtn.disabled = true;
    }
  });
});
