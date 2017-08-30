import {JSDOM} from 'jsdom';

const exposedProperties = ['window', 'navigator', 'document'];
let {window, document, navigator} = global;

window = new JSDOM(``).window;
document = window.document;

Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

navigator = {
  userAgent: 'node.js'
};

/**
 * Sources:
 * https://stackoverflow.com/questions/43960608/setting-up-jsdom-with-mocha
 * http://blog.ricardofilipe.com/post/react-enzyme-tdd-tutorial
 * 
 * Doc:
 * https://github.com/tmpvar/jsdom/blob/master/README.md
 */