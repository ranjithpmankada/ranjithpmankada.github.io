var a = ['Web developer','speed','html','css'];
var i= 0;
setInterval(function() {
    document.getElementById('f').innerHTML = a[i];
},1000);
