function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    console.log(name + "=" + (value || "")  + expires + "; path=/")
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
if(getCookie('theme')==null){
    setCookie('theme', '0', 365)
}
console.log(getCookie('theme'))
if(getCookie('theme')=='1'){
    theme = 'black'
    document.getElementById('themechangebtimg').src = '../Images/sun.png';

    document.getElementById('bottominstaimg').src = '../Images/instaw.png';
    document.getElementById('bottomgitimg').src = '../Images/gitw.png';
    revtheme = 'white'
}
else{
    theme = 'white'
    document.getElementById('themechangebtimg').src = '../Images/moon.png'; 
 
    document.getElementById('bottominstaimg').src = '../Images/instab.png';
    document.getElementById('bottomgitimg').src = '../Images/gitb.png';
    revtheme = 'black'
}
changetheme()
function changetheme(){
    if(theme == 'black'){
        theme = 'white'
        document.getElementById('themechangebtimg').src = '../Images/moon.png'; 
       
        document.getElementById('bottominstaimg').src = '../Images/instaw.png';

        document.getElementById('bottomgitimg').src = '../Images/gitw.png';

        revtheme = 'black'
        setCookie('theme','1',365)
    }
    else{
        theme = 'black'
        document.getElementById('themechangebtimg').src = '../Images/sun.png';
        
        document.getElementById('bottominstaimg').src = '../Images/instab.png';

        document.getElementById('bottomgitimg').src = '../Images/gitb.png';

        revtheme = 'white'
        setCookie('theme','0',365)
    }
    document.getElementById('nav').style.backgroundColor = theme;
    document.getElementsByTagName('body')[0].style.backgroundColor = theme;
    document.getElementById('nav').style.color = revtheme;
    document.getElementById('nav').style.borderColor = revtheme;
    // document.getElementById('signinbt').style.color = revtheme;
    document.getElementById('mygear').style.color=revtheme;
    document.getElementById('contact').style.color=revtheme;
    document.getElementById('home').style.color=revtheme;
    document.getElementById('feedback').style.color=revtheme;
    document.getElementById('about').style.color=revtheme;
    document.getElementById('between2').style.color= revtheme;
    document.getElementById('between2').style.color= revtheme;
    document.getElementById('w1').style.color= revtheme;
    document.getElementById('w2').style.color= revtheme;
    document.getElementById('w3').style.color= revtheme;
    document.getElementById('w4').style.color= revtheme;
    document.getElementById('w5').style.color= revtheme;
    document.getElementById('w6').style.color= revtheme;
    document.getElementById('w7').style.color= revtheme;
    document.getElementById('w8').style.color= revtheme;
    document.getElementById('w9').style.color= revtheme;

    if(theme == 'white'){
        document.getElementById('bottom').style.backgroundColor = 'rgb(228,228,228)';
    }
    else{
        document.getElementById('bottom').style.backgroundColor = 'rgb(32,32,32)';
    }
}
function fs() {
    if (document.fullscreenElement || document.webkitFullscreenElement ||
        document.mozFullScreenElement)
            return false;
    else
            return true;
}
v1 = document.getElementById('v1')
v2 = document.getElementById('v2')
v3 = document.getElementById('v3')
v4 = document.getElementById('v4')
v5 = document.getElementById('v5')
v6 = document.getElementById('v6')
v7 = document.getElementById('v7')
v8 = document.getElementById('v8')
v9 = document.getElementById('v9')
function pauseall(v){
    if(v != v1){
        v1.pause()
    }
    if(v != v2){
        v2.pause()
    }
    if(v != v3){
        v3.pause()
    }
    if(v != v4){
        v4.pause()
    }
    if(v != v5){
        v5.pause()
    }
    if(v != v6){
        v6.pause()
    }
    if(v != v7){
        v7.pause()
    }
    if(v != v8){
        v8.pause()
    }
    if(v != v9){
        v9.pause()
    }

}
v1.addEventListener('click', function () {
    if(fs()){
        if (v1.paused == false) {
            v1.pause();
        } else {
            v1.play();
            pauseall(v1)
        }}
});
v2.addEventListener('click', function () {
    if(fs()){
        if (v2.paused == false) {
            v2.pause();
        } else {
            v2.play();
            pauseall(v2)
        }}
    });
v3.addEventListener('click', function () {
    if(fs()){
        if (v3.paused == false) {
            v3.pause();
        } else {
            v3.play();
            pauseall(v3)
        }}
});
v4.addEventListener('click', function () {
    if(fs()){
        if (v4.paused == false) {
            v4.pause();
        } else {
            v4.play();
            pauseall(v4)
        }}
    });
    v5.addEventListener('click', function () {
        if (v5.paused == false) {
            v5.pause();
    } else {
        v5.play();
            pauseall(v5)
    }
});
v6.addEventListener('click', function () {
    if(fs()){
        if (v6.paused == false) {
            v6.pause();
        } else {
            v6.play();
            pauseall(v6)
        }}
    });
v7.addEventListener('click', function () {
    if(fs()){
        if (v7.paused == false) {
            v7.pause();
        } else {
            v7.play();
            pauseall(v7)
        }}
    });
v8.addEventListener('click', function () {
    if(fs()){
        if (v8.paused == false) {
            v8.pause();
        } else {
            v8.play();
            pauseall(v8)
        }}
    });
    v9.addEventListener('click', function () {
        if(fs()){
        if (v9.paused == false) {
            v9.pause();
        } else {
            v9.play();
            pauseall(v9)
        }}
    });
