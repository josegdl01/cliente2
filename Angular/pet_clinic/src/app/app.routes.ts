import { Routes } from '@angular/router';
import { OwnersListComponent } from './components/owners-list/owners-list.component';
import { DetailOwnerComponent } from './components/detail-owner/detail-owner.component';

export const routes: Routes = 
[
    {
        path:"owner",
        component: OwnersListComponent
    },
    {
        path:"owner/:id",
        component:DetailOwnerComponent
    }
];
