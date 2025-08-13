let container = document.querySelector('.container')
let preLoadere = document.querySelector('.preLoader')
let headerImg = document.getElementById('header_img')
let Main = document.querySelector('.main')
let skill_language__box = document.querySelectorAll(".skill_language__box")

// Main.style.backgroundColor='#fff'
// console.log(Main)
// --------
container.style.display = 'none'

function preLoader(){

    container.style.display = 'inline'
    preLoadere.style.display = 'none'

    
}
window.addEventListener('load',preLoader)

let night= false;
function nigth_or_sunny(){    
    night = !night;
    let trues = night ? 'img/night-svgrepo-com.svg':'img/sunny-svgrepo-com.svg';
    
    let color = night ?  Main.style.background='linear-gradient(0deg,#3b2361,#0f0716)': Main.style.background= 'linear-gradient(127deg,#b993d6 , #8ca6db)';
    
// #b993d6
// → 
// #8ca6db
    let color_skill_box = night ?  skill_language__box.forEach(function (items) {
        items.style.backgroundColor='#3b2361' 
    }):skill_language__box.forEach(function (items) {
        items.style.backgroundColor = 'inherit';
        items.style.opacity = '0.5';
        // rgba(253, 208, 134)
    });
        
    // }}.style.backgroundColor='#3b2361': skill_language__box.style.backgroundColor= ' #eccc99';
    headerImg.setAttribute('src',trues)
    [
        "#fada61",
        "#ff9188",
        "#ff5acd"
      ]
}


headerImg.addEventListener('click',nigth_or_sunny)
