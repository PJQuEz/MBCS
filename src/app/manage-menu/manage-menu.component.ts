import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'lodash';


@Component({
  selector: 'app-manage-menu',
  templateUrl: './manage-menu.component.html',
  styleUrls: ['./manage-menu.component.scss']
})
export class ManageMenuComponent implements OnInit {
  types = [
    { value: 'brewing', name: 'Brewing' },
    { value: 'non brewing', name: 'Non-brewing' }
  ];
  p = {
    'name': 'qq',
    'type': '',
    'pic': ''
  };
  nCost = 0;
  hCost = 0;
  pCost = 0;
  tCost = 0;
  availableProducts: Array<Product> = [];
  shoppingBasket: Array<Product2> = [];

  constructor() {
    this.availableProducts.push(new Product('Coffee', 'normal', 35));
    this.availableProducts.push(new Product('Coffee', 'high', 90));
    this.availableProducts.push(new Product('Coffee', 'premium', 12));
    this.availableProducts.push(new Product('Sugar', 'normal', 60));
    this.availableProducts.push(new Product('Milk', 'normal', 45));
    this.availableProducts.push(new Product('Milk', 'high', 65));
    this.availableProducts.push(new Product('Milk', 'premium', 45));
  }

  ngOnInit() {
  }
  orderedProduct(event: any) {
    // let test = _.remove(this.availableProducts, (n) => {
    //     return n.name == event.dragData.name;
    // });
  }


  backProduct(event: any) {
    // let test = _.remove(this.shoppingBasket, (n) => {
    //     return n.name == event.dragData.name;
    // });
  }
  addToBack($event: any) {
    const newProduct: Product2 = $event.dragData;
    const answer = prompt('Hello');
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
    this.test();
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
    this.test();

  }

  normalCost() {
    // this.test();
    let cost = 0;

    // tslint:disable-next-line:forin
    for (let indx in this.shoppingBasket) {
      let product2: Product2 = this.shoppingBasket[indx];
      cost += (product2.cost * product2.quantity);
      if (product2.type === 'normal') {
        this.nCost = cost;
      }
      if (product2.type === 'high') {
        this.hCost = cost;
      }
      if (product2.type === 'premium') {
        this.pCost = cost;
      }
      this.tCost = cost;
    }
    this.test();
  }
  test() {
    let nss = 0;
    let hss = 0;
    let pss = 0;
    this.nCost = 0;
    this.hCost = 0;
    this.pCost = 0;
    const test1 = _.map(this.shoppingBasket, 'name');
    const test2 = _.filter(test1, function (value, index, iteratee) {
      return _.includes(iteratee, value, index + 1);
    });
    const test3 = _.uniq(test2);
    console.log(test3.length);
    if (test3.length === 0) {
      let cost = 0;
      console.log('=0');
      _.forEach(this.shoppingBasket, (value) => {
        cost += (value.cost * value.quantity);
        if (value.type === 'normal') { nss = 1; }
        else if (value.type === 'high') { hss = 1; }
        else if (value.type === 'premium') { pss = 1; }
        console.log('n=' + nss + 'h=' + hss + 'p=' + pss);

      });
      if (nss === 1) { this.nCost = cost; }
      if (hss === 1) { this.hCost = cost; }
      if (pss === 1) { this.pCost = cost; }
    }
    // tslint:disable-next-line:one-line
    else {
      console.log('!=0');
      this.nCost = 0;
      this.hCost = 0;
      this.pCost = 0;
      _.forEach(this.shoppingBasket, (value) => {
        _.forEach(test3, (value2) => {
          console.log(value);
          if (value.name === value2) {
            if (value.type === 'premium') {
              console.log('p');
              this.pCost += (value.cost * value.quantity);
              // this.nCost -= value.cost;
              // this.hCost -= value.cost;
            }
            else if (value.type === 'high') {
              console.log('h');
              this.hCost += (value.cost * value.quantity);
              // this.nCost -= value.cost;
              // this.pCost -= value.cost;
            }
            else {
              console.log('n');
              this.nCost += (value.cost * value.quantity);

              // this.hCost -= value.cost;
              // this.pCost -= value.cost;
            }
          }
          else {
            this.nCost += (value.cost * value.quantity);
            this.hCost += (value.cost * value.quantity);
            this.pCost += (value.cost * value.quantity);
          }
          // else if (value.prop === 'qq') {

          // }
          // else {
          //   objResult[value.prop] = value.value;

          // }
        });


      });
    }

  }
  test2() {
    let test1 = _.map(this.shoppingBasket, 'name');
    let test2 = _.filter(test1, function (value, index, iteratee) {
      return _.includes(iteratee, value, index + 1);
    });
    let test3 = _.uniq(test2);
    console.log(test3.length);
    console.log(test3);

    _.forEach(this.shoppingBasket, (value) => {
      this.tCost -= (value.cost * value.quantity);

      _.forEach(test3, (value2) => {
        console.log(value.name)
        if (value.name === value2) {
          if (value.type === 'premium') {
            console.log('p');
            // this.nCost -= value.cost;
            // this.hCost -= value.cost;
          }
          else if (value.type === 'high') {
            console.log('h');
            // this.nCost -= value.cost;
            // this.pCost -= value.cost;
          }
          else {
            console.log('n');
            // this.hCost -= value.cost;
            // this.pCost -= value.cost;
          }
        }
        else {

        }
        // else if (value.prop === 'qq') {

        // }
        // else {
        //   objResult[value.prop] = value.value;

        // }
      });


    });
  }

}


class Product {
  constructor(public name: string, public type: string, public cost: number) { }
}

class Product2 {
  constructor(public name: string, public type: string, public cost: number, public quantity: number) { }
}