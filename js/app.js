const navToggle = document.querySelector('.toggle--menu')
const logo = document.querySelector('.company--logo')
const navList = document.querySelector('.nav--list')
const nav = document.querySelector('.nav')
const val1 ='<span class="material-symbols-outlined">close</span>'
const val2 ='<span class="material-symbols-outlined">menu</span>'

let flag = true

navToggle.addEventListener('click',()=>{
    navList.classList.toggle('nav--list--visible')
    nav.classList.toggle('row--flex')
    logo.classList.toggle('invisible--logo')
    if(flag == true) {
        navToggle.innerHTML=val1
        flag=false
    }
    else {
        navToggle.innerHTML= val2
        flag=true
    }
})

