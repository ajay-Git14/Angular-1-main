import { Routes } from '@angular/router';
import { RoutingLazyFeature } from './routing-lazy-feature';
/** Dynamically imported by the root route with loadChildren(). */
export const routingLazyRoutes:Routes=[
 {path:'',component:RoutingLazyFeature,children:[
   {path:'',redirectTo:'detail',pathMatch:'full'},
   {path:'detail',loadComponent:()=>import('./routing-lazy-detail').then(m=>m.RoutingLazyDetail)}
 ]}
];