function w1(){
    var elem = document.getElementById("v1");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
} else if (elem.mozRequestFullScreen) {
  elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
  elem.webkitRequestFullscreen();
} else if (elem.msRequestFullscreen) { 
  elem.msRequestFullscreen();
}
}
function w2(){
    var elem = document.getElementById("v2");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
} else if (elem.mozRequestFullScreen) {
  elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
  elem.webkitRequestFullscreen();
} else if (elem.msRequestFullscreen) { 
  elem.msRequestFullscreen();
}
}
function w3(){
    var elem = document.getElementById("v3");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
} else if (elem.mozRequestFullScreen) {
  elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
  elem.webkitRequestFullscreen();
} else if (elem.msRequestFullscreen) { 
  elem.msRequestFullscreen();
}
}
function w4(){
    var elem = document.getElementById("v4");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
} else if (elem.mozRequestFullScreen) {
  elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
  elem.webkitRequestFullscreen();
} else if (elem.msRequestFullscreen) { 
  elem.msRequestFullscreen();
}
}
function w5(){
    var elem = document.getElementById("v5");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
} else if (elem.mozRequestFullScreen) {
  elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
  elem.webkitRequestFullscreen();
} else if (elem.msRequestFullscreen) { 
  elem.msRequestFullscreen();
}
}
function w6(){
    var elem = document.getElementById("v6");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
} else if (elem.mozRequestFullScreen) {
  elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
  elem.webkitRequestFullscreen();
} else if (elem.msRequestFullscreen) { 
  elem.msRequestFullscreen();
}
}
function w7(){
    var elem = document.getElementById("v7");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
} else if (elem.mozRequestFullScreen) {
  elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
  elem.webkitRequestFullscreen();
} else if (elem.msRequestFullscreen) { 
  elem.msRequestFullscreen();
}
}
function w8(){
    var elem = document.getElementById("v8");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
} else if (elem.mozRequestFullScreen) {
  elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
  elem.webkitRequestFullscreen();
} else if (elem.msRequestFullscreen) { 
  elem.msRequestFullscreen();
}
}
function w9(){
    var elem = document.getElementById("v9");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
} else if (elem.mozRequestFullScreen) {
  elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
  elem.webkitRequestFullscreen();
} else if (elem.msRequestFullscreen) { 
  elem.msRequestFullscreen();
}
}
//ahead of top
function donothing(){}
a = document.getElementById('between3')
a.innerHTML = ''
c = 'Solve Physics Equations'
d=0
e = 0
// alert(c.slice(0,12))
function text(){
    if(d<c.length && e == 0){
        d++
        a.innerHTML = c.slice(0,d)
        let now = Date.now(),
        end = now + 75;
        while (now < end) { now = Date.now(); }
    }
    else if(e == 0){
        e = 1
        let now = Date.now(),
        end = now + 500;
        while (now < end) { now = Date.now(); }
    }
    if(d>0 && e == 1){
        d--
        a.innerHTML = c.slice(0,d)
    }
    else if(e==1){
        e = 2
        c = 'Solve Maths Equations'
    }
    if(d<c.length && e == 2){
        d++
        a.innerHTML = c.slice(0,d)  
        let now = Date.now(),
        end = now + 75;
        while (now < end) { now = Date.now(); } 
    }
    else if(e==2){
        e = 3
        let now = Date.now(),
        end = now + 500;
        while (now < end) { now = Date.now(); }
    }
    if(d>0 && e == 3){
        d--
        a.innerHTML = c.slice(0,d)
    }
    else if(e==3){
        e = 4
        c = 'Play Interesting Games'
    }
    if(d<c.length && e == 4){
        d++
        a.innerHTML = c.slice(0,d)  
        let now = Date.now(),
        end = now + 75;
        while (now < end) { now = Date.now(); } 
    }
    else if(e==4){
        e = 5
        let now = Date.now(),
        end = now + 500;
        while (now < end) { now = Date.now(); }
    }
    if(d>0 && e == 5){
        d--
        a.innerHTML = c.slice(0,d)
    }
    else if(e==5){
        e = 6
        c = 'Check Typing Speed'
    }
    if(d<c.length && e == 6){
        d++
        a.innerHTML = c.slice(0,d)  
        let now = Date.now(),
        end = now + 75;
        while (now < end) { now = Date.now(); } 
    }
    else if(e==6){
        e = 7
        let now = Date.now(),
        end = now + 500;
        while (now < end) { now = Date.now(); }
    }
    if(d>0 && e == 7){
        d--
        a.innerHTML = c.slice(0,d)
    }
    else if(e==7){
        e = 8
        c = 'Enjoy My Edits'
    }
    if(d<c.length && e == 8){
        d++
        a.innerHTML = c.slice(0,d)  
        let now = Date.now(),
        end = now + 75;
        while (now < end) { now = Date.now(); } 
    }
    else if(e==8){
        e = 9
        let now = Date.now(),
        end = now + 500;
        while (now < end) { now = Date.now(); }
    }
    if(d>0 && e == 9){
        d--
        a.innerHTML = c.slice(0,d)
    }
    else if(e==9){
        e = 0
        c = 'Solve Physics Equations'
    }
}
setInterval(text, 25)