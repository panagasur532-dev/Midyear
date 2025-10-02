function greet(name) {
  return "Hello, " + name + "! Welcome.";
}

let message = greet("Alice");
console.log(message);

let courses = ["CIS", "SE", "CS"];

courses.push("IT");

courses.pop();

console.log(courses);


const bgButton = document.getElementById("bgBtn");


bgButton.addEventListener("click", function() {
  document.body.style.backgroundColor = "lightblue";
});

