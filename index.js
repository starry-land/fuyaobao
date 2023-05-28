let ph;
function init() {
    ph=window.innerHeight;
    $(':root').css('--ph',`${ph}px`);
    if(window.innerWidth<500){
        $('#title').css('--sc',`calc(${window.innerWidth} / 500)`);
    }else{
        $('#title').css('--sc',`1`);
    }
}
init();
document.addEventListener('scroll',()=>{
    let t=$('html').scrollTop();
    if(0<=t && t<200){
        $('#title').css('transform',`translateY(-${t/200*140}px) scale(calc(${(300-t)/300} * var(--sc)))`);
    }else{
        $('#title').css('transform',`translateY(-170px) scale(calc(0.3 * var(--sc)))`);
    }
});
window.onresize=init;
$('html')[0].scroll(0,0);