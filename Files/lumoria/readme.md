## Prerequisites

1. Install Node.js: This program is written in JavaScript and run using Node.js. You can download Node.js from the official website: https://nodejs.org/. The download page has options for different operating systems. Choose the one that matches your system.

2. Install a text editor: You'll need a text editor to write your code. Visual Studio Code is a good option and it's free. You can download it from here: https://code.visualstudio.com/.

## Steps to Create the Program
1. Create a new JavaScript file: Open Visual Studio Code, then go to File > New File (or press Ctrl+N). Save this file as app.js (or any name you prefer, but make sure it ends with .js).

2. Define the planets: At the top of your app.js file, define an array of planet objects. Each object should have a name, distance, and size property. Here's an example:

```javascript
const lumoriaPlanets = [
    { name: "Mercuria", distance: 0.4, size: 4879 },
    { name: "Earthia", distance: 1, size: 12742 },
    { name: "Venusia", distance: 0.7, size: 12104 },
    { name: "Marsia", distance: 1.5, size: 6779 }
];
```

3. Create the getShadowCount function: This function calculates the number of planets that cast a shadow on the current planet. It takes an array of planets and the index of the current planet. It returns the number of planets closer to the sun and larger than the current planet. Here's the function:

```javascipt
function getShadowCount(planets, currentIndex) {
    return planets.slice(0, currentIndex)
        .filter(planet => planet.size > planets[currentIndex].size)
        .length;
}
```

4. Create the getLightIntensity function: This function calculates the light intensity of a planet. It takes the index of the planet and the number of shadows cast on the planet. It returns a string representing the light intensity based on the rules provided. Here's the function:
```javascript
function getLightIntensity(i, shadowCount) {
    if (i === 0) return 'Full';
    if (shadowCount === 1) return 'None';
    if (shadowCount > 1) return 'None (Multiple Shadows)';
    return 'Partial';
}
```

5. Create the calculateLightIntensity function: This function calculates the light intensity for each planet in the provided array. It returns a new array of objects, each containing the name of a planet and its light intensity. Here's the function:
```javascript
function calculateLightIntensity(planets) {
    return planets.map((planet, i) => {
        const shadowCount = getShadowCount(planets, i);
        let lightIntensity = getLightIntensity(i, shadowCount);
        return { name: planet.name, light: lightIntensity };
    });
}
```

6. Sort the planets and calculate the light intensity: At the end of your app.js file, sort the array of planets by their distance from the Lumorian Sun, calculate the light intensity for each planet, and log the results to the console. Here's the code:
```javascript
const sortedPlanets = lumoriaPlanets.sort((a, b) => a.distance - b.distance);
console.log(calculateLightIntensity(sortedPlanets));
```

7. Run the program: Save your app.js file, then open a terminal in Visual Studio Code (Terminal > New Terminal). In the terminal, type node app.js and press Enter. You should see the light intensity for each planet logged to the console.
