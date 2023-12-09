(function () {
  var forms = document.querySelectorAll(".needs-validation");
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
$("body").on("click", ".password-control", function () {
  if ($("#validatePass").attr("type") == "password") {
    $(this).html("Скрыть пароль");

    $("#validatePass").attr("type", "text");
  } else {
    $(this).html("Показать пароль");

    $("#validatePass").attr("type", "password");
  }

  return false;
});
