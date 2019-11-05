import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; //функціональність routing
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';



const routes: Routes = [//маршрути
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, //автоматичний перехід до dashboard, навіть, коли /відсутній
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }
 ];
 

@NgModule({
 imports: [RouterModule.forRoot(routes)],//конфігурація маршрутів, метод постачає постачальників, виконує навігацію
 exports: [RouterModule]
})
export class AppRoutingModule { }