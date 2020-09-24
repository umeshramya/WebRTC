
 const profile = document.getElementById("profile");
 const desscreen = document.getElementById("desscreen")
// display screen
 navigator.mediaDevices.getDisplayMedia()
 .then((stream)=>{desscreen.srcObject = stream})
 .catch(er => console.log(er));
// display profile
navigator.mediaDevices.getUserMedia({video : true, audio : true})
.then((stream)=>{profile.srcObject = stream})
.catch(err => console.log(err))



$( document ).ready(()=>{
    $(".dropdown-trigger").dropdown();

})
