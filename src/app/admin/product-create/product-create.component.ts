import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private productSer: ProductService, private rou: Router) { }
  productFromCreate: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    desc: new FormControl(),
    image: new FormControl(),
  });
  ngOnInit(): void {
  }
  onCreate() {
    this.productSer.create(this.productFromCreate.value).subscribe(data => {
      console.log(data)
      this.rou.navigateByUrl(`/admin`);

    })
  }

}
