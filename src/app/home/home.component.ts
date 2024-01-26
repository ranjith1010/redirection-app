import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { urls } from '../urls';
import { JSONPath } from 'jsonpath-plus';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  path : string =''
  redirectionUrl:string =''

  constructor(private router: Router) {}

  ngOnInit() {
    this.path=this.router.url;
    this.getUrl(this.path)
  }

  getUrl(path: string){
    try{
      const jsonPath : string = path.split('/').filter(x => x.length>0).map(x => x.toString()).join('.');
      this.resolvePath(jsonPath+'.value');
    } catch(e){
      this.path = 'Invalid Path!'
      console.error(e);
    }
  }

  resolvePath(path: string){
  this.redirectionUrl = JSONPath({path:path,json:urls});
    if(this.redirectionUrl.length>0 && typeof window !== "undefined") {
      window.location.href=this.redirectionUrl;
    }
  }
}
