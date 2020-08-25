import * as yaml from 'js-yaml';
//import YamlValidator from 'yaml-validator';
//const YamlValidator = require('yaml-validator');
const options: any = {
  log: false,
  structure: false,
  yaml: false,
  writeJson: false,
};

const files = [];

export class YamlToJson {
  constructor() {}
  public getYamlObject(file) {
    const doc = yaml.safeLoad(file, 'utf8');
    return JSON.stringify(doc, null, 2);
    //return doc;
  }

  public validateYamlData(data) {
    // const validator = new YamlValidator(options);
    // validator.validate(data);
    // validator.report();
  }
}
