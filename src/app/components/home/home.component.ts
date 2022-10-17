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

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    margin: 10,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  imagesList = [
    "assets/images/feature-pic1.jpg",
    "assets/images/feature-pic2.jpg",
    "assets/images/feature-pic3.jpg",
    "assets/images/feature-pic4.jpg",
    "assets/images/feature-pic4.jpg",
    "assets/images/feature-pic4.jpg",
    "assets/images/feature-pic4.jpg",
  ]

  constructor(private prServices: ProductService) { }//liên kết prSere... vào components home
  products: IProducts[] = []

  ngOnInit(): void {
    this.prServices.getProduct().subscribe(data => {
      this.products = data
      console.log(data)
    })
  }

}
