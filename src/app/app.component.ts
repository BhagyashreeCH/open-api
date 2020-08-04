import { Component, OnInit } from '@angular/core';
import { YamlDataService } from './yaml-data.service';
import * as openApiModel from '../assets/jsondata.json';
import {formModel} from './formmodel';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public data;
  public formdata: Array<formModel>;
  constructor(private yamlDataService: YamlDataService) {}
  public ngOnInit() {
    // this.data = this.yamlDataService
    //   .fetchYaml(`testYaml.yaml`)
    //   .subscribe((respose) => {
    //     //console.log(respose);
    //   });
    this.data = (openApiModel as any).default;
    this.data = this.data.components.schemas.Reward_Request;
    let props = Object.entries(this.data.properties);
    let reqFields = this.data.required;
    console.log(Object.entries(this.data.properties));
    props.forEach(item => {
      let model:formModel;
      console.log(item);
      // model.propName = item[0];
      // model.propType = item[1].type;
      // model.propRequired = reqFields.indexOf(model.propName) !== -1 ? true : false;
      //this.formdata.push(model);
    });
    console.log(this.formdata);
  }

  title = 'open-api-poc';
}
