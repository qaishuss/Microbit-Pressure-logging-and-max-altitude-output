datalogger.onLogFull(function () {
    Stop = false
    basic.showIcon(IconNames.Square)
})
input.onButtonPressed(Button.A, function () {
    Starting_pressure = BMP280.pressure()
    Stop = !(Stop)
    if (true) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    Max = Starting_pressure
    basic.showString("MAX HEIGHT = ")
    for (let value of list) {
        if (value < Max) {
            Max = value
        }
    }
    Difference = Starting_pressure - Max
    Max_alt = Difference / 13.958
    basic.showNumber(Max_alt)
})
let Max_alt = 0
let Difference = 0
let Max = 0
let Starting_pressure = 0
let list: number[] = []
let Stop = false
Stop = false
let value = 0
list = []
loops.everyInterval(100, function () {
    if (Stop) {
        datalogger.logData([datalogger.createCV("Pressure", BMP280.pressure())])
        list.push(BMP280.pressure())
    }
})
