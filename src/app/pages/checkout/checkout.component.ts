// checkout.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  cartItems = [
    { 
      id: 1, 
      name: 'Ebook - Dominando TypeScript', 
      description: 'Guia completo de TypeScript do básico ao avançado',
      price: 49.90, 
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=200&h=200&fit=crop'
    },
    { 
      id: 2, 
      name: 'Ebook - Angular Avançado', 
      description: 'Técnicas avançadas e boas práticas em Angular',
      price: 59.90, 
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=200&h=200&fit=crop'
    },
    { 
      id: 3, 
      name: 'Ebook - RxJS na Prática', 
      description: 'Programação reativa com RxJS e Observables',
      price: 39.90, 
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=200&h=200&fit=crop'
    }
  ];

  couponCode: string = '';
  discount: number = 0;
  paymentMethod: string = 'credit';
  showSuccess: boolean = false;

  get subtotal(): number {
    return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  get discountAmount(): number {
    return this.subtotal * this.discount;
  }

  get shipping(): number {
    return this.subtotal > 100 ? 0 : 9.90;
  }

  get total(): number {
    return this.subtotal - this.discountAmount + this.shipping;
  }

  updateQuantity(itemId: number, delta: number): void {
    const item = this.cartItems.find(i => i.id === itemId);
    if (item) {
      item.quantity = Math.max(1, item.quantity + delta);
    }
  }

  removeItem(itemId: number): void {
    this.cartItems = this.cartItems.filter(item => item.id !== itemId);
  }

  applyCoupon(): void {
    const upperCoupon = this.couponCode.toUpperCase();
    if (upperCoupon === 'DESC10') {
      this.discount = 0.10;
      alert('Cupom aplicado! 10% de desconto');
    } else if (upperCoupon === 'DESC20') {
      this.discount = 0.20;
      alert('Cupom aplicado! 20% de desconto');
    } else if (upperCoupon === 'PRIMEIRACOMPRA') {
      this.discount = 0.15;
      alert('Cupom aplicado! 15% de desconto');
    } else {
      this.discount = 0;
      alert('Cupom inválido');
    }
  }

  pay(): void {
    if (this.cartItems.length === 0) {
      alert('Carrinho vazio!');
      return;
    }

    this.showSuccess = true;
    
    setTimeout(() => {
      this.showSuccess = false;
      this.cartItems = [];
      this.couponCode = '';
      this.discount = 0;
    }, 3000);
  }
}