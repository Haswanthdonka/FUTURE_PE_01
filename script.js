function generateContent() {
  let business = document.getElementById("business").value;

  if (business === "") {
    alert("Enter business type");
    return;
  }

  let content = `
    <h3>Homepage</h3>
    <p>Welcome to the best ${business} in your city. Transform your experience with our professional services.</p>

    <h3>Services</h3>
    <ul>
      <li>Premium ${business} services</li>
      <li>Affordable pricing</li>
      <li>Expert professionals</li>
    </ul>

    <h3>Call To Action</h3>
    <p>Book your ${business} service today and experience the difference!</p>
  `;

  document.getElementById("output").innerHTML = content;
}
