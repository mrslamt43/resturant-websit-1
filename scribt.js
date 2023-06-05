JavaScript:


// Smooth Scrolling
$("nav a").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800
    );
  }
});

// Form Submission
$("form").on("submit", function (e) {
  e.preventDefault();

  const name = $("#name").val();
  const email = $("#email").val();
  const message = $("#message").val();

  window.alert(
    "Thank you for your message! We will get back to you as soon as possible."
  );

  $("form")[0].reset();
});