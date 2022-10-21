import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IProducts } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private prServices: ProductService) { }
  products: IProducts[] = []
  productSearch: FormGroup = new FormGroup({
    name: new FormControl()
  });

  ngOnInit(): void {
  }

  onSearch() {
    this.prServices.getProduct(this.productSearch.value.name).subscribe(data => {
      this.products = data
      console.log(data)
    })

  }
}
