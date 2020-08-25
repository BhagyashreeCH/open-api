import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
  constructor(
    private yamlDataService: YamlDataService,
    public changeDetectorRef: ChangeDetectorRef
  ) {}
  public subscription;
  public yamlInput = '';
  public schema;
  public data;
  public title = 'open-api-poc';
  public inputKeys;
  public schemaKeys;
  public missedKeys;
  public options = {
    theme: 'vs-dark',
  };

  public jsonCode = '';

  public model: NgxEditorModel = {
    value: this.jsonCode,
    language: 'yaml',
    uri: '',
  };
  public getschema() {
    this.schemaKeys = [];
    this.schema = {
      name: 'string',
      surname: 'string',
      middlename: 'string',
      age: 'number',
    };
    this.schemaKeys = Object.keys(this.schema);
  }
  public ngOnInit() {
    this.getschema();
  }
  public getyamlinput(data1: any) {
    this.missedKeys = [];
    this.data = '';
    console.log('pp', data1);
    this.data = new YamlToJson().getYamlObject(data1);
    this.data = JSON.parse(this.data);
    this.inputKeys = Object.keys(this.data);
    console.log('input keys', this.inputKeys);
    console.log('schema keys', this.schemaKeys);
    this.schemaKeys.forEach((item) => {
      if (this.inputKeys.indexOf(item) === -1) {
        this.missedKeys.push(item);
      }
    });
    this.missedKeys = this.missedKeys.join();
    this.changeDetectorRef.detectChanges();
    alert('missed keys : ' + this.missedKeys);
  }
}
