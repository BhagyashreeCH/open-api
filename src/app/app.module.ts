import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { YamlDataService } from './yaml-data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MonacoEditorModule, NgxMonacoEditorConfig } from 'ngx-monaco-editor';

// const monacoConfig: NgxMonacoEditorConfig = {
//   baseUrl: './assets', // configure base path for monaco editor default: './assets'
//   defaultOptions: { scrollBeyondLastLine: false }, // pass default options to be used
//   onMonacoLoad: () => {
//     console.log((<any>window).monaco);
//   }, // here monaco object will be available as window.monaco use this function to extend monaco editor functionalities.
// };
export function onMonacoLoad() {
  console.log((window as any).monaco);

  const uri = monaco.Uri.parse('a://b/foo.json');
  //monaco.languages.register('yaml');
  monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
    validate: true,
    schemas: [
      {
        uri: 'http://myserver/foo-schema.json',
        fileMatch: [uri.toString()],
        schema: {
          type: 'object',
          properties: {
            p1: {
              enum: ['v1', 'v2'],
            },
            p2: {
              $ref: 'http://myserver/bar-schema.json',
            },
          },
        },
      },
      {
        uri: 'http://myserver/bar-schema.json',
        fileMatch: [uri.toString()],
        schema: {
          type: 'object',
          properties: {
            q1: {
              enum: ['x1', 'x2'],
            },
          },
        },
      },
    ],
  });
}

const monacoConfig: NgxMonacoEditorConfig = {
  baseUrl: 'assets',
  defaultOptions: { scrollBeyondLastLine: false },
  onMonacoLoad,
};
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MonacoEditorModule.forRoot(monacoConfig),
  ],
  providers: [YamlDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
