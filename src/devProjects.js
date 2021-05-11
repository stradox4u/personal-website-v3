const projects = [
    {
        name: 'Todo List App',
        route: { name: 'todo-list' },
        description: 'A simple app to manage to do items, striking them out on completion.',
        image: require('./assets/todo-image.jpg'),
    },
    {
        name: 'Weather App',
        route: { name: 'weather-app' },
        description: 'A simple app consuming the OpenWeather Api, allowing it to show you the current weather conditions at any entered location.',
        image: require('./assets/weather-image.jpg'),
    },
    {
        name: 'Tarot Card Reader',
        route: { name: 'tarot-reader' },
        description: 'An app to randomly select from a deck of tarot cards and provide interpretations',
        image: require('./assets/tarotImage.jpeg'),
    },
    {
        name: 'Farmitrade',
        route: 'https://farmitrade.com.ng',
        description: 'An app to connect farmers in the rural areas to bulk consumers/traders in the urban areas, to facilitate direct trade of farm produce, thereby cutting down waste.',
        image: require('./assets/farmitrade-image.png'),
    },
    {
        name: 'Archifolios',
        route: 'https://archifolios.ng',
        description: 'A portfolio app for Nigerian architects to allow them to showcase their works to intending clients and be more easily hired, while also easing the selection process for the clients.',
        image: require('./assets/archifolios-image.png'),
    },
]

export default projects