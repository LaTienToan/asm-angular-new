import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IProducts } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  id: number = 0;
  product: any
  cartForm: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    desc: new FormControl(),
    image: new FormControl(),
  });
  constructor(private router: ActivatedRoute, private productSer: ProductService) {
    this.id = this.router.snapshot.params['id']
    // alert(this.id)
    this.productSer.getOne(this.id).subscribe(data => {
      // console.log(data)
      this.product = data

    })
  }

  ngOnInit(): void {
  }

}
