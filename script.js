$(document).ready(function() {
    $('#send-btn').click(function() {
        sendMessage();
    });

    $('#user-input').keypress(function(e) {
        if (e.which == 13) {
            sendMessage();
        }
    });
});

function sendMessage() {
    var userInput = $('#user-input').val().toLowerCase();
    $('#chat-box').append('<div class="user-msg">' + userInput + '</div>');
    $('#user-input').val('');
    handlePredefinedMessages(userInput);
}

function handlePredefinedMessages(input) {
    switch (input) {
        case 'hl':
        case 'hello':
        case 'hi':
            displayBotMessage('Hey there, how can I assist you?');
            break;
        case 'what is your name?':
        case 'your name?':
        case 'who are you?':
            displayBotMessage('Hey buddy! I do not have any name yet, I am your virtual assistant here at Asutosh College Student Help desk, designed to lend a helping hand to all students. Feel free to ask me anything you need assistance with. Lets make your academic journey smoother together!');
            break;
        case 'weather':
        case 'what is the weather?':
        case 'how is the weather?':
            getWeatherResponse();
            break;
            case 'joke':
            case 'jokes':
            case 'tell me a joke':
                getJokeResponse();
            break;
        default:
            getWikiResponse(input);
            break;
    }
}

function getWeatherResponse() {
    var apiKey = '8ee32a81aa74a0fd28407f8ba60c1e3b';
    var city = 'New Delhi'; // You can change the city here or allow the user to input the city

    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather',
        data: {
            q: city,
            appid: apiKey,
            units: 'metric' // You can change the unit here (metric for Celsius, imperial for Fahrenheit)
        },
        dataType: 'json',
        success: function(data) {
            var weatherDescription = data.weather[0].description;
            var temperature = data.main.temp;
            var city = data.name;
            var response = 'The weather in ' + city + ' is currently ' + weatherDescription + ' with a temperature of ' + temperature + '°C.';
            displayBotMessage(response);
        },
        error: function(xhr, status, error) {
            console.error('Error:', status, error);
            displayBotMessage('Sorry, I couldn\'t retrieve the weather information at the moment.');
        }
    });
}

function getJokeResponse() {
    $.ajax({
        url: 'https://v2.jokeapi.dev/joke/Any',
        dataType: 'json',
        success: function(data) {
            if (data.type === 'twopart') {
                var setup = data.setup;
                var delivery = data.delivery;
                var joke = setup + ' ' + delivery;
                displayBotMessage(joke);
            } else {
                var joke = data.joke;
                displayBotMessage(joke);
            }
        },
        error: function(xhr, status, error) {
            console.error('Error:', status, error);
            displayBotMessage('Sorry, I couldn\'t retrieve a joke at the moment.');
        }
    });
}

function getWikiResponse(query) {
    $.ajax({
        url: 'https://en.wikipedia.org/w/api.php',
        data: {
            action: 'query',
            format: 'json',
            list: 'search',
            srsearch: query,
            utf8: 1,
            origin: '*'
        },
        dataType: 'jsonp',
        success: function(data) {
            if (data.query && data.query.search.length > 0) {
                var firstResult = data.query.search[0];
                var snippet = firstResult.snippet;
                if (snippet) {
                    // If the snippet contains relevant information, display it
                    displayBotMessage(snippet);
                } else {
                    // If the snippet is empty, display a generic message
                    displayBotMessage('I found some information, but it may not be relevant to your question.');
                }
            } else {
                // If no relevant information is found, display a generic message
                displayBotMessage('Sorry, I couldn\'t find any information on that topic.');
            }
            $('#chat-box').scrollTop($('#chat-box')[0].scrollHeight);
        },
        error: function(xhr, status, error) {
            console.error('Error:', status, error);
        }
    });
}


function displayBotMessage(message) {
    $('#chat-box').append('<div class="bot-msg">' + message + '</div>');
}
