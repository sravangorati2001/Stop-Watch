
const start=document.querySelector('#start');
const stop=document.querySelector('#stop');
const reset=document.querySelector('#reset');

const sec=document.querySelector('#seconds');
const min=document.querySelector('#minutes');
const msec=document.querySelector('#m-seconds');
let count=0;
let flag=false;
let key;
function incrementCount(){
 count++;
 let minutes =  Math.floor((count/100)/60);
  let  seconds = Math.floor((count/100) - (minutes*60));
   let milliSeconds = Math.floor(count -(seconds*100) - (minutes*6000));
   sec.innerHTML=appendZero(seconds);
   min.innerHTML=appendZero(minutes);
   msec.innerHTML=appendZero(milliSeconds);
}
 start.addEventListener('click',function(){
     if(!flag){
  key= setInterval(incrementCount,10);
   flag=true;
     }
 });
stop.addEventListener('click',function(){
  clearInterval(key);
});
reset.addEventListener('click',function(){
   count=0;
   minutes=0;
   seconds=0;
   milliSeconds=0;
   sec.innerHTML=appendZero(seconds);
   min.innerHTML=appendZero(minutes);
   msec.innerHTML=appendZero(milliSeconds);
});
 let appendZero=(num)=>{
     if(num<=9) 
     return "0"+num;
     else 
     return num;
 }
