const menu=document.querySelector(".menu"),nav=document.querySelector("nav");
menu?.addEventListener("click",()=>{nav.style.display=nav.style.display==="flex"?"none":"flex";nav.style.position="absolute";nav.style.right="20px";nav.style.top="65px";nav.style.flexDirection="column";nav.style.padding="18px";nav.style.background="#0b0e0b";nav.style.border="1px solid #252a25";nav.style.zIndex="20"});
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",()=>{if(innerWidth<761)nav.style.display="none"}));
