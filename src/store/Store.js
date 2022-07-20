import { makeAutoObservable } from "mobx";

export default class Store {
    constructor(){
        this._types = [
            {id: 1, name:"Детали крепления воздуховодов"},
            {id: 2, name:"Изделия и детали трубопроводов для тепловых сетей"},
        ]
        this._gost = [
            {id: 1, name:"ГОСТ 14911-82"},
            {id: 2, name:"ОСТ 36-146-88"},
            {id: 3, name:"НТС 65-06"},
        ]
        this._product = [
            {id: 1, gost:'ГОСТ 14911-82', type: 1, name: "Опора тавровая хомутовая 1 ТХ", price: 2500, img:"./img/product.png"},
            {id: 2, gost:'ГОСТ 14911-82', type: 1, name: "Опора тавровая хомутовая 2 ТХ", price: 2500, img:"./img/product.png"},
            {id: 3, gost:'ГОСТ 14911-82', type: 2, name: "Опора тавровая хомутовая 3 ТХ", price: 2500, img:"./img/product.png"},
            {id: 4, gost:'ГОСТ 14911-82', type: 1, name: "Опора тавровая хомутовая 4 ТХ", price: 2500, img:"./img/product.png"},
        ]
        this._curentProduct = this._product
        this._selectedType = [{id: 1, name:"Детали крепления воздуховодов"},]
        this._selectedGost = {}
        this._cart = []
        this._total = 0
        this._customer = false
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setGost(gost) {
        this._gost = gost
    }
    setProduct(product) {
        this._product = product
    }
    setCurentProduct(curentProduct) {
        this._curentProduct = curentProduct
    }
    setSelectedType(type) {
        this._selectedType = type
    }
    setTotal(total) {
        this._total = total
    }
    setSelectedGost(gost) {
        this._selectedGost = gost
    }
    setCart(cart){
        this._cart = cart
    }
    setCustomer(customer) {
        this._customer = customer
    }

    get types() {
        return this._types
    }
    get gost() {
        return this._gost
    }
    get product() {
        return this._product
    }
    get curentProduct() {
        return this._curentProduct
    }
    get cart(){
        return this._cart
    }

    get selectedType() {
        return this._selectedType
    }
    get selectedGost() {
        return this._selectedGost
    }
    get total() {
        return this._total
    }

    get customer() {
        return this._customer
    }


}

