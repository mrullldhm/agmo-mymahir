import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  imports: [FormsModule],
  // standalone : true,
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  title: string = 'MyMahir - Agmo';
  myName: string;
  textInput: string;

  constructor() {
    this.myName = 'Muhammad Ali';
    this.textInput = '';
  }

  changeName() {
    this.myName = this.textInput;
  }

  btnClick() {
    let length: number = 10;
    let width: number = 3;

    if (length > 9) {
      console.log('Length: ', length);
      console.log('Width: ', width);
      console.log('The area is: ', calculateArea(length, width));
    } else {
      console.error('Length is less than 10');
    }

    function calculateArea(length: number, width: number) {
      return length * width;
    }
  }

  btnArray() {
    var cars: Array<string> = ['Proton', 'Perodua', 'Honda', 'Toyota'];
    console.log('List of cars: ', ...cars);
    console.log('Car no 1 is: ', cars[0]);
    console.log('Car no 2 is: ', cars[1]);
    console.log('Car no 3 is: ', cars[2]);
    console.log('Car no 4 is: ', cars[3]);

    cars.push('Mercedes');
    console.log('Latest new car lsiting:', ...cars);
    cars.unshift('Hyundai');
    console.log('Latest new car lsiting:', ...cars);

    for (let i = 0; i < cars.length; i++) {
      console.log(`I love ${cars[i]} `);
    }

    for (let car of cars) {
      console.log(`I prefer ${car} `);
    }
  }
}
