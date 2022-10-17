import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  id: number = 0;
  constructor(private productSer: ProductService, private router: ActivatedRoute, private route: Router) { }
  productFromEdit: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    desc: new FormControl(),
    image: new FormControl(),
  });
  ngOnInit(): void {
    this.id = this.router.snapshot.params['id']
    this.productSer.getOne(this.id).subscribe(data => {
      this.productFromEdit = new FormGroup({
        name: new FormControl(data.name),
        price: new FormControl(data.price),
        desc: new FormControl(data.desc),
        image: new FormControl(data.image),
      });
    })
  }
  onUpdate() {
    this.productSer.update(this.id, this.productFromEdit.value).subscribe(data => {
      this.route.navigateByUrl(`/admin`);
    })
  }

}
