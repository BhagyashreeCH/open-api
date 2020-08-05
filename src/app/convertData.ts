import * as yaml from 'js-yaml';
export class YamlToJson {
  constructor() {}
  getYamlObject(file) {
    const doc = yaml.safeLoad(file, 'utf8');
    //console.log(doc);
    return JSON.stringify(doc, null, 2);
  }
}
