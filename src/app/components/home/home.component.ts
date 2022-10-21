import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { IProducts } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private prServices: ProductService) { }//liên kết prSere... vào components home
  products: IProducts[] = []

  ngOnInit(): void {
    this.prServices.getProduct().subscribe(data => {
      this.products = data
      console.log(data)
    })
  }

}
