import { CurrencyPipe, DatePipe, NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

export class CheckoutDialogComponent {
  data!: { qty: number; unit: number; total: number; pixCode: string };
  copy() {
    navigator.clipboard.writeText(this.data.pixCode).catch(() => {});
  }
}

export type Draw = { title: string; date: string }; // ISO string
const toDate = (d: string) => new Date(d);

@Component({
  selector: 'app-payment-checkout',
  templateUrl: './payment-checkout.component.html',
  styleUrl: './payment-checkout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgIf, NgFor, NgOptimizedImage, DatePipe, CurrencyPipe,
    MatCardModule, MatButtonModule, MatIconModule, MatChipsModule, MatDividerModule, MatDialogModule, FormsModule
  ]
})
export class PaymentCheckoutComponent {
  // private api = inject(ApiService);
  private api: any;
  private dialog = inject(MatDialog);
  comprovar: boolean = false;

  // UI data
  bannerUrl = '../assets/hero-02.webp'; // troque pelo seu banner
  unitPrice = 1.99;

  draws: Draw[] = [
    { title: '1º Cem Mil Reais',        date: '2025-09-22T20:00:00-03:00' },
    { title: '2º Cem Mil Reais',        date: '2025-09-24T20:00:00-03:00' },
    { title: 'Um Milhão de Reais',      date: '2025-09-26T20:00:00-03:00' },
  ];

  // Estado
  qty = signal(10);
  now = signal(new Date());
  nextDraw = computed(() => {
    const now = this.now().getTime();
    const future = this.draws
      .map(d => toDate(d.date))
      .filter(d => d.getTime() > now)
      .sort((a,b) => a.getTime() - b.getTime())[0];
    return future ?? toDate(this.draws.at(-1)!.date);
  });

  remaining = computed(() => {
    const ms = this.nextDraw().getTime() - this.now().getTime();
    const s = Math.max(0, Math.floor(ms/1000));
    const days = Math.floor(s/86400);
    const hours = Math.floor((s % 86400) / 3600);
    const mins = Math.floor((s % 3600) / 60);
    return { days, hours, mins };
  });

  total = computed(() => +(this.qty() * this.unitPrice).toFixed(2));

  // ticker para o contador
  _tick = effect(() => {
    const id = setInterval(() => this.now.set(new Date()), 1000);
    return () => clearInterval(id);
  });

  // ações
  add(n: number) { this.qty.update(q => Math.min(10000, q + n)); }
  sub(n: number) { this.qty.update(q => Math.max(0, q - n)); }
  step(n: number) { this.add(n); }
  setQty(v: number) { this.qty.set(Math.max(0, Math.min(10000, Math.floor(v || 0)))); }

  comprar() {
    const payload = { quantity: this.qty(), unit: this.unitPrice, total: this.total() };

    // Exemplo real:
    // this.api.post<{pixCode: string}>('/checkout', payload).subscribe(resp => { ... });
    // Mock:
    const resp = { pixCode: `0002012658BR.GOV.BCB.PIX0136chave@exemplo.com.br5204000053039865407${payload.total.toFixed(2).replace('.',',')}5802BR5920PIX DO MILHAO6009SAO PAULO62070503***6304ABCD` };

    this.dialog.open(CheckoutDialogComponent, {
      data: { qty: payload.quantity, unit: payload.unit, total: payload.total, pixCode: resp.pixCode }
    });
  }
}
