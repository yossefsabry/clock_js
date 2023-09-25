<h2 align="center"> clock js || yossef</h2>

![image](/Web%20capture_25-9-2023_41330_127.0.0.1.jpeg)

This code creates a clock/watch with a dark mode feature and utilizes the browser's local storage to remember the chosen mode. The code is written in HTML, CSS, and JavaScript.

HTML:

- The HTML structure likely includes a `<body>` element containing the clock/watch elements and the mode switch.

CSS:

- The CSS styling in this code may include classes like `.dark-mode` and rules for the clock hands, mode switch button, and other elements.

JavaScript:

1. DOM Element References:

   - The `querySelector` method is used to select various elements from the DOM and assign them to variables:
     - `body`: Represents the `body` element.
     - `hourHand`, `minHand`, `secHand`: Represent clock hand elements with classes `.hours`, `.minutes`, and `.seconds` respectively.
     - `modeSwitch`: Represents the mode switch element with class `.mode-switch`.

2. Dark Mode Initialization:

   - The code checks if the value of `localStorage` with key "mode" is set to "Dark".
   - If it is, it adds the class "dark-mode" to the `body` element and changes the text content of `modeSwitch` to "Light Mode".

3. Dark Mode Toggle:

   - The code adds an event listener for the "click" event on `modeSwitch`.
   - When clicked, it toggles the "dark-mode" class on the `body` element.
   - It checks if the `body` element has the class "dark-mode" and assigns the result to `isDark`.
   - It sets the text content of `modeSwitch` to "Light Mode" if `isDark` is true, and "Dark Mode" otherwise.
   - It updates the value of `localStorage` with key "mode" to "Dark" if `isDark` is true, and "Light" otherwise.

4. Updating Time:

   - The `updataTime` function is defined.
   - It gets the current date and time using `new Date()`.
   - It calculates the degree of rotation for each clock hand based on the current seconds, minutes, and hours.
   - It sets the `transform` style property of `secHand`, `minHand`, and `hourHand` to rotate them to the respective calculated degrees.

5. Calling `updataTime`:
   - `setInterval` is used to call the `updataTime` function every 1000 milliseconds (1 second) to update the clock hands every second.
   - Immediately after defining the interval, `updataTime` is also called once to immediately update the clock.

Overall, this code creates a clock/watch with a dark mode feature that can be toggled by clicking on the mode switch button. The selected mode is saved to the browser's local storage, ensuring that the chosen mode persists even after page refresh.

### Email:

```
yossefsabry66@gmail.coms
```
