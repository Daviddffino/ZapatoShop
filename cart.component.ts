import { Component, OnInit } from '@angular/core';
import { ShoeService } from '../shoe.service'; // Asegúrate de importar el servicio adecuado
import { Shoe } from '../shoe.model'; // Asegúrate de importar la interfaz Shoe adecuada

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Shoe[] = [];
  total: number = 0;

  constructor(private shoeService: ShoeService) {}

  ngOnInit(): void {
    this.getCart();
  }

  getCart(): void {
    this.cart = this.shoeService.getCart();
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.total = this.cart.reduce((total, shoe) => total + shoe.price, 0);
  }

  removeFromCart(shoe: Shoe): void {
    this.shoeService.removeFromCart(shoe);
    this.getCart(); // Actualiza el carrito después de eliminar un producto
  }
}
