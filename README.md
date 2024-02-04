
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

## Q & A

#### Q1: We use JWTs a lot throughout our API. For instance, when a user logs in on our API, a JWT is issued and our web application uses this token for every authentication request. Here's an example of such a token: Why is it (or isn't it) safe to use this? (hint: the token is one string, the pdf might break it into multiple lines)
<b>Why JWTs are safe:</b>

- <b>Cryptographic Signing:</b> JWTs are usually signed by a secret key and transmitted to the server for authentication. This token is then verified at the server using the secret key. This leads to a secure authentication/authorization mechanism as all the requests sent to the server are signed by a secret key and any attempt to modify the token would result in an invalid signature<br/>
<b>example:</b><br/>
// signing the token with a secret key <br/>
 const token = jwt.sign(payload, secretKey); <br/>
// Verifying the JWT using the secret key <br/>
 const decoded = jwt.verify(token, secretKey); <br/>
- <b>Statelessness:</b> All the tokens sent to the server are not stored in the server and are stored on the client side ex, local storage. This reduces the risk of compromising sensitive data in the token in case any severe side vulnerability arises.
- <b>Built-in Expiration</b>: We can set the expiration time of the JWT token in its payload, meaning after the mentioned expiry time the token would become invalid. Even if the token is leaked or compromised, it would be valid for a certain period. Hence the security risk is reduced.

<b>Why JWTs are not safe:</b>

- <b>No Token Revocation Mechanism:</b> JWTs lack a built-in mechanism if a case of thread token revocation is required. The token will continue to work until it expires, and the server has no easy way to revoke it. Suppose you want to block any user from the system for whatever reason but they will continue to have access to the server until the token expires.
 
- <b>Statelessness:</b> The server doesn't track the JWTs once issued. If in any case a threat or security vulnerability arises, there is no built-in mechanism to track or revoke the token. Payload data inside the token can remain vulnerable until the token expires.

- <b>Exposed Payload:</b> Payload data is easily readable as it can be decoded using base64-decoding. If sensitive data is mapped to a payload, it becomes exposed to anyone who has access to the token.


#### Q2: In our web application, messages sent from one user to another, can contain HTML, which poses some security risks. Describe two attack vectors bad actors might try to abuse. And how would you mitigate these vectors?
There are two vectors which pose some security risks associated with sending messages that contain HTML:

<b>1. Cross-Site Scripting (XSS):</b> In this a hacker can introduce a malicious script to the HTML content of the page. Whenever victims try to access this malicious message, the script will execute in their browser carry out actions defined in the script, and access any of the victim's data leading to theft of sensitive information or other malicious activities.

- <b>Mitigation</b><br>

    1.<b> Input Validation:</b> Validate input as strictly as possible at the point when it is first received from a user. Make sure only secure and correctly structured data passes through input fields. We can use various libraries and regex for this purpose
    
    2.<b> Output Encoding:</b> Usually special characters in HTML such as <,>, ", ' are used in HTML as opening/closing tags, attribute values etc. Hackers can leverage these characters to inject malicious code ex. injecting malicious code inside the href attribute or in between the tags. This could lead to immediate invocation of the script if the special characters are not encoded. <br>
    To mitigate this, special characters can be encoded to their html equivalent like, '<' can be encoded to '&lt'. In this way, these special characters are converted into single plain characters leading to a non-executable script at the victim's browser.
        
<b>2. Cross-Site Request Forgery (CSRF):</b> This attack is usually performed by making harmful requests to the target website on behalf of the victim where the user is authenticated. This is usually done by sending malicious links, phishing emails or clicking on a malicious executable link embedded in a website.<br>
Mostly attackers make use of the victim's session cookie to send out malicious requests to targeted websites. In this way, all the requests sent by the attacker are treated as requests sent by the victim. This provides hackers with all the user's rights and they can perform every action disguised as a user.


- <b>Mitigation</b> <br>

    1. <b>CSRF Tokens:</b> This server generates a unique token, which is a CSRF token and securely shares it with the browser. The browser then embeds this token into every POST request made to the server. The server validates the token coming from the browser with the token server provided to the browser during authentication. If the token matches then the request is valid if not the server marks the request as invalid and rejects it.
    
    2. <b>Same-Site Cookies:</b> We can make use of a Same-site attribute in the cookie and set it to 'Strict' or 'Lax' to mitigate CSRF attacks. These attributes are discussed below: <br>
    <b>Same-site set to 'Strict':</b> Cookie is sent to the server only if the request originated from the same site which has originally set the cookie. This ensures prevention in sending a cookie for all cross-site requests.<br>
    <b>Same-site set to 'Lax':</b> Lax is a bit flexible and allows cookies to be sent for some cross-site requests. These requests can be - top-level navigation(user clicking on a link to go to another site) or the request method is GET or HEAD, but not POST.

#### Q3: Explain the difference between mutable and immutable objects.
- What is an example of an immutable object in JavaScript?
- What are the pros and cons of immutability?
- How can you achieve immutability in your code?

