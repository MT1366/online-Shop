import "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js";

// const form = document.getElementById("form");
const btn = document.querySelector("#button");
// let formData = {};

btn.addEventListener("click", () => {
  const password = document.querySelector("#pass").value;
  const email = document.querySelector("#email").value;

  axios
    .post("https://64735fded784bccb4a3c8436.mockapi.io/shoeStore", {
      email: email,
      password: password,
    })

    .then((response) => {
      // alert();
      console.log(response);
      // formData = {
      //   email: email,
      //   password: password,
      //   Response: data,
      // };

      // console.log(formData);

      window.location.href = window.location.href =
        "http://127.0.0.1:5500/home-page.html";
    })
    .catch((error) => {
      console.error(error);
    });
});
