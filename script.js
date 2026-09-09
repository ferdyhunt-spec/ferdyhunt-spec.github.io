document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",()=>{}));
const radar=document.querySelector(".radar-disk");
document.addEventListener("mousemove",e=>{if(!radar)return;const r=radar.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;radar.style.transform=`perspective(500px) rotateX(${y*-2}deg) rotateY(${x*2}deg)`});
window.addEventListener("mouseleave",()=>{if(radar)radar.style.transform=""});
