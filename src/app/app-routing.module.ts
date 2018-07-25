import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GridComponent } from './components/grid/grid.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { TypographyComponent } from './components/typography/typography.component';
import { FormsComponent } from './components/forms/forms.component';
import { ModalsComponent } from './components/modals/modals.component';
import { PlaygroundComponent } from './components/playground/playground.component';
import { UtilitiesComponent } from './components/utilities/utilities.component';
import { ImagesComponent } from './components/images/images.component';

const routes: Routes = [
    {
        path: 'grid',
        component: GridComponent
    },
    {
        path: 'buttons',
        component: ButtonsComponent
    },
    {
        path: 'typography',
        component: TypographyComponent
    },
    {
        path: 'forms',
        component: FormsComponent
    },
    {
        path: 'modals',
        component: ModalsComponent
    },
    {
        path: 'playground',
        component: PlaygroundComponent
    },
    {
        path: 'utilities',
        component: UtilitiesComponent
    },
    {
        path: 'images',
        component: ImagesComponent
    },
    {
        path: '',
        component: HomeComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
  })

  export class AppRoutingModule { }
