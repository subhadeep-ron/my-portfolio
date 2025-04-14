document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your message has been sent!');
});

var bt_stat = 0;
document.getElementById('cv_show').onclick = function()
{
    if(bt_stat == 0)
    {
        document.getElementById('my-cv').style = "display: block";
        document.getElementById('cv_show').innerHTML = "Click Here to Hide The Resume";
        bt_stat = 1;
    }
    else
    {
        document.getElementById('my-cv').style = "display: none";
        document.getElementById('cv_show').innerHTML = "Click Here to view The Resume";
        bt_stat = 0;
    }
};
