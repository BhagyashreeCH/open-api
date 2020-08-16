import { Component, OnInit } from '@angular/core';
import { YamlDataService } from './yaml-data.service';
import { formModel } from './formmodel';
import { YamlToJson } from './convertData';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private yamlDataService: YamlDataService) {}
  public subscription;
  public data;
  public propertiesArray;
  public formdata: Array<formModel>;
  public yamlInput = '';
  ymltoJson;
  title = 'open-api-poc';
  public ngOnInit() {
    this.subscription = this.yamlDataService
      .fetchYaml(`testYaml.yaml`)
      .subscribe((respose) => {
        this.data = new YamlToJson().getYamlObject(respose);
        this.getData(this.data);
      });
  }
  public getData(jData) {
    this.formdata = getPropertyArray(JSON.parse(jData).components.schemas);
  }
  public yamldata() {
    console.log(this.yamlInput);
    this.data = new YamlToJson().validateYamlData(this.yamlInput);
  }
}

function getPropertyArray(schemas) {
  const propertyArr = [];
  Object.keys(schemas).map((api) => {
    Object.keys(schemas[api].properties).forEach((prop) => {
      const model: formModel = {
        propRequired: false,
        propName: '',
        propType: '',
      };
      model.propRequired =
        schemas[api].required.indexOf(prop) !== -1 ? true : false;
      model.propName = prop;
      model.propType = schemas[api].properties[prop].type;
      propertyArr.push(model);
    });
  });
  return propertyArr;
}
