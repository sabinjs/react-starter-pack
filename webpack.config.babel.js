module.exports = function(env) {
  console.log(`sabin webpack.${env}.js`);
  return require(`./webpack.${env}.js`)
}