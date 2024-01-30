import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  selectFile: File;


  constructor(private http: HttpClient, private toaster: ToastrService) { }

  ngOnInit(): void {

    this.addInput()
  }

  Upload(event: any) {
    this.selectFile = <File>event.target.files[0];

  }

  AddDocument() {
    const fileDate = new FormData();

    fileDate.append('file', this.selectFile, this.selectFile.name);
    this.http.post(`http://localhost:3000/files`, fileDate).subscribe({
      next: (res) => {
        this.toaster.success("Success");

      },
      error: (err) => {
        this.toaster.error(err);
      }
    })
  }

  inputValues: string[] = [];

  doc: string;

  // documents:string;

  addInput() {
    this.inputValues.push(this.doc);
    this.doc = '';

  }
  removeInput(index: number) {
    this.inputValues.splice(index, 1);
  }

  forEach() {
    let array = ['file', 'sfd', 'erg', 'wdqw', 5, 78, 96,];

    array.forEach((i) => {
      console.warn(i);
    })
  }

  ShowImages: string[] = ['/assets/car1.jpg', '/assets/car2.jpg', '/assets/car3.jpg', '/assets/Moon1.jpg', '/assets/nature1.jpg', '/assets/nature2.jpg', '/assets/nature3.jpg', '/assets/nature4.jpg',
    '/assets/nature5.jpg', '/assets/nature6.jpg', '/assets/nature7.jpg', '/assets/water1.jpg', '/assets/water2.jpg', '/assets/water3.jpg'];


}
