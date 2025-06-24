import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Layout } from './shared/layout/layout';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Layout, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})
export class App {
  protected title = 'angular-dev';
}
