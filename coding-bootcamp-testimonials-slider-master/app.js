'use strict';
const cardcontainer=document.querySelectorAll('.container');
const funtionality=document.querySelector('.functional')
const btnone=document.querySelectorAll('.one');
const btntwo=document.querySelectorAll('.two');

let activeCard=0;

function slide(){
cardcontainer.forEach((container) =>container.classList.remove('active'))
cardcontainer[activeCard].classList.add('active');

}
btntwo.forEach(two =>{
   two.addEventListener("click",()=>{
      activeCard++;
if(activeCard>cardcontainer.length-1){
   activeCard=0;
}
slide()
   })
   
})
btnone.forEach(one =>{
   one.addEventListener("click",()=>{
      activeCard--;
if(activeCard<0){
   activeCard=1;
}
slide()
   })
   
})