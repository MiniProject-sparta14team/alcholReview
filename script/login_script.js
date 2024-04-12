document.addEventListener("DOMContentLoaded", function () {
  const pwShowHideIcon = document.getElementById("pw_show_hide_icon");
  const passwordInput = document.querySelector('input[name="user_pw"]');

  const input_id = document.querySelector('input[type="text"]');
  const input_pw = document.querySelector('input[type="password"]');
  const id_error = document.querySelector(".id_error");
  const pw_error = document.querySelector(".pw_error");
  console.log(input_id, input_pw, id_error, pw_error);

  input_id.addEventListener('click', function (){
    id_error.style.display='block'
  })

  input_pw.addEventListener('click', function (){
    pw_error.style.display='block'
  })

  pwShowHideIcon.addEventListener("click", function () {
    const type =
      passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);

    // 아이콘 클래스를 교체합니다.
    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");
  });
});
