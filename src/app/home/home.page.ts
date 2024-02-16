import { NewsArticlesService } from '../api/news-articles.service';
import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

interface Article {
  title: string;
  author?: string; // Přidáno, může být nepovinné
  publishedAt?: string; // Přidáno, může být nepovinné
  // další vlastnosti...
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  filteredArticles: Article[] = []; // Pro uložení filtrovaných zpráv
  isSearching: boolean = false; // Přidáno pro sledování stavu vyhledávání

  debounce(func: (...args: any[]) => void, wait: number, immediate: boolean) {
    let timeout: any;
    return (...args: any[]) => {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  filterArticles(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.isSearching = searchTerm.trim() !== ''; // Aktualizujeme stav vyhledávání

    if (searchTerm && searchTerm.trim() !== '') {
      this.filteredArticles = this.topHeadlines.filter((article) => {
        return article.title.toLowerCase().includes(searchTerm);
      });
    } else {
      this.filteredArticles = this.topHeadlines;
    }
  }

  //přepínání jazyk/země
  switchLanguage(language: string) {
    this.debounce(() => {
      this.articleService.getNewsByLanguage(language).subscribe(data => {
        this.topHeadlines = data.articles;
      });
    }, 500, false)();
  }


  selectedCategory = "health"
  topHeadlines: any[] = []

  constructor(private articleService: NewsArticlesService, private router: Router, private newsService: NewsArticlesService) {
    articleService.getTopHeadlines().subscribe((results) => {
      this.topHeadlines.push(...results.articles)
      console.log(this.topHeadlines);
    })


    /* articleService.getArticleByCategory(this.selectedCategory).subscribe((results) => {
       console.log(results);
     }) */

  }

  getDetails(selectedArticle: any) {
    // console.log(selectedArticle)
    const params: NavigationExtras = {
      queryParams: {
        'author': selectedArticle.author,
        'content': selectedArticle.content,
        'description': selectedArticle.description,
        'publishedAt': selectedArticle.publishedAt,
        'source': selectedArticle.source.name,
        'title': selectedArticle.title,
        'url': selectedArticle.url,
        'urlToImage': selectedArticle.urlToImage,
      }
    }
    this.router.navigate(['/details'], params)
  }

}
