import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  author: any
  content: any
  description: any
  publishedAt: any
  url: any
  image: any
  source: any
  title: any

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  goBack() {
    this.router.navigate(['/']); // Předpokládá se, že úvodní stránka je na cestě '/'
  }

  ngOnInit() {
    this.author = this.activatedRoute.snapshot.queryParamMap.get('author')
    this.content = this.activatedRoute.snapshot.queryParamMap.get('content')
    this.description = this.activatedRoute.snapshot.queryParamMap.get('description')
    this.publishedAt = this.activatedRoute.snapshot.queryParamMap.get('publishedAt')
    this.url = this.activatedRoute.snapshot.queryParamMap.get('url')
    this.source = this.activatedRoute.snapshot.queryParamMap.get('source')
    this.title = this.activatedRoute.snapshot.queryParamMap.get('title')
    this.image = this.activatedRoute.snapshot.queryParamMap.get('urlToImage')
  }

  openUrl() {
    if (this.url) {
      window.open(this.url, '_blank');
    }
  }

  setDefaultImage(event: Event) {
    const target = event.target as HTMLImageElement;
    target.src = 'src/assets/images/news_app.jpg'; // Nahraďte cestou k vašemu výchozímu obrázku
  }

}
