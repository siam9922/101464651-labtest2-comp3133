
Explantion: 

This project is an Angular-based web application developed for COMP3133 – Full Stack Development, specifically for Lab Test 2. The goal of the assignment was to create a dynamic web app that uses a REST API to display and manage Harry Potter character data from the HP API.

The application includes the following features:

Character List View: The homepage displays all Harry Potter characters in a responsive card layout. Each card shows the character’s name, house, image, and a button to view more details.

Character Filter: A dropdown menu allows users to filter characters by their Hogwarts house (Gryffindor, Slytherin, Hufflepuff, Ravenclaw). When a house is selected, the application fetches and displays only those characters who belong to that house.

Character Details View: When a user clicks "View Details" on a character card, they are taken to a separate page showing detailed information about that character. This includes their species, actor, ancestry, and wand details such as wood, core, and length. The image and layout are styled using Angular Material for a clean, dark-themed presentation.

The application is built using Angular CLI and utilizes Angular Material components for a polished and modern user interface. API data is fetched through a custom Angular service (hpapi.service.ts) and mapped using a TypeScript interface (character.model.ts) for strong typing and structure.

To ensure full functionality, a fallback image is used in case the character does not have a valid image URL from the API. Additionally, proper error handling and optional chaining are used to maintain UI stability.

The project was deployed on Vercel, providing a live working demo of the application. All code was version controlled using Git and pushed to a GitHub repository. The submission includes a ZIP file of the full source code, screenshots of the character list and detail pages, a live deployment link, and this README file for documentation.

This project demonstrates practical knowledge of Angular fundamentals, routing, component-based architecture, services, observables, API consumption, and deployment of a production-ready web application.