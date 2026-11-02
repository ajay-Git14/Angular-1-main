import { Component, inject, input } from '@angular/core';
import { SCOPE_LABEL, ScopedCounterService, SharedCounterService } from './di-services';

/** Each child has a fresh ScopedCounterService; root counter stays shared. */
@Component({
  standalone:true,
  selector:'app-di-scope-panel',
  templateUrl:'./di-scope-panel.html',
  providers:[
    ScopedCounterService,
    {provide:SCOPE_LABEL,useValue:'Component-local provider'}
  ]
})
export class DiScopePanel {
  readonly label=input('Desk');
  readonly root=inject(SharedCounterService);
  readonly local=inject(ScopedCounterService);
  readonly scopedLabel=inject(SCOPE_LABEL);
}

