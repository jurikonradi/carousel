# Carousel component

## Requirements:

- Must work for mobile and desktop devices
- Must support swipes
- Must work for any HTML content
- Must be animated, finger-following swipes, you can use a multi-picture post in Instagram as a reference.

## Advantages:

- Supports multiple slides on the screen
- Supports infinite option
- Supports scrolling to a selected slide (like go to slide X)
- Any optimizations related to performance are welcome and appreciated!

## Also:

- Using any runtime libraries is prohibited except for the react core itself and CSS-in-JS approach allowers.
- Using environment setup automatizers (like create-react-app) is prohibited.
- Submitting any code that is not written by you

# How it works

## Settings

2 settings files are located in `/settings` folder:

- `settings.sass`
- `settings.js`

They control:

- width _and_
- height of the carousel on Desktop
- moveDuration - movement's duration from one element to another on Desktop (in seconds),
- time of longSwipe (if you swipe element on Mobile or Tablet just a little bit during time that is shorter than longSwipe, it will swipe to the next element) (in milliseconds) (1s = 1000ms)

## HTML Elements

- each HTML element must have its own .sass file. Names of styles must be unique in each .sass file (for whole App).

- For example: `ElementHtml01.js` component is styled in `ElementHtml01.sass` file and has **.element-html-01-container'**. class. So in another `ElementHtml02.sass` file (for `ElementHtml02.js` component) similar class must have another name, for example **.element-html-02-container**.
- avoid using 'body', 'h1' - 'h5', 'button' styling tags, as they will overwrite your app's styles. Instead use **'className='body-html-element-01'** and **'.body-html-element-01'**.
