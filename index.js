document.addEventListener("init", function (event) {
  var page = event.target;
  console.log("page: ", page);

  //   if (page.id === "home") {
  //     page.querySelector("#push-button").onclick = function () {
  //       document
  //         .querySelector("#myNavigator")
  //         .pushPage("instructions.html", { data: { title: "Instructions" } });
  //     };

  //     page.querySelector("#relax").onclick = function () {
  //       document
  //         .querySelector("#myNavigator")
  //         .pushPage("relax.html", { data: { title: "Relax" } });
  //     };

  //     page.querySelector("#discover").onclick = function () {
  //       document
  //         .querySelector("#myNavigator")
  //         .pushPage("discover.html", { data: { title: "Discover" } });
  //     };

  //     page.querySelector("#party").onclick = function () {
  //       document
  //         .querySelector("#myNavigator")
  //         .pushPage("party.html", { data: { title: "Party" } });
  //     };
  //   } else if (page.id === "instructions") {
  //     page.querySelector("ons-toolbar .center").innerHTML = page.data.title;
  //   } else if (page.id === "relax") {
  //     page.querySelector("ons-toolbar .center").innerHTML = page.data.title;
  //   } else if (page.id === "discover") {
  //     page.querySelector("ons-toolbar .center").innerHTML = page.data.title;
  //   } else if (page.id === "party") {
  //     page.querySelector("ons-toolbar .center").innerHTML = page.data.title;
  //   }
});
