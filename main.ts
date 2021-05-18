input.onGesture(Gesture.Shake, function () {
    steps += 1
})
function CountSteps () {
    if (Time < 86400000) {
        if (steps < 5000) {
            basic.showString("Move!")
        }
    }
    if (Time == 86400000 && steps < 10000) {
        basic.showString("better luck next time!")
    }
    if (Time != 86400000 && (steps > 5000 || steps == 5000)) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.clearScreen()
    }
}
let steps = 0
let Time = 0
Time = 0
steps = 0
for (let index = 0; index < 86400000; index++) {
    basic.pause(1000)
    Time += 1
}
basic.forever(function () {
    CountSteps()
})
