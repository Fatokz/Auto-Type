let type = document.getElementById("span");
let text = "Developer"
let num = 1
console.log(num);

setInterval(() =>{
    let print = text.substring(0, num)
    type.innerHTML = print
    console.log(print);
    if (num < text.length) {
        num += 1
        console.log(num);
    }else if(num == text.length){
        num += -1
        console.log(num);
    }
    else{
        num = 1
    }
}, 500)

