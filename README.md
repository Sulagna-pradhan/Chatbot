# Chatbot

This repository contains the code for a simple chatbot built using HTML, CSS, and JavaScript. The chatbot uses the Wikipedia API to fetch information based on user queries.

## Demo

[Link to Demo](https://chatterbotz.netlify.app)

## Features

- Takes a user's question.
- Extracts a keyword from the user's question.
- Fetches information related to the keyword from Wikipedia.
- Displays the fetched information as a response.

## How It Works

1. **User Input**: The user types a question into the chatbot interface.
2. **Keyword Extraction**: The chatbot extracts a significant keyword from the user's question.
3. **API Request**: The chatbot sends a request to the Wikipedia API using the extracted keyword.
4. **Response Handling**: The chatbot processes the response from Wikipedia and displays the information to the user.

## Getting Started

### Prerequisites

To run this project, you need:

- A web browser (Chrome, Firefox, etc.)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Sulagna-pradhan/Chatbot.git
    ```
2. Open the `index.html` file in your web browser.

## Usage

1. Open the `index.html` file in a web browser.
2. Type a question into the chatbot interface.
3. Press enter or click the send button.
4. The chatbot will respond with information fetched from Wikipedia.

## Code Overview

### HTML

- `index.html`: The main file containing the structure of the chatbot interface.

### CSS

- `styles.css`: Contains the styling for the chatbot interface.

### JavaScript

- `script.js`: Contains the logic for handling user input, making API requests, and updating the interface with responses.

### API

- Wikipedia API: Used to fetch information based on the extracted keyword from the user's question.

## Example

### User Question

- **User**: "What is the capital of France?"

### Process

1. Extracts the keyword "capital".
2. Sends a request to the Wikipedia API with the keyword "capital".
3. Receives information related to "capital" from Wikipedia.
4. Responds with: "Paris is the capital of France."

## Contributing

Contributions are welcome! Please create a pull request or open an issue to discuss changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or feedback, please reach out at Telegram [Search - @protootypes].

