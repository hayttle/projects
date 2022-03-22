const url = "https://jsonplaceholder.typicode.com/users/";

axios
  .get(url)
  .then((response) => {
    let data = response.data;
    let contentHTML = "";
    contentHTML = "<table border=1px>";
    data.forEach((element) => {
      contentHTML += `<tr><td>${element.name}</td><td>${element.email}</td></tr>`;
    });
    contentHTML += "</table>";
    document.getElementById("users").innerHTML = contentHTML;
  })
  .catch((error) => {
    console.error(error);
  });
