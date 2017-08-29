# react-starter-pack
Get up and running with react in no time.

### Features!
- Webpack with Hot Module replacement
- Dev and production webpack configuration
- Typscript support
- React and React DOM
- Proxy for API access
- ES6 support
- Enzyme with Mocha for Testing
- Chai as assertion Library

### Scripts
| Name | Description |
| ------ | ------ |
| start:dev | Start webpack dev server with Hot module replacement |
| build:prod | Build project for production |
| build | Build project for development |
| test | Run tests |

### Installation
- ```$ git clone <repository-url>``` this repository
- ```$ cd react-starter-pack```
- ```$ npm install```

### Running / Development
- ```$ npm run start:dev```
- Visit your app at http://localhost:4040.

### Running Test
```$ npm test```

Note: All the test files should be inside ```tests``` folder

### Build for production
- ```$ npm run build:prod```
- The production build will be created at ```dist/``` folder

### Using proxy for api (when api is in different URL to prevent CORS)
- Put your api starting with "/api/"
- The webpack server will redirect to http://localhost:3030/api/ instead of http://localhost:4040/api/
- `To change the port and namespace look at tools/server.js`

### Todo
- Add React Redux
- Add React Route
- and many more...
