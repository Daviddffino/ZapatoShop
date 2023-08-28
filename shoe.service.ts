import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Shoe } from './shoe.model';

@Injectable({
  providedIn: 'root'
})
export class ShoeService {
  private shoes: Shoe[] = []; // Lista de zapatos disponibles
  private cart: Shoe[] = []; // Lista de zapatos en el carrito

  constructor() {
    // Inicializa la lista de zapatos (puedes hacerlo con datos de ejemplo)
    this.shoes = [
      // ... (agrega los datos de zapatos)
    ];
  }

  getShoes(): Observable<Shoe[]> {
    return of(this.shoes);
  }

  addToCart(shoe: Shoe): void {
    this.cart.push(shoe);
  }

  removeFromCart(shoe: Shoe): void {
    const index = this.cart.indexOf(shoe);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  }

  getCart(): Shoe[] {
    return this.cart;
  }
}
