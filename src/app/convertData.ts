import * as yaml from 'js-yaml';
import YamlValidator from 'yaml-validator';
const fs = require('fs');
const options = this.options({
  log: false,
  structure: false,
  yaml: false,
  writeJson: false,
});

const files = [];

export class YamlToJson {
  constructor() {}
  public getYamlObject(file) {
    const doc = yaml.safeLoad(file, 'utf8');
    console.log(doc);
    return JSON.stringify(doc, null, 2);
  }

  public validateYamlData(data) {
    const validator = new YamlValidator(options);
    validator.validate(data);
    validator.report();
  }
}
