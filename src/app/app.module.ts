import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';

import { FooterComponent } from './footer/footer.component';

import { SimplePageComponent } from './simple-page/simple-page.component';

import { RouterModule, Routes } from '@angular/router';

import { AnotherSimplePageComponent } from './another-simple-page/another-simple-page.component';

const appRoutes: Routes = [
  { path: '', component: SimplePageComponent},
  { path: 'something', component: AnotherSimplePageComponent },
  { path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];


@NgModule({

  declarations: [

    AppComponent,

    HeaderComponent,

    FooterComponent,

    SimplePageComponent,

    AnotherSimplePageComponent

  ],

  imports: [

    BrowserModule
,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],

  providers: [],

  bootstrap: [AppComponent]
})

export class AppModule { }
