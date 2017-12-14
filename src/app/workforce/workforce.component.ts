import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-workforce',
  templateUrl: './workforce.component.html',
  styleUrls: ['./workforce.component.scss']
})
export class WorkforceComponent implements OnInit {
  p = {
    'name': '',
    'type': '',
    'price': '',
    'cost': ''
  };
  img2;
  nCost = 0;
  hCost = 0;
  pCost = 0;
  tCost = 0;
  availableProducts: Array<Product> = [];
  shoppingBasket: Array<Product2> = [];
  constructor(private dataService: DataService,  private router: Router) {
    this.availableProducts.push(new Product('Coffee', 'normal', 10));
    this.availableProducts.push(new Product('Coffee', 'high', 20));
    this.availableProducts.push(new Product('Coffee', 'premium', 30));
    this.availableProducts.push(new Product('Milk', 'normal', 10));
 
  }

  ngOnInit() {
  }
  addToBack($event: any) {
    const newProduct: Product2 = $event.dragData;
    const answer = prompt('Amount');
    // tslint:disable-next-line:radix
    const num1 = parseInt(answer);
    if (answer) {
      console.log(num1);
      this.shoppingBasket.push(new Product2(newProduct.name, newProduct.type, newProduct.cost, num1));
      this.shoppingBasket.sort((a: Product2, b: Product2) => {
        return a.name.localeCompare(b.name);
      });
      console.log(this.shoppingBasket);
      _.remove(this.availableProducts, (n) => {
        if (n.name === $event.dragData.name) {
          return n.type === $event.dragData.type;
        }
      });
    }
  }

  addToBasket($event: any) {
    const newProduct: Product = $event.dragData;
    const answers = prompt('test');
    if (answers) {
      this.availableProducts.push(new Product(newProduct.name, newProduct.type, newProduct.cost));
      this.availableProducts.sort((a: Product, b: Product) => {
        return a.name.localeCompare(b.name);
      });
      console.log(this.availableProducts);
      _.remove(this.shoppingBasket, (n) => {
        if (n.name === $event.dragData.name) {
          return n.type === $event.dragData.type;
        }
      });
    }

  }

}
class Product {
  constructor(public name: string, public type: string, public cost: number) { }
}

class Product2 {
  constructor(public name: string, public type: string, public cost: number, public quantity: number) { }
}
