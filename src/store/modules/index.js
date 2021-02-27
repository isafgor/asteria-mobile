const allModuleFileNames = require.context('.', true, /\.js$/)

const modules = {};

allModuleFileNames.keys().forEach(fileName => {
  if (fileName === './state.js') return;
  const [moduleName, moduleElement] = fileName.replace(/(\.\/|\.js)/g, "").split("/");


  if (!Object.prototype.hasOwnProperty.call(modules, moduleName)) {
    modules[moduleName] = {
      namespaced: true
    }
  }

  modules[moduleName][moduleElement] = allModuleFileNames(fileName).default;
});

export default modules
