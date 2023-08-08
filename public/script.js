//top button 
var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
//notifyMe
function notifyMe() {
    if (!("Notification" in window)) {
        console.log("This browser does not support desktop notification");
    }
    else if (Notification.permission === "granted") {
        var notification = new Notification("Hi there!");
    }
    else if (Notification.permission !== 'denied' || Notification.permission === "default") {
        Notification.requestPermission(function (permission) {
        if (permission === "granted") {
            var notification = new Notification("Hi there!");
        }
        });
    }
}
notifyMe()
//googleTranslateElementInit
function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}