/*
document.getElementById("cv_show").addEventListener("click", function() {
    const cv = document.getElementById("my-cv");
    cv.style.display = (cv.style.display === "none" || cv.style.display === "") ? "block" : "none";
});

var bt_stat = 0;
document.getElementById('cv_show').onclick = function()
{
    if(bt_stat == 0)
    {
        document.getElementById('my-cv').style = "display: block";
        document.getElementById('cv_show').innerHTML = "Click Again to Hide";
        bt_stat = 1;
    }
    else
    {
        document.getElementById('my-cv').style = "display: none";
        document.getElementById('cv_show').innerHTML = "Click Here to View";
        bt_stat = 0;
    }
};*/

var bt_stat = 0;
document.getElementById("cv_show").addEventListener("click", function() {
    const cv = document.getElementById("cv-container");
    cv.style.display = (cv.style.display === "none" || cv.style.display === "") 
        ? "block" 
        : "none";
    
    if(bt_stat == 0)
    {
        //document.getElementById('my-cv').style = "display: block";
        document.getElementById('cv_show').innerHTML = "Click Again to Hide";
        bt_stat = 1;
    }
    else
    {
        //document.getElementById('my-cv').style = "display: none";
        document.getElementById('cv_show').innerHTML = "Click Here to View";
        bt_stat = 0;
    }
});
const toggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
