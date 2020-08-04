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
  public data;
  public formdata: Array<formModel>;
  ymltoJson;
  constructor(private yamlDataService: YamlDataService) {}
  public ngOnInit() {
    this.data = this.yamlDataService
      .fetchYaml(`testYaml.yaml`)
      .subscribe((respose) => {
        const data = new YamlToJson().getYamlObject(respose);
        console.log(data);

      });
  }
  title = 'open-api-poc';
}
