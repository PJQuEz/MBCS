import { Injectable } from '@angular/core';

import { MENUS } from './data';
import { INGREDIENT } from './data';
import { EMPLOYEE } from './data';
import { BRANCHMENAGER } from './data';
import { BRANCH } from './data';



@Injectable()
export class DataService {

    constructor() { }

    getMenu() {

        return MENUS;
    }
    setMenu(id, value) {
        MENUS[id] = value;
    }
    addMenu(menu) {
        MENUS.push(menu);
    }
    deleteMenu(index) {
        MENUS.splice(index, 1);
    }
    getIngredient() {

        return INGREDIENT;
    }
    setIngredient(id, value) {
        INGREDIENT[id] = value;
    }
    addIngredient(menu) {
        INGREDIENT.push(menu);
    }
    deleteIngredient(index) {
        INGREDIENT.splice(index, 1);
    }
    getEmployee() {

        return EMPLOYEE;
    }
    setEmployee(id, value) {
        EMPLOYEE[id] = value;
    }
    addEmployee(menu) {
        EMPLOYEE.push(menu);
    }
    deleteEmployee(index) {
        EMPLOYEE.splice(index, 1);
    }
    getBRANCHMENAGER() {

        return BRANCHMENAGER;
    }
    setBRANCHMENAGER(id, value) {
        BRANCHMENAGER[id] = value;
    }
    setbBRANCHMENAGER(id, value) {
        BRANCHMENAGER[id].branch = value;
    }
    addBRANCHMENAGER(menu) {
        BRANCHMENAGER.push(menu);
    }
    deleteBRANCHMENAGER(index) {
        BRANCHMENAGER.splice(index, 1);
    }
    getBRANCH() {

        return BRANCH;
    }
    setBRANCH(id, value) {
        BRANCH[id] = value;
    }
    setbBRANCH(id, value) {
        BRANCH[id].manager = value;
    }
    addBRANCH(menu) {
        BRANCH.push(menu);
    }
    deleteBRANCH(index) {
        BRANCH.splice(index, 1);
    }
}
