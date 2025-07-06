let tabOpened = location.pathname
let userAccount = document.querySelector("#user_profile")
let usracntModal = document.querySelector("#useracntModal")
let logout = document.getElementById("logout")
let userProfile = document.querySelectorAll(".userProfile")
let smDvcLogout = document.getElementById("sm-dvc-logout-btn")
let userName = document.querySelectorAll(".user-name")

let user = JSON.parse(localStorage.getItem('currentLoggedUser'))
if(!user){
    window.location.href="../index.html"
}else{
    userProfile.forEach((item) => {
        item.src = `${user.imgUrl}`
    })
    userName.forEach((item) => {
        item.textContent = user.name
    })
}
 

//active tab styling
if(tabOpened.includes("index.html")){
    document.getElementById("nav-home").classList.add("header_option--active")
}else if(tabOpened.includes("friends.html")){
    document.getElementById("nav-friends").classList.add("header_option--active")
}else if(tabOpened.includes("postqueue.html")){
    document.getElementById("nav-post-queue").classList.add("header_option--active")
}else if(tabOpened.includes("games.html")){
    document.getElementById("nav-gaming").classList.add("header_option--active")
}else if(tabOpened.includes("videos.html")){
    document.getElementById("nav-video").classList.add("header_option--active")
}


//onclick userAccount 
userAccount.addEventListener("click", (event) => {
    usracntModal.classList.toggle("toggle-visibility")
})

//logout
smDvcLogout.addEventListener("click",() => {
    localStorage.removeItem("currentLoggedUser")
    location.href = "../index.html"  
})

logout.addEventListener("click", () => {
    localStorage.removeItem("currentLoggedUser")
    location.href = "../index.html"  
})