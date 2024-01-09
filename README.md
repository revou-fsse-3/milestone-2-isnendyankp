# About Project

This project learn create Multiple Page with vitereact form typescript and this project also using tailwindcss, formik & yup validation.

## Task

1. Create 3 Pages: Register, Login & Category Page.
- Category have: seet list category, save category, update category, delete category.
2. Make sure all form category have validation.
3. Please use ui library, any form library and yup.


## link project

https://9dyregisterlogincrud.netlify.app/

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

##  Structure src folder

Map folder structure:

    - assets
        - images
            - logo.png
    - components
        - Button Folder
            - Button.tsx
        - Card Folder
            - Card.tsx
        - Input Folder
            - Input.tsx
        - Text Folder
            - Text.tsx
        - index.tsx for export all component distributor
    - containers
        - HomeContainer folder
            - HomeContainer.tsx
        - index.tsx for export all container distributor
    - App.css
    - App.tsx
    - vite-env.d.ts


## Install React Router Dom

npm install react-router-dom localforage match-sorter sort-by