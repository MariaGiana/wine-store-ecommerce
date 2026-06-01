import { Component, OnInit } from '@angular/core';
import {WineCartService} from '../wine-cart.service';
import { Wines } from '../wines-list/Wines';
import { Observable } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-malbecnord-cart',
  standalone: false,
  templateUrl: './malbecnord-cart.component.html',
  styleUrl: './malbecnord-cart.component.scss'
})
export class MalbecnordCartComponent implements OnInit {
  wines: Wines[] = [];
  cartList$: Observable<Wines[]>;
  isCartOpen: boolean = false;
  private currentCartItems: Wines[] = [];

  constructor(
    private cart: WineCartService,
    private router: Router
  ) {
    this.cartList$ = cart.cartList.asObservable();
    {
    }

    this.cartList$.subscribe(items => {
      this.currentCartItems = items;
      
      if (items.length === 0) {
        this.isCartOpen = false;
      }
    });
  }
  ngOnInit(): void {}

  get showCartButton(): boolean {
    return this.isInCartPage || (this.currentCartItems && this.currentCartItems.length > 0);
  }

  get isInCartPage(): boolean {
    return this.router.url === '/cart';
  }
  toggleCart(): void {
    this.isCartOpen = !this.isCartOpen;
  }

  handleCartNavigation(): void {
    if (this.isInCartPage) {
      // Si ya estoy en el carrito, viajo al Home/Catálogo
      this.router.navigate(['/wines']); 
    } else {
      // Si estoy en la tienda, viajo al carrito
      this.router.navigate(['/cart']);
    }
  }

  deleteWine(wine: Wines): void {
    this.cart.removeFromCart(wine);
  }

 
}

