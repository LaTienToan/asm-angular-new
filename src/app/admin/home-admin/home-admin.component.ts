import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IProducts } from 'src/app/model/product';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {



  constructor(private ser: ProductService) { }
  products: IProducts[] = []

  ngOnInit(): void {
    this.ser.getProduct(10).subscribe(data => {
      this.products = data
      console.log(data);

    })
  }
  onDelete(id: number) {
    if (confirm("Bạn có chắc muốn xóa không?")) {
      this.ser.delete(id).subscribe(data => {
        this.ser.getProduct().subscribe(data => {
          this.products = data
          console.log(data)
        })
      })
    }
  }

}
