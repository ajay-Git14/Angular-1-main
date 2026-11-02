import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
/** Import this file only inside loadComponent() so Angular can code split it. */
@Component({standalone:true,imports:[RouterLink],templateUrl:'./routing-lazy-report.html'})
export class RoutingLazyReport {readonly loadedAt='Opened through a dynamic import';}

