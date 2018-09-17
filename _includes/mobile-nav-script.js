  // setup mobile nav
  $("nav .menu").addClass("hidden-small-screen");
  $("nav .menu-toggle").on("click", function () {
    $("nav .menu").toggleClass("hidden-small-screen");
  });
