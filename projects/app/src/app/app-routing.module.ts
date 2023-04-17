import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'home'
},
{
  path: 'home',
  children: [
    { 
      path: '',
      component: HomeComponent
    }
  ]
},
{
  path: 'lazy',
  loadChildren: () => import('./components/lazy-loaded/lazy-loaded.module').then( m => m.LazyLoadedModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
