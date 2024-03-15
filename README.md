## 1. Running Proccess

### 1.1 Accessing the Application:

1. Open your web browser and navigate to `http://localhost:3000`.
2. You will be directed to the Ourverse platform's registration form.

### 1.2 Registration:

1. Fill in the registration form with your email and password.
2. Make sure to agree to the terms and conditions before proceeding.
3. Upon successful registration, you will be automatically redirected to the login page.

### 1.3 Login:

1. If you are not automatically redirected, you can manually navigate to the login page.
2. Enter your registered email and password to log in.
3. If the credentials are correct, you will be directed to the `/listuser` page.

### 1.4 Error Handling:

1. If there are any issues during registration or login, error messages will be displayed to guide you.
2. Follow the instructions in the error messages to resolve any issues.

### 1.5 Application Usage:

1. Once logged in, you can explore the list of user profiles on the `/listuser` page.
2. Click on individual user profiles to view detailed information using the Detail User feature.
3. Manage user profiles by deleting them if necessary.


## 2. Library

The following libraries are used in this React application:

- **React**: A JavaScript library for building user interfaces.
- **react-router-dom**: Provides DOM bindings for React Router, enabling routing in the React application.
- **axios**: A promise-based HTTP client for the browser and Node.js, used for making HTTP requests.
- **AOS**: A library to animate elements as they scroll into view.
- **Bootstrap**: A front-end framework for developing responsive and mobile-first websites.
- **Layout**: Presumably a custom component for defining the layout structure of the page.

## 3. Information About Application

The Ourverse platform's registration form, built with React, lets users sign up and log in easily. When users visit the platform, they'll find a registration form where they can enter their email and password. Before signing up, they need to agree to the terms and conditions. After successfully registering, they're taken to the login page.

If there are any issues during registration, error messages pop up to help users fix them quickly. Once registered, users can log in using their email and password. If their credentials are correct, they're directed to the `/listuser` page, where they can see a list of user profiles.

The List User feature acts as a simple user management system. It displays user profiles, including avatars, names, and emails. Users can even delete profiles they no longer need.

The Detail User feature lets users see detailed info about specific users, like avatars, names, and emails. They can even delete users from the system if necessary. It's all about making the Ourverse platform easy to use and manage for its users.


## 4. Features That Appear in the Application

### 4.1 Registration
- **Registration Form**: Users can input their email and password to register for the Ourverse platform.
- **Validation**: The form includes validation for email and password fields.
- **Error Handling**: Error messages are displayed for unsuccessful registration attempts.
- **Redirect**: Upon successful registration, users are redirected to the login page.
- **Animation**: Animate elements using the AOS library for a better user experience.


### 4.2 Login Form
- **Login Form**: Users can input their email and password to log in.
- **Loading State**: A loading state is displayed while waiting for the server response.
- **Error Handling**: Error messages are displayed if login fails due to incorrect credentials or server errors.
- **Token Storage**: Upon successful login, a token is stored in the local storage for authentication in subsequent requests.
- **Navigation**: The application uses React Router for navigation, redirecting users to the `/listuser` page upon successful login.

### 4.3 List User

- **User Listing**: Displays a list of users fetched from the ReqRes API.
- **Pagination**: Allows users to navigate through multiple pages of user data.
- **User Card**: Each user is displayed in a card format containing their avatar, name, and email.
- **View Profile Button**: Allows users to view detailed profile information for each user.
- **Animation**: Utilizes the AOS library to add animations to user cards as they enter the viewport.
- **Responsive Design**: Utilizes Bootstrap for responsive design, ensuring compatibility with various screen sizes.

### 4.4 Detail Profile

- **Profile View**: Users can view detailed information about a specific user, including their avatar, name, and email.
- **Delete User**: Users have the option to delete the selected user from the system.
- **Responsive Design**: The application is designed to be responsive, adapting to different screen sizes for optimal viewing experience.
- **Styling with Bootstrap**: Bootstrap CSS framework is used for styling components, ensuring a visually appealing and consistent UI.
- **Routing**: React Router is used for client-side routing, enabling navigation between different views within the application without full page reloads.

