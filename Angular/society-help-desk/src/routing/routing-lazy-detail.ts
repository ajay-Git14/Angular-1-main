import { Component } from '@angular/core';
@Component({standalone:true,template:'<h2>Nested lazy detail</h2><p>Loaded via a second loadComponent import after the lazy route configuration.</p>'})
export class RoutingLazyDetail {}

