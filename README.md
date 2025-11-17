# Little Lemon

Little Lemon is a family-owned Mediterranean restaurant in Chicago, offering traditional recipes with a modern twist. This project is a responsive web application built with **React**, designed to showcase the restaurant, allow online ordering, reservations, and more.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [License](#license)

## Features

- Home page with introduction and featured dishes
- About page describing the restaurant
- Menu page listing available dishes
- Reservations page with a booking form connected to an API
- Order Online page with a cart system
- Checkout page for finalizing orders
- Contact page with a contact form
- Login page
- Responsive design for mobile and desktop
- Form validation using **Formik** and **Yup**
- ARIA attributes for accessibility
- Unit tests using **Jest** and **React Testing Library**

## Technologies

- React
- React Router DOM
- Formik & Yup
- CSS Grid & Flexbox
- JavaScript (ES6+)
- Jest & React Testing Library

## Installation

1. Clone the repository:

```bash

git clone https://github.com/your-username/little-lemon.git

Navigate to the project folder:
cd little-lemon

Install dependencies:
npm install

## Available Scripts

In the project directory, you can run:

Start the development server:npm start

Run tests:npm test

Build for production:npm run build

## Usage

Navigate through the pages using the header navigation.

Make a reservation via the Reservations page. The available times are fetched from the API.

Add items to your cart on the Order Online page and proceed to Checkout.

Contact the restaurant via the Contact page.
little-lemon/
├─ public/
│  └─ index.html
├─ src/
│  ├─ components/
│  │  ├─ Reservations.js
│  │  ├─ OrderOnline.js
│  │  ├─ Checkout.js
│  │  └─ ...other components
│  ├─ App.js
│  ├─ Main.js
│  └─ index.js
├─ package.json
├─ README.md
└─ ...other config files

## License

This project is open-source and available under the MIT License
.



