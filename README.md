# how to use

1. download all files
2. open index.html in any browser

## change stuff uhm?

open up `index.html` in a code editor (vscode, notepad++ or whatever)

### follow these rules!
The important thing here is 
`<pattern ... />` as it defines the circles
 
 `cx` and `cy` need to be half of the `width` and `height`
 
 `width` and `height` should be same for a circle
 
 `r` can be slightly higher than `cx` and `cy` so the circles overlap slightly
 
 `rotate` is for rotation of the pattern, just leave it as is.
 
 `stroke: #000000` defines the border-color of the circles - in this case black. Can be any color and also just `none`
 
 `fill: #f0f0f0` defines the inner-color of the circles - in this case some kind of dark grey. Can be any color and also be `none`
 
 `stroke-width` defines how thick the border of the circles should be. Can also be `0`.
 
 
 ### animations? 
 
 yes.
 
 in `index.css` it can be changed, altough it doesn't yet start at the left top like the old animation
 
 
change the line `filler 1ms linear forward`, just put any number of miliseconds or seconds (just change to `s` instead of `ms`) in there


the outer line can be activated through uncommenting `dash 5s linear forwards`

thats it. have fun