/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Tiago Baker
 * Created on: Oct 2025
 * This program lights up neopixels
*/

// variables
let lightLevel: number = 0
let neopixelStrip: neopixel.Strip = null

    // = lightLevel to the input lightLevel
    lightLevel = input.lightLevel()
    
// clear neopixels
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.showIcon(IconNames.Happy)

   

    // lightLevel <= 51
    if (lightLevel <= 51) {
        // 0 neopixels on
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.show()
        basic.showIcon(IconNames.Happy)
    }

    // lightLevel > 52
    if (lightLevel > 52) {
        // 1 neopixels on
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.show()
        basic.showIcon(IconNames.Happy)

    }
    
    // lightLevel > 104
    if (lightLevel > 104) {
        // 2 neopixels on
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.show()
        basic.showIcon(IconNames.Happy)

    }

    // lightLevel > 156
    if (lightLevel > 156) {
        // 3 neopixels on
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.show()
        basic.showIcon(IconNames.Happy)

    }
    
    // lightLevel > 208
    if (lightLevel > 208) {
        // 4 neopixels on
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.show()
        basic.showIcon(IconNames.Happy)

    }

// Create a NeoPixel strip on pin P16 with 4 pixels
let neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)

while (true) {
    // Get current light level
    let lightLevel = input.lightLevel()

    // Turn all pixels off first
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))

    // Light up pixels according to light level
    if (lightLevel > 52) {
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    }
    if (lightLevel > 104) {
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    }
    if (lightLevel > 156) {
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    }
    if (lightLevel > 208) {
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    }

    // Show the pixels
    neopixelStrip.show()

    // wait 200 ms
    basic.pause(200)
}