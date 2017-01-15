#include "SPI.h"
#include "Adafruit_GFX.h"
#include "Adafruit_ILI9341.h"

#include <aREST.h>
#include <avr/wdt.h>

// For the Adafruit shield, these are the default.
#define TFT_DC 9
#define TFT_CS 10

#define ROTATELEFT 3   // -90 grados

#define DIGITAL 8
#define PWM 6

// Use hardware SPI (on Uno, #13, #12, #11) and the above for CS/DC
Adafruit_ILI9341 tft = Adafruit_ILI9341(TFT_CS, TFT_DC);
// If using the breakout, change pins as desired
//Adafruit_ILI9341 tft = Adafruit_ILI9341(TFT_CS, TFT_DC, TFT_MOSI, TFT_CLK, TFT_RST, TFT_MISO);

// Create aREST instance
aREST rest = aREST();

void setup() {
  pinMode(PWM, OUTPUT);
  analogWrite(PWM, 0);
  pinMode(DIGITAL, OUTPUT);
  digitalWrite(DIGITAL, LOW);
  delay(500);
  // Start Serial
  Serial.begin(9600);
  delay(500);
  tft.begin();
  delay(1000);
  tft.setRotation(ROTATELEFT);
  tft.fillScreen(ILI9341_BLACK);
  tft.setTextColor(ILI9341_WHITE);
  tft.setCursor(0, 0);
  tft.setTextSize(3);
  // Function to be exposed
  rest.function("tft",tftControl);

  // Give name and ID to device (ID should be 6 characters long)
  rest.set_id("2");
  rest.set_name("serial");
}

void loop() {
 // Handle REST calls
  rest.handle(Serial);
  wdt_reset();
}

// Custom function accessible by the API
int tftControl(String command) {
  tft.fillScreen(ILI9341_BLACK);
  tft.setCursor(0, 0);
  tft.println(command);
  return 1;
}
