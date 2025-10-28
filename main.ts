/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Tiago Baker
 * Created on: Oct 2025
 * This program lights up neopixels
*/

let lightLevel: number = 0
let strip = neopixel.create(DigitalPin.P0, 4, NeoPixelMode.RGB)

basic.forever(function () {
    lightLevel = input.lightLevel()
    strip.clear()

    if (lightLevel <= 51) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        strip.show()
    }

    if (lightLevel > 52) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        strip.show()
    }

    if (lightLevel > 104) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        strip.show()
    }

    if (lightLevel > 156) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        strip.show()
    }

    if (lightLevel > 208) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        strip.show()
    }
    basic.pause(1000)
})
