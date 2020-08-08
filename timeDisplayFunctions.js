export function showTimeInMinutesAndSecondsString(seconds){
    let secs = parseInt(seconds);
    let mins = parseInt(secs/60);
    secs = secs%60;
    return `${parseInt(mins/10)}${mins%10}:${parseInt(secs/10)}${secs%10}`
}