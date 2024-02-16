import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class NewsArticlesService {

    getNewsByLanguage(language: string): Observable<any> {
        return this.httpClient.get(
            `${environment.url_base}top-headlines?language=${language}&apiKey=${environment.api_key}`
        );
    }


    constructor(private httpClient: HttpClient) {

    }


    // nastavení jazyka + téma

    getTopHeadlines(): Observable<any> {
        return this.httpClient.get(
            `${environment.url_base}top-headlines?country=cz&apiKey=${environment.api_key}`
        )
    }

    getArticleByCategory(category: any): Observable<any> {
        return this.httpClient.get(
            `${environment.url_base}top-headlines?country=cz&&category=${category}&apiKey=${environment.api_key}`
        )
    }
}
