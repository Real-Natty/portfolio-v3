const hamburger = document.getElementById("hamburger");
const ulList = document.getElementById("details");

// hamburger.onclick("click", () => {
//   hamburger.classList.toggle("active");
// });

hamburger.onclick = function () {
  if (ulList.style.display === "none") {
    console.log("first burger", "world");

    ulList.style.display = "block";
  } else {
    ulList.style.display = "none";
  }
};
