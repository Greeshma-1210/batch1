// let btn = document.getElementById("demo")
// console.log(btn);
// btn.onclick=function(e){
//     console.log(e);

// let res =Math.round(Math.random()*1000)
// console.log(res);
// let res=Math.round(Math.random()*1000).toString(16)
// console.log(res);
// document.body.style.backgroundColor=`#${res}`
// }
//onmouseOver event
// let btn1= document.getElementById("demo1")
// console.log(btn1);
// let color=window.prompt("enter any color")
// console.log(color);
// btn1.innerHTML = color
// btn1.onmouseover=()=>{
//     document.body.style.backgroundColor=`${color}`
//     document.body.style.transitionDuration="3s"
//}
// let video = document.getElementById("demo2")
// console.log(video);
// video.addEventlistener("click", ()=>{
// let res = video.classlist.toggle("demo")
// if(res){
// video.play()}
// else{
// video.pause()
// }
// })
let demo4 = document.getElementById("demo4")
console. l0g (demo4);
demo4. addEventListener("click" ,() => {
let demo3 = document.getElementById("demo3").value
console.log(demo3);
let speech = new SpeechSynthesisUtterance
console.log(speech);
speech.text=demo3;
speechSynthesis.speak(speech)
})
