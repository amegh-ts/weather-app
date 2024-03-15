# Weather App

This is a weather app providing weather details based on location and search.

## Features

- **Location-Based Weather:** Display weather information based on the user's current location.
- **Search Weather:** Display weather information for a specific location through search.

## Installation

### Frontend (React Vite App)

1. Clone the repository:

    ```bash
    git clone https://github.com/amegh-ts/weather-app.git
    ```

2. Navigate to the frontend directory:

    ```bash
    cd client
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm run dev
    ```

5. Access the application at `http://localhost:5173`.

### Backend (Express)

1. Navigate to the backend directory:

    ```bash
    cd server
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the server:

    ```bash
    npm start
    ```

4. The backend server will be running on `http://localhost:5000`.

## Usage

### Frontend

- The frontend application provides two main functionalities:
  1. **Location-Based Weather:** Upon accessing the app, it automatically fetches and displays weather information based on the user's current location.
  2. **Search Weather:** Users can search for weather information by entering a location in the search bar.

### Backend

- The backend server facilitates fetching weather data from external APIs and serving it to the frontend upon request.

## Technologies Used

- **Frontend:** React, Vite
- **Backend:** Node.js, Express

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
