// Output the copright year (current year) in the footer 
const year = document.querySelector("#current-year");
const today = new Date();
year.innerHTML = today.getFullYear();