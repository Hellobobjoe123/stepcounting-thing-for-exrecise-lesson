let seconds = 0;
input.onGesture(Gesture.Shake, () => {
    while (seconds > 0) {
        basic.showNumber(seconds);
        basic.pause(1000);
        seconds -= 1;
    }
   
})
