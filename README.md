# Interactive Personal Portfolio Built with Next-Gen Web Tech

My personal portfolio website, built with React, Vite, TypeScript, and Tailwind CSS, offers a dynamic and responsive platform to explore my skills and experience. Featuring interactive elements, data visualizations, and a mobile-friendly design, it showcases my passion for clean code and modern web development. Through this project, I honed my skills in building performant and accessible user interfaces. I invite you to explore the code on GitHub and consider this website a testament to my ability to deliver innovative solutions.

## Tech Stack used:

React: modern framework for dynamic and engaging user interfaces.
Vite: lightning-fast development server and bundler.
TypeScript: improved type safety and code stability.
Tailwind CSS: build responsive and customizable interfaces.

## Project Structure

## Creating myPortfolio React-ts Application:

There are different ways to create a React application. I have choosen the best 2 ways of creating it:

1️⃣ `Create React App` - CRA is what we've been using everywhere to make our React apps.

```
`npx create-react-app@latest ./client --template typescript`
```

2️⃣ `Vite` - [Vite](https://vitejs.dev/guide/) is a popular alternative to Create React App, with faster build times and more flexibility than create-react-app.

### The Vite way:

<!-- To install Vite globally: -->

1.`npm install -g create-vite`

<!-- To initialise the Vite app with React-ts : -->

2.`npm init vite my-portfolio --template react-ts`

👉This may ask you
`Need to install the following packages: create-vite@5.1.0`, Enter y(Yes)

👉Select your desired framework (`React`) and Variant (`Typescript`) to proceed further.

👉Scaffolding project in the `path` specified

👉 Perform the below steps to start working:
`cd my-portfolio`
`npm install`
`npm run dev`

👉 In your ROOT `package.json` (i.e. the one in the root folder NOT the one in the my-portfolio folder), edit the existing "start-client" script to:
`"start-client": "cd my-portfolio && npm run dev",`

👉 Navigate to localhost: http://localhost:5173/

💡 Optionally, you can now change the `my-portfolio/package.json` to open your browser automatically when you start the app, by changing the `dev` script like this:

`"dev": "vite --open"`

👉 Use `npm` to install react-router version 6 and the associated TypeScript @types package (instructions below):
Make sure you install below in "my-portfolio" by `cd my-portfolio`
`npm install react-router-dom @types/react-router-dom`

## TDD - myPortfolio:

👉 Make sure your project has the necessary TypeScript type definitions installed for writing your test-suites
`npm install --save-dev @types/jest @types/testing-library__jest-dom`

💡 `import '@testing-library/jest-dom'; ` in the .test.tsx files for Jest DOM matchers

💡Ensure that the latest versions of TypeScript and the testing-related packages.
`npm update typescript @testing-library/react @testing-library/jest-dom`
