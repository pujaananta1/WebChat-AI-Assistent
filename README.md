# Web Chat AI Assistant

Welcome to the JavaScript Chatbot with the OpenAI API repository! This project showcases a dynamic and interactive chatbot implemented using HTML, CSS, and JavaScript. Leveraging the power of the OpenAI API, the chatbot engages in natural language conversations with users.

## Features

- **HTML, CSS, and JavaScript Integration:** This project employs a combination of HTML, CSS, and JavaScript to create an engaging chatbot interface that seamlessly interacts with users.

- **Responsive Design:** The chatbot interface is designed to adapt to different screen sizes, providing a consistent user experience across various devices.

- **OpenAI API Integration:** By harnessing the OpenAI API's capabilities, the chatbot can understand user messages and generate contextually relevant responses, simulating human-like conversation.

- **Real-time Interaction:** The interactive chat interface allows users to send messages and receive immediate responses, resulting in dynamic and engaging conversations.

## Getting Started

To experience the chatbot, follow these steps:

1. Clone this repository to your local machine.

2. Acquire an API key from OpenAI and DO NOT paste it into `script.js`.

Server proxy (recommended and secure):

	- Copy `.env.example` to `.env` and put your key there: `OPENAI_API_KEY=your_openai_api_key_here`.
	- Install dependencies and start the server from the project root:

		```powershell
		npm install
		npm start
		```

	- Open `index.html` in your browser (or serve the static files from any web server). The front-end will call `/api/chat` on the server to keep your API key secret.

3. (Quick & insecure — NOT RECOMMENDED) You could put an API key directly in `script.js` for testing, but this exposes the secret publicly and is discouraged.

## Dependencies

- https://platform.openai.com/: The Smooth integration with the OpenAI API, enabling powerful natural language processing capabilities.

- Google Fonts & icons: The project employs Google Fonts for typography, enhancing the visual appeal of the chatbot interface.

## Contributing

Contributions to this project are welcome! Whether you want to improve the user interface, enhance functionality, or fix issues, your input is valuable. If you encounter bugs or have ideas for new features, please open an issue in this repository.

Elevate your applications with a JavaScript Chatbot integrated with the OpenAI API. Engage in dynamic conversations using an intuitive interface built with HTML, CSS, and JavaScript. Feel free to explore, experiment, and integrate it into your own projects. For questions or suggestions, don't hesitate to reach out!