- <b>Explain the difference between mutable and immutable objects</b><br>
<b>Mutability:</b> refers to data types that can be accessed and changed after they are created and stored in memory. Any operation done on a mutable object will change the original object. <br>
In Javascript, The Reference data types are mutable, this includes - Functions, Arrays, and Objects.<br>
<b>Immutability:</b> on the other hand, refers to data types that we can not change after creating them but can still access in the memory. Any operation done on a mutable object will create a new copy of the original object without modifying the existing one.<br>
In Javascript, The Primitive data types are immutable, this includes - string, number, bigint, boolean, undefined, symbol, null.<br>

- <b>What is an example of an immutable object in JavaScript?</b><br>
The Primitive data types are examples of an immutable object in JavaScript, this includes - string, number, bigint, boolean, undefined, symbol, null. Primitives such as number, string etc are stored in the stack memory. When we assign a new value to the primitive data type, a new value is created and stored in a different location in the stack as compared to the original value and its associated address.<br>
<b>Example of immutable objects</b><br>
let str = 'Kanishk';<br>
str = str + 'Badola' // creates new string and str is not modified<br>
let num = 10;<br>
num = num + 2 // creates new number and num is not modified<br>
- <b>What are the pros and cons of immutability?</b><br>
<b>Pros:</b>
    1. <b>Predictability:</b> Immutability ensures predictable state of data. We can rely that we will always get a previous version of our data. This also wears out any unpredictable side effects and makes the code more predictable and easy to understand.
    2. <b>Asynchronous Operations:</b> Immutable data structures are very beneficial in preventing modifications of shared data in case of asynchronous operations. When immutable data is shared across different operations, all operations can work with their own copy of data without modifying the original state as the original state shared is immutable.
    3. <b>Pure functions:</b> Immutability is the core concept for creating pure functions as the new values to the state are provided without modifying the external state. This also eliminates any side effects caused by a function.
    4. <b>Memoization:</b> Memoization is defined as the caching of the result of the previous state or response and using it for the next computation. This can be quite beneficial if you have for ex. an expensive calculation which you want to cache as its state never changes and it's verbose to perform the same calculation which yields the same result. Using an immutable data structure for this use case is best as the result it won't change in any recursive function call.

    <b>Cons:</b>
    1. <b>Performance:</b>Creating new instances of objects or arrays every time for certain actions can cause performance drawbacks. This can also lead to extra memory usage as new instances are created rather than using the existing ones.
    1. <b>Deep Nesting:</b>Deeply nested objects are very complex to work with immutability patterns as updating deeply nested data requires new copies of data which can be complex at times.
    
- <b>How can you achieve immutability in your own code</b><br>
    1. <b>Spread operator</b>: We can use the spread operator to make a copy of an existing array or object and update the copy of the original array or object without changing the original one.<br>
    const obj = {title: 'data'};<br>
    const updatedObj = {...obj, title: 'type'}; // updated obj's title with the help of the spread operator and returned a copy of obj.<br>
const arr = [1, 2, 3];<br>
    const updatedArr = {...arr, 4}; //added 4 to arr and returned a copy of arr.
    2. <b>Object.assign</b>: Object.assign creates a shallow copy of an object<br>
    const obj = {title: 'data'};<br>
    const updatedObj = Object.assign({}, originalObject, {title: 'type'}); // updated obj's title with the help of Object.assign and returned a copy of obj
    3. <b>Map, Filter, Concat for Array</b>: Creates a new copy of the array based on the test condition and functionalities
    const arr = [1, 2, 3];<br>
    // Created copy of arr and added 4 to it<br>
    const newArray = arr.concat(4);<br>
    // Created copy of arr and twice its digits<br>
    const newArray = arr.map((num) => num * 2);<br>
    // Created copy of arr with odd numbers<br>
    const newArray = arr.filter((num) => num % 2);
    4. <b>Object.freeze</b>: Object.freeze does not allow new properties to be added to the object and prevents removing or altering the existing properties<br>
    const obj = {title: 'data'};<br>
    const freezedObj = Object.freeze(obj);<br>

#### Q4: If you would have to speed up the loading of a web application, how would you do that? (no need to do it, just describe the steps you would take)

1. <b>Optimize Images</b>: We can compress the images to reduce the size of the image. The size of the image is directly proportional to data transferred over the network which can cause performance overhead. Also, we can lazily load the images which are not visible on the user's screen for now.
2. <b>Bundling and Minfication</b>: Angular CLI can bundle and minify external JS and CSS files. <br>
In bundling, all the external JS and CSS files are bundled or combined in one JS and CSS file respectively. This improves performance as instead of the browser making separate requests for each js/css file to the network, it only needs to make one request for the bundled file.
In minification, unnecessary characters, whitespace, and comments are removed from the file, resulting in a smaller file size. This eventually leads to faster downloads.
In Angular.json, the external js files can be found in the script: [] and external CSS files in styles: []
3. <b>Caching</b>: Setting up caching for static content can drastically improve performance as the browsers can store them for faster access.
4. <b>Async Loading</b>: Asynchronous loading allows resources to be loaded simultaneously without waiting for each one to complete before moving to the next.<br>
For scripts and stylesheets, use the async attribute in the HTML tag to load them asynchronously.<br>
The defer attribute can be used to defer the execution of scripts until the HTML document has been fully parsed.
5. <b>Lazy loading</b>: Lazy loading modules improve the initial load time of the application by only loading the necessary components when they are needed.
5. <b>Change detection strategy</b>: By using the OnPush change detection strategy, Angular will only check for changes when the input changes, rather than every time there is a change in the application.