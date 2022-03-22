const getName=prompt(`Adınızı yazınız:`)
document.querySelector("#myName").textContent=getName

function showTime() {
    let time=new Date()
    let currentTime=`${time.getFullYear()}-${time.getMonth()}-${time.getDate()}     ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
    document.querySelector("#myClock").textContent=currentTime;
setTimeout(showTime, 1000); 
}
showTime();