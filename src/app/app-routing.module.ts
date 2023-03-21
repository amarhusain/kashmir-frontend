import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{
		path: "about",
		loadChildren: () =>
			import("./about/about.module").then((m) => m.AboutModule),
	},
	{
		path: "kaftan",
		loadChildren: () =>
			import("./kaftan/kaftan.module").then((m) => m.KaftanModule),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
