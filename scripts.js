

//Start of Clock Script//

//script to load the currrent time into the "clock" id
let currentTime = function(){
    let clock = document.getElementById('clock')
    let dateTime = new Date();
    let hours = dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();
    let meridiem = "AM"
    if (hours >= 12){
        meridiem = "PM";
    }
    if (hours > 12){
        hours = hours - 12;

    }
    //add leading zeroes to minutes & seconds
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');
    let timeString = hours + ":" + minutes + ":" + seconds + " " + meridiem;
    clock.innerText = timeString;
}

//section to run currentTime every second.
let updateInterval = 1000; //one second (1000 milliseconds)
setInterval(currentTime,updateInterval);

//End of Clock Script//

//Start of Tip Calculator//
let calculateTip = function(){
    let tip  = document.getElementById('tip');
    let billSubtotal = document.getElementById('billSubtotal').value;
    let tipPercent = document.getElementById('tipPercent').value;
    let peopleCount = document.getElementById('peopleCount').value;
    let tipAmount = (billSubtotal*tipPercent)/peopleCount
    console.log(tipAmount)
    //tipAmount = Math.round(tipAmount);
    tip.innerText = tipAmount;

}
//click to call function
document.getElementById("calculate").onclick = function() {
    calculateTip();
}
