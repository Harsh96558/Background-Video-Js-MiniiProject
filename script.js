const Video=document.querySelector('.video')
const Btn=document.querySelector('.button')
const fa=document.querySelector('.fa-play')
const Preloader=document.querySelector('.preloader')

Btn.addEventListener('click',()=>{
    if(fa.classList.contains('fa-play')){
        fa.classList.remove('fa-play')
        fa.classList.add('fa-pause')
        Video.play()
    }else{
        fa.classList.add('fa-play')
        fa.classList.remove('fa-pause')
        Video.pause()

    }
})



window.addEventListener('load',()=>{
    Preloader.style.zIndex='-2';
})

