input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    if (input.temperature() >= 8 && input.temperature() <= 30) {
        basic.showIcon(IconNames.Happy)
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.Skull)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
    if (pins.analogReadPin(AnalogPin.P0) >= 200 && pins.analogReadPin(AnalogPin.P0) <= 600) {
        basic.showIcon(IconNames.Duck)
    } else {
        basic.showIcon(IconNames.No)
    }
})
