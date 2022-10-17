import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  id: number = 0
  cartForm: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    desc: new FormControl(),
    image: new FormControl(),
  });
  constructor() {

  }

  ngOnInit(): void {
  }

}
