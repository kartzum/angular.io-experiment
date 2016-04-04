import {Injectable} from 'angular2/core'

@Injectable()
export class DataService {
  public load():Promise<any> {
      var data = {
          "nodes":[
              {"name":"Myriel","group":1},
              {"name":"Napoleon","group":1},
          ],
          "links":[
              {"source":1,"target":0,"value":1}
          ]
      };
      return Promise.resolve(data);
  }
}