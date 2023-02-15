fetch("https://reqres.in/api/users")
  .then((response) => response.json())
  .then((json) => {
    console.log(json.data);
    const markup = json.data.map((el) => {
      return `
        <li class="card-container">
            <div class="image-container">
              <img class="round" src="${el.avatar}">
            </div>
             <div class="name-container">
                 <span class="firstName">${el.first_name}</span>
                 <span class="lastName">${el.last_name}</span>
             </div>
             <p class="email">${el.email}</p>
            </li>
        `;
    });
    console.log(markup);
    document.querySelector(".list-container").innerHTML = markup.join("");
  });



  // For toggling and finding number of children and other stuff is done here!

const navigation = document.getElementById("nav");
const menu = document.getElementById("menu");

menu.addEventListener("click", () => {
  // The navigation.children.length means the following :-
  // The children inside a parent are basically an array of elements; So, here I'm finding the length of the array aka how many children are inside the nav bar.
  //   Yup That's all.
  navigation.style.setProperty("--childenNumber", navigation.children.length);

  //    Casually Toggling Classes to make them animate on click
  //   Regular stuff ;)
  navigation.classList.toggle("active");
  menu.classList.toggle("active");
});
