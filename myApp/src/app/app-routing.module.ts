import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'chicken-teriyaki',
    loadChildren: () => import('./chicken-teriyaki/chicken-teriyaki.module').then( m => m.ChickenTeriyakiPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'kung-pao-chicken',
    loadChildren: () => import('./kung-pao-chicken/kung-pao-chicken.module').then( m => m.KungPaoChickenPageModule)
  },
  {
    path: 'french-toast',
    loadChildren: () => import('./french-toast/french-toast.module').then( m => m.FrenchToastPageModule)
  },
  {
    path: 'butter-chicken',
    loadChildren: () => import('./butter-chicken/butter-chicken.module').then( m => m.ButterChickenPageModule)
  },
  {
    path: 'pancakes',
    loadChildren: () => import('./pancakes/pancakes.module').then( m => m.PancakesPageModule)
  },
  {
    path: 'split-pea-soup',
    loadChildren: () => import('./split-pea-soup/split-pea-soup.module').then( m => m.SplitPeaSoupPageModule)
  },
  {
    path: 'panna-cotta',
    loadChildren: () => import('./panna-cotta/panna-cotta.module').then( m => m.PannaCottaPageModule)
  },
  {
    path: 'jamaican-jerk-chicken',
    loadChildren: () => import('./jamaican-jerk-chicken/jamaican-jerk-chicken.module').then( m => m.JamaicanJerkChickenPageModule)
  },
  {
    path: 'pumpkin-pie',
    loadChildren: () => import('./pumpkin-pie/pumpkin-pie.module').then( m => m.PumpkinPiePageModule)
  },
  {
    path: 'beef-quiche',
    loadChildren: () => import('./beef-quiche/beef-quiche.module').then( m => m.BeefQuichePageModule)
  },
  {
    path: 'chocolate-chip-cookie',
    loadChildren: () => import('./chocolate-chip-cookie/chocolate-chip-cookie.module').then( m => m.ChocolateChipCookiePageModule)
  },
  {
    path: 'bloody-mary',
    loadChildren: () => import('./bloody-mary/bloody-mary.module').then( m => m.BloodyMaryPageModule)
  },
  {
    path: 'cosmopolitan',
    loadChildren: () => import('./cosmopolitan/cosmopolitan.module').then( m => m.CosmopolitanPageModule)
  },
  {
    path: 'calzone',
    loadChildren: () => import('./calzone/calzone.module').then( m => m.CalzonePageModule)
  },
  {
    path: 'trending',
    loadChildren: () => import('./trending/trending.module').then( m => m.TrendingPageModule)
  },
  {
    path: 'your-favorites',
    loadChildren: () => import('./your-favorites/your-favorites.module').then( m => m.YourFavoritesPageModule)
  },
  {
    path: 'previous-recipe',
    loadChildren: () => import('./previous-recipe/previous-recipe.module').then( m => m.PreviousRecipePageModule)
  },
  {
    path: 'pommes-anna',
    loadChildren: () => import('./pommes-anna/pommes-anna.module').then( m => m.PommesAnnaPageModule)
  },
  {
    path: 'chocolate-souffle',
    loadChildren: () => import('./chocolate-souffle/chocolate-souffle.module').then( m => m.ChocolateSoufflePageModule)
  },
  {
    path: 'mai-tai',
    loadChildren: () => import('./mai-tai/mai-tai.module').then( m => m.MaiTaiPageModule)
  },
  {
    path: 'caipirinha',
    loadChildren: () => import('./caipirinha/caipirinha.module').then( m => m.CaipirinhaPageModule)
  },
  {
    path: 'mint-julep',
    loadChildren: () => import('./mint-julep/mint-julep.module').then( m => m.MintJulepPageModule)
  },
  {
    path: 'negroni',
    loadChildren: () => import('./negroni/negroni.module').then( m => m.NegroniPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
