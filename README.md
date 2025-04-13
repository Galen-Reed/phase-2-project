# Formula One Dashboard 

F1 Dashboard is a React-based application that lets users explore information about Formula One, including drivers, teams, and circuits. It features an interactive UI with the ability to add new Grand Prix circuits via a controlled form. The app is powered by a JSON server, which acts as a backend for storing and retrieving data.

## Features
### Home Page: Drivers
- displays a list of all Formula One drivers fetched from a JSON server
- each driver's information is dynamically rendered in cards for a user-friendly interface
### Teams Page
- displays a list of all the Formula One teams including points and team principal
### Circuits Page
- features a controlled form that allows users to add a Grand Prix circuit
- users can enter the name, location, and a link for a new circuit
- newly added circuits are sent to the JSON via a POST request and immediately rendered in the app
### Navigation Bar
- navigation bar is present on every page and allows users to switch between the three pages
- dynamically changes the url when the user goes to a different page

## Getting Started
### Prerequisites
- Ensure you have Node.js and npm installed on your computer
- install the JSON server globally:

  ```npm install -g json-server```
### Installation
1. Clone the repository

```
git clone <repository-url>
cd formula-one-dashboard
```
2. Install the project dependencies:
``` npm install ```
3. Start the JSON server:
``` json-server --watch db.json --port 3001  ```
4. Start the React app:
``` npm start ```

## Contributing
Contributions, issues, and feature requests are welcome! Feel free to fork the repository and submit pull requests.

## License
This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).
