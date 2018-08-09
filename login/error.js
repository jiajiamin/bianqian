window.onload=function () {
    let span=document.getElementsByTagName("span")[0];
    let num=span.innerText;
    let time=setInterval(fn,1000);
    function fn() {
        num--;
        if (num==0){
            clearInterval(time);
            close();
        }
        span.innerText=num;
    }
}