import { Component, OnInit } from '@angular/core';
import { YamlDataService } from './yaml-data.service';
import { formModel } from './formmodel';
import { YamlToJson } from './convertData';
import { NgForm } from '@angular/forms';
import { NgxEditorModel } from 'ngx-monaco-editor';

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
  options = {
    theme: 'vs-dark',
  };

  jsonCode = ['{', '"p1": "v3",', '"p2": false', '}'].join('\n');

  model: NgxEditorModel = {
    value: this.jsonCode,
    language: 'json',
    uri: '',
  };
  public onInit(editor) {
    let line = editor.getPosition();
    console.log('line: ', line);
  }
  public ngOnInit() {}
}
