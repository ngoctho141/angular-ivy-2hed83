import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, forkJoin, map } from 'rxjs';
type TranslateFile = {file: string, data:Object};
@Injectable({
  providedIn: 'root'
})
export class JsonIntersectionService {

  jsonFiles:TranslateFile[] = []

  constructor(private http: HttpClient) { }

  getJson() {
    return forkJoin(
      this.http.get('assets/gabler-thermoform/i18n/app/en.json').pipe(
        map(
          data => ({file:"gabler-thermoform", data: data})
        )
      ),
      this.http.get('assets/haensel/i18n/app/en.json').pipe(
        map(
          data => ({file:"haensel", data: data})
        )
      ),
      this.http.get('assets/manroland-goss/i18n/app/en.json').pipe(
        map(
          data => ({file:"manroland-goss", data: data})
        )
      ),
      this.http.get('assets/myants/i18n/app/en.json').pipe(
        map(
          data => ({file:"myants", data: data})
        )
      ),
      this.http.get('assets/hf-tiretech/i18n/app/en.json').pipe(
        map(
          data => ({file:"hf-tiretech", data: data})
        )
      ),
      this.http.get('assets/hf-mixing/i18n/app/en.json').pipe(
        map(
          data => ({file:"hf-mixing", data: data})
        )
      )
    );
    // .subscribe(data => {
    //   this.jsonFiles.push({file:"gabler-thermoform", data: data});
    // });
    // .subscribe(data => {
    //   this.jsonFiles.push({file: "haensel", data: data});
    // });
    // .subscribe(data => {
    //   this.jsonFiles.push({file: "manroland-goss", data: data});
    // });
    // .subscribe(data => {
    //   this.jsonFiles.push({file: "myants", data: data});
    // });
    // .subscribe(data => {
    //   this.jsonFiles.push({file: "hf-tiretech", data: data});
    // });
    // .subscribe(data => {
    //   this.jsonFiles.push({file: "hf-mixing", data: data});
    // });
    // return this.jsonFiles;
  }

  static mapData(jsonFiles: TranslateFile[]):Object[]{
    let jsonData = [];
    jsonFiles.map(file => {
      jsonData.push(file.data);
    });
    return jsonData;
  }

  static findCommonKeys(jsonFiles: TranslateFile[]):string[] {
    let keys = [];

    let jsonData = this.mapData(jsonFiles);

    for (let key in jsonData[0]) {
      let hasPair:boolean = true;
      for (let index = 1; index < jsonData.length; index++) {
        hasPair = hasPair && key in jsonData[index] && jsonData[index][key] === jsonData[0][key];
      }
      if(hasPair) keys.push(key);
    }
    return keys;
  }

  static findCommonEntries(jsonFiles: TranslateFile[], keys: string[]): Object {
    let jsonFile = this.mapData(jsonFiles)[0];
    let intersectedEntries = Object.keys(jsonFile).filter(key =>
      keys.includes(key)).reduce((obj, key) =>
      {
          obj[key] = jsonFile[key];
          return obj;
      }, {}
  );
    return intersectedEntries;
  }

  static filterOut(jsonFiles: TranslateFile[], keys:string[]): TranslateFile[] {
    let filteredJsonFiles = [];
    this.mapData(jsonFiles).forEach((element, index) => {
      let jsonFile = {};
      Object.keys(element).forEach((key) => {
        if (!keys.includes(key)) jsonFile[key] = element[key]; 
      });
      filteredJsonFiles.push({file: jsonFiles[index].file, data: jsonFile});
    });
    return filteredJsonFiles;
  }

  
}
