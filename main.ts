/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Tiago Baker
 * Created on: Oct 2025
 * This program lights up neopixels
*/

let lightLevel: number = 0
let strip = neopixel.create(DigitalPin.P0, 4, NeoPixelMode.RGB)

basic.forever(function () {
    strip.clear()
    lightLevel = input.lightLevel()
    

    if (lightLevel <= 51) {
        strip = neopixel.create(DigitalPin.P0, 0, NeoPixelMode.RGB)
        strip.setBrightness(255)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        strip.show()
    }

    if (lightLevel > 52) {
        strip = neopixel.create(DigitalPin.P0, 1, NeoPixelMode.RGB)
        strip.setBrightness(255)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        strip.show()

    }

    if (lightLevel > 104) {
        strip = neopixel.create(DigitalPin.P0, 2, NeoPixelMode.RGB)
        strip.setBrightness(255)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        strip.show()

    }

    if (lightLevel > 156) {
        strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
        strip.setBrightness(255)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        strip.show()

    }

    if (lightLevel > 208) {
        strip = neopixel.create(DigitalPin.P0, 4, NeoPixelMode.RGB)
        strip.setBrightness(255)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        strip.show()

    }
})
