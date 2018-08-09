window.onload=function () {
    let username=document.getElementById("username");
    let password=document.getElementById("password");
    let button=document.getElementsByTagName("button")[0];
     button.onclick=function () {
         if (username.value=="zs" && password.value=="123456"){
             alert("登录成功");
             username.value="";
             password.value="";
         }
         else {
             open("error.html");
         }
     }
     button.onmouseenter=function () {
         button.style.background="-webkit-linear-gradient(left,blue,aqua)";
     }
    button.onmouseleave=function () {
        button.style.background="";
    }

}