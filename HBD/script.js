document
  .getElementById("birthday-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    fetch(
      "https://script.google.com/macros/s/AKfycbz8im6zGkvGRd3LR0LtNblXWLOsaM7vv5NxP6SHmc--/exec",
      {
        method: "POST",
        body: JSON.stringify({ name: name, message: message }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.text())
      .then((data) => alert("Request submitted successfully!"))
      .catch((error) => console.error("Error:", error));
  });
