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
- Test Coverage using IstanbulJS
- Karma Test runner - To run test in real browser

### Scripts
| Name | Description |
| ------ | ------ |
| start:dev | Start webpack dev server with Hot module replacement |
| build:prod | Build project for production |
| build | Build project for development |
| test | Run tests |
| ./node_modules/.bin/karma start | Run tests |

### Installation
- ```$ git clone <repository-url>``` this repository
- ```$ cd react-starter-pack```
- ```$ npm install```

### Running / Development
- ```$ npm run start:dev```
- Visit your app at http://localhost:4040.

### Running Tests
```$ npm test``` or ```$ ./node_modules/.bin/karma start```

### Running Tests based on search criteria
- ```$ ./node_modules/.bin/karma start```
- ```$ ./node_modules/.bin/karma run -- --grep "<Text to search>"```

#### Note: 
- All the test files should be inside ```tests``` folder
- Name convention for test file should be ```*.spec.tsx```
- If you don't want to use ```$ ./node_modules/.bin/karma``` then install karma as global

### Build for production
- ```$ npm run build:prod```
- The production build will be created at ```dist/``` folder

### Using proxy for api (when api is in different URL to prevent CORS)
- Put your api starting with "/api/"
- The webpack server will redirect to http://localhost:3030/api/ instead of http://localhost:4040/api/
- `To change the port and namespace look at tools/server.js`

### Coverage
- Coverage generated by ```$ npm test``` is stored inside ```coverage``` folder
- Coverage generated by ```$ ./node_modules/.bin/karma``` is stored inside ```karma-coverage``` folder

### Todo
- Add React Redux
- Add React Route
- and many more...
