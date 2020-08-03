import { Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NewsService{

    constructor(private http: HttpClient) {}

    api_key = 'd27f55bb18f8475299781bf1df8cc23c';

    fetchNews(): Observable<Object> {
        return this.http.get('https://newsapi.org/v2/top-headlines?q=school&apiKey=d1ec267f9c9a463988d1439e908a4863');
    }
}