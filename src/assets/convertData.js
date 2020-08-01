var yaml = require("js-yaml"),
  fs = require("fs");
fs.readFile("testYaml.yaml", "utf8", function (e, data) {
  var file;
  if (e) {
    console.log("config.yml not found.");
  } else {
    file = yaml.safeLoad(data, "utf8");
    console.log(file);
  }
});
