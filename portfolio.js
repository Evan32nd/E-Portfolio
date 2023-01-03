let projectsButton = document.getElementById("projects");
let schoolButton = document.getElementById("school");
let aboutButton = document.getElementById("about");
let resumeButton = document.getElementById("resume");

projectsButton.addEventListener("click", function () {
  document.location.href = "./projects.html";
});

schoolButton.addEventListener("click", function () {
  document.location.href = "./school.html";
});

aboutButton.addEventListener("click", function () {
  document.location.href = "./about.html";
});

resumeButton.addEventListener("click", function () {
  document.location.href = "./resume.html";
});
