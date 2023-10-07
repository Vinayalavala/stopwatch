const label=document.getElementById("date")

Update()
setInterval(Update,1000)

function Update(){
    let date=new Date()

    label.innerHTML=Time(date)
    function Time(date){
    let hours= date.getHours()
    let mins=date.getMinutes()
    let seconds=date.getSeconds()

    let amorpm=hours>12?"pm":"am"

    
    hours=zeroes(hours);
    mins=zeroes(mins)
    seconds=zeroes(seconds)


    return `${hours}:${mins}:${seconds} ${amorpm}`
    }
    function zeroes(time){
        time=time.toString();
        return time.length<2 ? "0"+time:time;
    }
}