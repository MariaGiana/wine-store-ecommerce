import { Injectable } from '@angular/core';
import { Wines } from './wines-list/Wines';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

//maneja la logica del carrito
export class WineCartService {
  private _cartList: Wines[]=[];
  cartList: BehaviorSubject <Wines[]> = new BehaviorSubject (this._cartList);

  
 constructor(){}

  addToCart(wine:Wines){
    let item = this._cartList.find(v1 => v1.wineName === wine.wineName);


    if(!item){ wine.stock -= wine.quantity;
      this._cartList.push({ ... wine});
     
    }else{
      item.quantity+=wine.quantity;
      
    }
    //console.log("elemento agregado:", this._cartList);
    this.cartList.next(this._cartList);
    
    }

    removeFromCart(wine: Wines) {
    // 1. Buscamos el ítem en nuestro carrito actual
    let item = this._cartList.find(v1 => v1.wineName === wine.wineName);

    if (item) {
      // 2. Le devolvemos al vino su stock original (sumamos lo que había en el carrito)
      // Nota: Esto asume que estás compartiendo la misma referencia de objeto para el stock
      wine.stock += item.quantity;

      // 3. Filtramos el arreglo para dejar fuera el vino que queremos borrar
      this._cartList = this._cartList.filter(v1 => v1.wineName !== wine.wineName);

      // 4. Notificamos el cambio de manera reactiva a todos los componentes
      this.cartList.next(this._cartList);
    }
  }

    
  }


