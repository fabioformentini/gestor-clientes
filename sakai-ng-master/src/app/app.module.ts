import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import {TableModule} from "primeng/table";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        TableModule],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
