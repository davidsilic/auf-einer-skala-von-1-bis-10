input.onButtonPressed(Button.A, function () {
    Count += 1
    basic.showNumber(Count)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.No)
    Count = 0
})
input.onButtonPressed(Button.B, function () {
    Count += -1
    basic.showNumber(Count)
})
let Count = 0
basic.showNumber(Count)
