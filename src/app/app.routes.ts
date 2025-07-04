import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Product } from './product/product';
import { Contact } from './contact/contact';

import { Layout } from './shared/layout/layout';
import { Notfound } from './shared/notfound/notfound';
import { ProductDetails } from './product-details/product-details';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', component: Home },
      { path: 'about', component: About },
      { path: 'products', component: Product },
      { path: 'products/:id', component: ProductDetails },
      { path: 'contact', component: Contact },
      { path: '**', component: Notfound },
    ],
  },
];
