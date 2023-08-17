import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('@routes/home').then((exportsObject) => exportsObject.homeRoutes),
  // },
  {
    path: 'contact-us',
    loadChildren: () =>
      import('@routes/contact-us').then(
        (exportsObject) => exportsObject.ContactUsModule
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('@routes/home').then((exportsObject) => exportsObject.HomeModule),
  },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
];
