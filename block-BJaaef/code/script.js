let allPeople = got.houses.map((house) => house.people).flat();
let container = document.querySelector(".container");

console.log(got);
allPeople.forEach((person) => {
  let SmallDiv = document.createElement("div");
  SmallDiv.classList.add("flex-30");
  let image = document.createElement("img");
  image.src = person.image;
  let heading = document.createElement("h2");
  heading.innerText = person.name;
  let flexDiv = document.querySelector("div");
  let para = document.createElement("p");
  para.innerText = person.description;
  let button = document.createElement("button");
  button.innerText = "Learn More!";
  SmallDiv.append(image, heading, para, button);
  container.append(SmallDiv);
});