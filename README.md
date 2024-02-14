
# Todos App
## Description

This repository contains an Angular application that uses JSON placeholder API to fetch 100 posts and render them in a separate component in the shape of a square. The view has 10 rows x 10 columns on larger screens by default. Grid layout is changed concerning the screen size to handle responsiveness and provide a better user experience.

### This app showcases the following behaviours:

- Initially, the view renders the title of all the posts. Subsequent clicks on the card/post dynamically transition the displayed content, cycling through userid, id, completed status, and returning to the title 
- Clicking on the other card/post replaces the title for it too and updates the previous card/post to its default state.
- On top of the page the id of the current active post is shown.

## Getting Started

### Prerequisites:

- NPM
  ```sh
  npm install npm@latest -g
  ```

- Angular CLI
  ```sh
  npm install -g @angular/cli
  ```
### Installation:

1. Clone the repo:
   ```sh
   git clone https://github.com/kanishkbadola12/angular-ngrx.git
   ```
2. Install NPM packages:
   ```sh
   npm install
   ```
### Start the app:

1. Run the app with:
    ```sh
   ng serve
   ```
2. Open your browser and navigate to http://localhost:4200/.

## Built With

- Angular 17
- Typescript
- NgRx
- RxJs
- HTML
- CSS

## Motivation And Project Structure

### Modules

- The application features a modular architecture, specifically within the src/app/modules directory. Each module encompasses shareable components, associated models, and types. One notable module is the <b>Post module</b>.

#### Post Module and its components:

- <b>Post Grid Component:</b> This component serves as a container and provides a versatile gateway for data management. It handles user actions, dispatches relevant events, and ensures seamless communication with its child component - the post-card component.

- <b>Post Card Component:</b> The post-card component acts as a presenter within the grid. Initially, it renders the title of the post. Subsequent clicks on the card dynamically transition the displayed content, cycling through userid, id, completed status, and returning to the title


### Components

- Additionally, the application includes a set of core components located in the src/app/components directory. These components, such as the header and footer, play a crucial role in rendering consistent and essential information across the entire application.

### Services
In the services folder, a specialized post service fetches the initial 100 posts from the JSONPlaceholder API. This service is integrated with the application's state management using the effects.ts file, where asynchronous operations, including data fetching, are orchestrated.

### Store (NgRx)
The app uses NgRx for state management. Key files in the store folder:

- <b>Actions.ts</b>:
This file has different actions which are triggered based on different user interactions. The main actions are: Get Posts, Set Updated Posts, Update Last Selected Property & Update Selected Post Index

- <b>Reducer.ts</b>:
Defines the basic structure for the application's state.

- <b>Effects.ts</b>:
Manages side effects, such as asynchronous operations like API calls.

- <b>Selector.ts</b>:
Retrieves slices of the state for use in components.

### Models

The models folder hosts the app-wide state interface, defining a structured representation of the overall application state. 

### Assets
The assets folder possesses essential resources, such as images, utilized throughout the application.