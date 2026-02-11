const music=document.getElementById("bgMusic");
const musicBtn=document.getElementById("musicBtn");
const slideshow=document.getElementById("slideshow");
const proposal=document.getElementById("proposal");
const slideImage=document.getElementById("slideImage");
const caption=document.getElementById("caption");
const yesBtn=document.getElementById("yesBtn");
const noBtn=document.getElementById("noBtn");
const heartbeat=document.getElementById("heartbeat");

musicBtn.onclick=()=>{
  music.play();
};

/* 7 Photos */
const photos=[
  {src:"images/1.jpg",text:"Our beautiful beginning 💕"},
  {src:"images/2.jpg",text:"Moments I cherish 🥰"},
  {src:"images/3.jpg",text:"Your smile melts me 😍"},
  {src:"images/4.jpg",text:"Every second matters 💖"},
  {src:"images/5.jpg",text:"Forever feels right 💍"},
  {src:"images/6.jpg",text:"My favorite person 🌎"},
  {src:"images/7.jpg",text:"This is just the start ✨"}
];

let index=0;

function showSlides(){
  if(index>=photos.length){
    slideshow.classList.remove("active");
    proposal.classList.add("active");
    return;
  }

  slideImage.src=photos[index].src;
  caption.textContent=photos[index].text;
  index++;
  setTimeout(showSlides,2500);
}

showSlides();

/* Smart No Button */
let moves=0;
function moveNo(){
  moves++;
  heartbeat.play();

  const container=document.querySelector(".proposal-buttons");
  const maxX=container.offsetWidth-noBtn.offsetWidth;
  const maxY=container.offsetHeight-noBtn.offsetHeight;

  noBtn.style.left=Math.random()*maxX+"px";
  noBtn.style.top=Math.random()*maxY+"px";

  if(moves===1) noBtn.textContent="Are you sure? 🥺";
  else if(moves===2) noBtn.textContent="Think again 😏";
  else if(moves===3) noBtn.textContent="You can't escape love 💕";
  else if(moves>4) noBtn.style.display="none";

  yesBtn.style.transform=`scale(${1+moves*0.05})`;
}

noBtn.addEventListener("mouseover",moveNo);
noBtn.addEventListener("click",moveNo);

/* Confetti */
yesBtn.onclick=()=>{
  const canvas=document.getElementById("confetti");
  const ctx=canvas.getContext("2d");
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;

  let particles=[];
  for(let i=0;i<200;i++){
    particles.push({
      x:canvas.width/2,
      y:canvas.height/2,
      angle:Math.random()*2*Math.PI,
      speed:Math.random()*6+2
    });
  }

  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p=>{
      p.x+=Math.cos(p.angle)*p.speed;
      p.y+=Math.sin(p.angle)*p.speed;
      ctx.fillStyle="gold";
      ctx.beginPath();
      ctx.arc(p.x,p.y,3,0,Math.PI*2);
      ctx.fill();
    });
  }

  setInterval(draw,30);
};
