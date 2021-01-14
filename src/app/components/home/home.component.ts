import { Component, OnInit } from '@angular/core';
import { ImgurapiService } from '../../services/imgurapi.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public albums:Array<any> =[];
  

  constructor(private _imgurService: ImgurapiService) {
    this._imgurService.getImages().subscribe((albums : any) =>{
      console.log(albums)
      this.albums = albums.data
      this.albums = this.albums.filter(value => value.privacy != "hidden" && value.type != "video/mp4")
      console.log(this.albums)
    })
   }


  ngOnInit() {
    
  }

}
