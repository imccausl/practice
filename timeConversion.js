function timeConversion(s) {
    const timeArray = s.split(":");
    const amPm = timeArray[2].substring(timeArray[2].length-2, timeArray[2].length);

    if(amPm.toUpperCase() === 'PM' && timeArray[0] !== '12') {
        timeArray[0] = parseInt(timeArray[0]) + 12;
    }

    if(amPm.toUpperCase() === 'AM' && timeArray[0] === '12') {
        timeArray[0] = '00';
    }

    return timeArray.join(':').replace(/(AM|PM)/g, '');
}

console.log(timeConversion('07:05:40PM'))