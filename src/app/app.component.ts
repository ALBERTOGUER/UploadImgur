import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ApiRestInterview';
  public loading:boolean=true;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.loading=false;
      
    }, 5000);
    
  }
}
