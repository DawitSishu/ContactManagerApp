# Contact Manager Backend API

The Contact Manager Backend API is a robust and secure API that serves as the backend for the Contact Manager App. It is built with Express.js and utilizes MongoDB for data storage, providing essential features for managing contacts and user accounts.

## Features

- **Contact Management**: The API allows users to perform CRUD (Create, Read, Update, Delete) operations on contacts. Users can add new contacts, edit existing ones, delete unwanted contacts, and view contact details.

- **User Accounts**: The API provides endpoints for user account management, including user registration, login, and profile updates. It securely stores user account information, including hashed passwords, in MongoDB.

- **User Authentication and Authorization**: The API implements user authentication using JSON Web Tokens (JWT), ensuring secure access to protected routes. It also incorporates authorization and role-based permissions to control user access to specific endpoints.

- **Data Storage**: All contact and user account data is stored in a MongoDB database. The API handles database interactions, including querying, updating, and deleting data.

## Technologies Used

- Express.js: The Contact Manager Backend API is built with Express.js, a popular Node.js framework for building web applications and APIs.

- MongoDB: The API utilizes MongoDB, a NoSQL database, to store contact and user account data. MongoDB offers scalability, flexibility, and ease of use.

- JSON Web Tokens (JWT): JWT is employed for user authentication and authorization. It ensures secure access to protected routes and enables stateless authentication.


## Installation

To run the Contact Manager Backend API locally, follow these steps:

1. Clone the repository: `git clone https://github.com/YourUsername/contact-manager-api.git`

2. Install dependencies: `npm install`

3. Set up environment variables: Create a `.env` file and configure the necessary environment variables such as database connection details and JWT secret key.

4. Start the API: `npm start`

## Contributing

Contributions to the Contact Manager Backend API are welcome! If you have any suggestions, new features, or bug fixes, please follow these steps:

1. Fork the repository.

2. Create a new branch: `git checkout -b feature/your-feature-name`

3. Make your changes and commit them: `git commit -m 'Add your commit message'`

4. Push to the branch: `git push origin feature/your-feature-name`

5. Open a pull request, describing your changes and their purpose.

## License

The Contact Manager Backend API is open-source software licensed under the [MIT License](LICENSE).


