import { Routes } from '@angular/router';
import { OwnersListComponent } from './components/owners-list/owners-list.component';
import { DetailOwnerComponent } from './components/detail-owner/detail-owner.component';
import { HomeComponent } from './components/home/home.component';
import { AddOwnerFormComponent } from './components/add-owner-form/add-owner-form.component';
import { VetsListComponent } from './components/vets-list/vets-list.component';
import { AddVetFormComponent } from './components/add-vet-form/add-vet-form.component';
import { PetTypeComponent } from './components/pet-type/pet-type.component';
import { AddTypeComponent } from './components/add-type/add-type.component';

export const routes: Routes = 
[
    {
        path:"",
        component:HomeComponent
    },
    {
        path:"owner",
        component: OwnersListComponent
    },
    {
        path:"owner/:id",
        component:DetailOwnerComponent
    },
    {
        path:"add-owner/:id",
        component:AddOwnerFormComponent
    },
    {
        path:"vet",
        component:VetsListComponent
    },
    {
        path:"add-vet/:id",
        component:AddVetFormComponent
    },
    {
        path:"type",
        component:PetTypeComponent
    }
];
