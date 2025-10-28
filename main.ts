/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Tiago Baker
 * Created on: Oct 2025
 * This program lights up neopixels
*/

// variables
let lightLevel: number = 0
let neopixelStrip: neopixel.Strip = null

    lightLevel = input.lightLevel()
    
// cleanup
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.showIcon(IconNames.Happy)

    if (lightLevel <= 51) {
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.show()
        basic.showIcon(IconNames.Happy)
    }

    if (lightLevel > 52) {
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.show()
        basic.showIcon(IconNames.Happy)

    }

    if (lightLevel > 104) {
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.show()
        basic.showIcon(IconNames.Happy)

    }

    if (lightLevel > 156) {
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.White))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.show()
        basic.showIcon(IconNames.Happy)

    }

    if (lightLevel > 208) {
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.White))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.White))
        neopixelStrip.show()
        basic.showIcon(IconNames.Happy)

    }

