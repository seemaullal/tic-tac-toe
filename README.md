# Instructions

## Setup

Run `npm install`.

## Running the application

In 2 different tabs

- Run Python server `npm run py-dev` (optional if there is no API)
- Run Javascript server `npm start`

# Building code for production

- Run `npx webpack` and the code will be compiled and added to the `build` folder. It can then
  be served by the Flask server by running `python3 server.py`
