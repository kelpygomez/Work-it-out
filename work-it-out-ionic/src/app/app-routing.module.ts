import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'header',
    loadChildren: () => import('./components/header/header.module').then( m => m.HeaderPageModule)
  },
  {
    path: 'footer',
    loadChildren: () => import('./components/footer/footer.module').then( m => m.FooterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'exercise-list',
    loadChildren: () => import('./pages/exercise-list/exercise-list.module').then( m => m.ExerciseListPageModule)
  },
  {
    path: 'exercise-detail/:id',
    loadChildren: () => import('./pages/exercise-detail/exercise-detail.module').then( m => m.ExerciseDetailPageModule)
  },
  {
    path: 'routines-list',
    loadChildren: () => import('./pages/routines-list/routines-list.module').then( m => m.RoutinesListPageModule)
  },
  {
    path: 'routine-maker/:id',
    loadChildren: () => import('./pages/routine-maker/routine-maker.module').then( m => m.RoutineMakerPageModule)
  },
  {
    path: 'profile-detail',
    loadChildren: () => import('./pages/profile-detail/profile-detail.module').then( m => m.ProfileDetailPageModule)
  },
  {
    path: 'profile-edit',
    loadChildren: () => import('./pages/profile-edit/profile-edit.module').then( m => m.ProfileEditPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
