import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './views/landing/landing.component';
import { OrphanageComponent } from './views/orphanage/orphanage.component';
import { OrphanageCreateComponent } from './views/orphanage-create/orphanage-create.component';
import { OrphanageMapComponent } from './views/orphanage-map/orphanage-map.component';

// https://stackoverflow.com/questions/53614857/is-there-a-way-to-name-a-route-in-angular-7
export class RouteNames {
  public static routeNamesObject = {}
}

const routes: Routes = [
  {path: '/', component: LandingComponent, data: {routeName: "home"}},
  {path: '/app', component: OrphanageComponent, data: {routeName: "map"}},
  {path: '/orphanages/create', component: OrphanageCreateComponent, data: {routeName: "create"}},
  {path: '/orphanages/:id', component: OrphanageMapComponent, data: {routeName: "show"}},
];

routes.forEach((eachRoute) => {
  RouteNames.routeNamesObject[eachRoute.data.routeName] = eachRoute.path;
})

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
