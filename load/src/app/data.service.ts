import {Injectable} from 'angular2/core'

@Injectable()
export class DataService {
  public load():Promise<any> {
      var data = [];
      data.push({data: 1});
      return Promise.resolve(data);
  }
}