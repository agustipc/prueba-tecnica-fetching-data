# Prueba técnica Juniors and Trainees de React.

APIs:
- Facts Random: https://catfact.ninja/
- Imagen random: https://cataas.com/

Recupera un fact aleatorio de gatos de la primera API y muestra una imagen de un gato con la primera palabra del fact de la primera API usando la segunda API.


### My Approach

- I've created the services folder where must be the API calls.
- Then I've created the custom hooks folder where you can find the reusable logic.
- I've used [playwright](https://playwright.dev/) to make the most important test of the app.

We can create more tests to check the behavior of the app for example if the image and the fact changes when we press the button, but I think that the most important test is the one that checks that the app is showing the image and the fact. And to keep the thechnical test simple I've decided only to do one

To improve the app We can continue adding a loading state and an error handler.

### How to run the app
first of all install the dependencies
```pnpm install```

then run the app
```pnpm run dev```

To run the tests
```pnpm run test```