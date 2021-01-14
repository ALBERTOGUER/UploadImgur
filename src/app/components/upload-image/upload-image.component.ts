import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ImgurapiService } from '../../services/imgurapi.service'

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  public formulario: FormGroup;
  public link: string = "";
  public ArrayImages:Array<any> = []
  constructor(private _imgurService: ImgurapiService) { }

  ngOnInit() {
    this.crearFormulario();
  }

  name = new FormControl('');

  public crearFormulario(): void {
    this.formulario = new FormGroup({
      name: new FormControl(null, Validators.required),
      image: new FormControl(null, Validators.required)
    })

  }

  public loginservicecall() {

    console.log(this.formulario.value)

    let body = this.formulario.value
    console.log(body.image)
    const formData = new FormData();
    formData.append('image', this.formulario.get('image').value)
    formData.append('name', this.formulario.get('name').value)
    //this.formData.append('name', body.name)
    console.log(formData)
    this._imgurService.uploadImage(formData).subscribe((data: any) => {
      console.log(data);
      this.link = data.data.link
      this.ArrayImages.push(this.link)

    }, (error) => {
      console.log(error);

    })
  }

  public onSelectedFile(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0]
      this.formulario.get('image').setValue(file)
    }
  }
}
