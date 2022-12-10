input.onButtonPressed(Button.A, function () {
    basic.showString("higashida")
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # # # # #
            # . . . #
            # # # # #
            `)
        basic.showLeds(`
            # # # # #
            . . # . .
            . . # # .
            . . # . #
            . . # . .
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("ryuusei")
    basic.showString("higashida")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("kusaka")
})
