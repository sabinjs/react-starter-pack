# react-starter-pack
Get up and running with react in no time.

### Features!
- Webpack with Hot Module replacement
- Dev and production webpack configuration
- Typscript support
- React and React DOM
- Proxy for API access
- ES6 support

### Scripts
| Plugin | README |
| ------ | ------ |
| start:dev | Start dev server with Hot module replacement |
| build | Build project for production |
| start | Buid project for development |

### Installation
- ```$ git clone <repository-url>``` this repository
- ```$ cd react-starter-pack```
- ```$ npm install```

### Running / Development
- ```$ npm run start:dev```
- Visit your app at http://localhost:4040.

### Using proxy for api (when api is in different URL to prevent CORS)
- Put your api starting with "/api/"
- The webpack server will redirect to http://localhost:3030/api/ instead of http://localhost:4040/api/
- `To change the port and namespace look at tools/server.js`

### Todo
- Add React Redux
- Add React Route
- and many more...
