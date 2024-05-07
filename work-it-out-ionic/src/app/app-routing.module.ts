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
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
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
    path: 'tracker',
    loadChildren: () => import('./pages/tracker/tracker.module').then( m => m.TrackerPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./pages/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'loading-spinner',
    loadChildren: () => import('./components/loading-spinner/loading-spinner.module').then( m => m.LoadingSpinnerPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
