# Block 28 React Router Workshop

Our goal in the workshop is to build a simple application that navigates between two routes `/blue` and `/red`. Each will render a simple component with the background being that specific color. It will be something like this:

![Example](./imgs/example.png)

We will utilize the components from React Router to build out our functionality. There are no hooks for this workshop.

## Rubric

![Rubric](./imgs/rubric.png)

## Steps to Complete the Project
1. [Intialize Project](#initialize-project)
2. [Router Confiugration](#router-configuration)
3. [Navbar](#navbar)
4. [Finishing Up](#finishing-up)

## Initialize Project 

By now, you should be comfortable spinning up a React application with Vite. As a reminder, run `npm create vite@latest`, follow all prompts to name your project, then select React and JavaScript as well.

If you need, reference the Vite documentation or past workshops.

Follow the instructions in the terminal to navigate into the directory `npm install` and open your project in vscode.

Finally, remove the boilerplate JSX, leaving only an empty react fragment in your App.jsx. We are ready now to start building. Use the `npm run dev` command and open the application in your browser.

1. Replace all of the index.css code with the following CSS:
```css
 *{ font-family: arial, sans-serif;
  margin: 0;
}
body,
body > div {
  height: 100vh;
  width: 100vw;
}
#container {
  height: 100%;
  display: flex;
  flex-direction: column;
}
#container > div {
  display: flex;
}
#navbar {
  padding: 2em;
  justify-content: space-evenly;
}
#main-section {
  flex-grow: 1;
}
#main-section > div {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.red {
  background-color: #b05f6d;
  color: white;
}
.blue {
  background-color: #275db3;
  color: white;
}
```
We will be referencing these CSS styles while we build out our application.

2. Next, in your App.jsx, replace the empty React Fragment with the following code:
```jsx
 <div id="container">
    <h1>Hello React Router!</h1>
    <div id="navbar">{/* navigation here */}</div>
    <div id="main-section">{/* routes here */}</div>
</div>
```

## Router Configuration
1. Install the React Router package with `npm install react-router-dom`

2. Navigate to your `main.jsx` and `import { BrowserRouter } from "react-router-dom"`;

3. You will observe the React Strict mode component surrounds our component. Inside the Strict mode component, wrap your `App.jsx` component with the Browser Router tag. This will give our entire application access to the React Router API.

4. Navigate back to your App.jsx and let us inspect the code. Inside of our parent div, we have three children, A h1, and two other divs with IDs of "navbar" and "main-section". This "main section" is where we will be creating our Routes, and the "navbar" will be where we utilize the <Link> component to navigate between routes. At this point, let us remove our h1 message, as it will no longer be needed.

5. In this `App.jsx` import the Routes and Routes components from React Router `import { Routes, Route } from "react-router-dom"`;

6. Remove the `{ }` from within the "main-container" div and replace it with the Routes component.

7. Next, we need to use the Route component and render two route components. One with the path property set to "/blue", the other "/red".

8. Add an element property to each Route tag and pass a simple h1 tag with a relevant heading for each component.

At this point, we actually already have our basic functionality implemented. In your browser window, add either /blue or /red to the URL bar and hit enter. You should observe our dummy h1 elements rendered when the URL route matches our defined routes.

## Navbar

If we wanted to modularize our code more, we could extract our navbar into a separate component, but for the sake of learning the basics, we will keep things simple and leave it in our `App.jsx`.

1. Add the `Link` component to the 'react-router-dom' import statement object.

2. In the div with the id of "navbar", remove the `{ }` and create two `Link` tags. One should have a to property set to "/blue", and the other to "/red". Add some inner text to each `Link` set to "blue" and "red" respectively.

If you navigate back to your browser, you can observe a bare-bones navbar, with two links. Click on each link and notice both the components that are switching URLs are changing.

We now have some bare-bones routing set up. Let us now replace the dummy h1's passed to our Route components with actual components.

3. In your `src` directory, create a components folder and create two files, `Red.jsx` and `Blue.jsx`

4. In each file create a component which returns a div with the className set to its respective color. Inside of the div, create a h1 displaying the name of the color.

5. Navigate back to your `App.jsx` component and import your Blue and Red components into the file.

6. Now replace the "element" property for each route with the respective color component.

That is it! We have used all of the basic react-router components and made a simple yet smooth application that navigates between multiple components with React Router.

7. Next, notice what happens when you refresh the browser at your / route. You will observe that neither the Red nor the Blue component gets mounted. That is because there is no corresponding <Route> for our / URL. In your components folder, create a new file called `Home.jsx`. This is where we will make a landing page for our application.

8. In this home component, return a parent div element with a h1 saying "home".

9. Navigate back to your `App.jsx` import your `Home` component and create a new <Route> with the path of "/" which renders the Home component.

10. Add another `Link` component to our navbar, which navigates to the "/" route.

11. Lastly, in your `Home` component, add a className of home to the parent div, and in your `index.css` give your `.home` class a background color of your own choice.

## Finishing up

As this workshop was relatively short, try and get some practice and implement the following stretch goals:

1. Break the navbar and main container up into separate components.

2. Create a few more <Routes> with new components.

3. Create a footer that sticks to the bottom of the page and has links to all of your <Routes>.

4. Give your app a general CSS facelift.

If you have finished all of the above, go ahead and run your build script with npm run build, and deploy your build folder to Netlify. You can also choose to deploy your application from a GitHub repository.