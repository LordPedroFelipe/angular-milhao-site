import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent), title: 'Início' },
  { path: 'ganhadores', loadComponent: () => import('./pages/winners/winners.component').then(m => m.WinnersComponent), title: 'Ganhadores' },
  { path: 'quem-somos', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent), title: 'Quem Somos' },
  { path: 'fale-conosco', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent), title: 'Fale Conosco' },
  { path: 'edicoes-anteriores', loadComponent: () => import('./pages/editions/editions.component').then(m => m.EditionsComponent), title: 'Edições Anteriores' },
  { path: 'meus-ebooks', loadComponent: () => import('./pages/my-ebooks/my-ebooks.component').then(m => m.MyEbooksComponent), title: 'Meus Ebooks' },
  { path: 'meus-titulos', loadComponent: () => import('./pages/my-titles/my-titles.component').then(m => m.MyTitlesComponent), title: 'Meus Títulos' },
  { path: 'comprar', loadComponent: () => import('./pages/buy/buy.component').then(m => m.BuyComponent), title: 'Comprar Ebooks' },
  { path: 'checkout', loadComponent: () => import('./pages/checkout/checkout.component').then(m => m.CheckoutComponent), title: 'Checkout' },
  { path: 'pagamento', loadComponent: () => import('./pages/payment-checkout/payment-checkout.component').then(m => m.PaymentCheckoutComponent), title: 'Pagamento' },
  { path: '**', redirectTo: '' }
];