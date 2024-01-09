# About Project

This project milestone 2 learn about react, TSX, Components, Hooks, State, Props, Forms, Events, and React Router.

## Task & Requirements

1. TSX and Components:

    a. Organize your application into modular components.
    
    b. Use TSX syntax for rendering UI elements.

2. Hooks, State and Props:

    a. Implement at least two functional components that use props to pass data.

    b. Utilize state to manage dyanmic data within your application.

    c. Integrate hooks like useState and useEffect where appropriate.

3. Forms and Evenets:

    a. Implement a form to capture user input.

    b. Handle form submission events.

    c. Validate and manage form data using React State.

4. React Router:

    a. Utilize React Router for navigation within your application.

    b. Setup multiple routes to different components/pages.


## link project



## Create Project

npm create vite my-project-name --template react-ts

## Change to project directory

cd my-project-name

## install project:

npm install > react > typescript

## run project:

npm run dev

# Tailwind CSS

https://tailwindcss.com/docs/guides/vite

## Install Tailwind CSS dan dependencies

npm install -D tailwindcss postcss autoprefixer

## Inisialisasi konfigurasi Tailwind CSS

npx tailwindcss init -p

## Configure your template paths

Open file `tailwind.config.js` & add plugin Tailwind CSS.

    // Add the paths to all of your template files in your tailwind.config.js file.

    export default {
        content: [
            "./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
        ],
        theme: {
            extend: {},
        },
        plugins: [],
        }

## Add the Tailwind directives to your CSS

Open file `src/styles/index.css` add configure Tailwind CSS.

    /* src/styles/index.css */

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    /* Custom styles go here */

## rerun project:

Run your build process with npm run dev.

# Formik

https://formik.org/docs/overview

## Install Formik

npm install formik --save

## Install Yup

npm i yup

# React Router Dom

https://reactrouter.com/en/6.21.1/start/tutorial

## Install React Router Dom

npm install react-router-dom localforage match-sorter sort-by