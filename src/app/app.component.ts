import { Component, OnInit } from '@angular/core';
import { YamlDataService } from './yaml-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public data;
  constructor(private yamlDataService: YamlDataService) {}
  public ngOnInit() {
    this.data = this.yamlDataService
      .fetchYaml(`testYaml.yaml`)
      .subscribe((respose) => {
        //console.log(respose);
      });
  }

  title = 'open-api-poc';
}
