import { Component, OnInit } from '@angular/core';
import { YamlDataService } from './yaml-data.service';
import * as openApiModel from '../assets/jsondata.json';
import {formModel} from './formmodel';
import { YamlToJson } from './convertData';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public subscription;
  public data;
  public formdata: Array<formModel>;
  ymltoJson;
  constructor(private yamlDataService: YamlDataService) {}
  public ngOnInit() {
    this.subscription = this.yamlDataService
      .fetchYaml(`testYaml.yaml`)
      .subscribe((respose) => {
        this.data = new YamlToJson().getYamlObject(respose);
        this.getData(this.data);
      });
    
  }
  public getData(jData){
      let parsedData = JSON.parse(jData);
      let propertiesArray = Object.keys(parsedData.components.schemas.Reward_Request.properties);
      let valuesArray = Object.values(parsedData.components.schemas.Reward_Request.properties);
      let requiredFields = parsedData.components.schemas.Reward_Request.required;
      console.log(propertiesArray);
      console.log(valuesArray);
      propertiesArray.forEach(item =>{
        let model: formModel;
        console.log(item);
        model.propName = item;
        this.formdata.push(model);
      });
  }
  title = 'open-api-poc';
}
