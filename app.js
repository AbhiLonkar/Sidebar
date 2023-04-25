var sidebarToggle = document.querySelector(".sidebar-toggle")
var sideBar = document.querySelector(".sidebar")
var closeBtn = document.querySelector(".close-btn")

sidebarToggle.addEventListener("click",function(){
    sideBar.classList.toggle("show-sidebar");
})

closeBtn.addEventListener("click",function(){
    sideBar.classList.remove("show-sidebar")
})