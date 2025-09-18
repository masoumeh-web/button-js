let btn = document.querySelector("a")
btn.addEventListener("click",function(event){

    let x = event.clientX - event.target.offsetLeft;
    let y = event.clientY - event.target.offsetTop ;

    let tag = document.createElement("span");
    tag.style.left = x + "px";
    tag.style.top = y + "px";
    tag.style.position = "absolute";


    this.appendChild(tag);

    setTimeout(function(){
        tag.remove();
    },1000);

});