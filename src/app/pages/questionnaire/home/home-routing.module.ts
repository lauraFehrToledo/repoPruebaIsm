import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./component/home/home.component";

const routes: Routes = [
	{
		path: '', component: HomeComponent,
		children: [
			{path: 'step', loadChildren: () => import('../step/step.module').then(module => module.StepModule)}
			// {path: 'step', component: StepComponent}

		]
		// canActivateChild: [IsCitizenGuard, ProvinceInV2Guard],
		// children: [
		// 	{
		// 		path: '',
		// 		component: HomeComponent,
		// 		// data: {
		// 		// 	module: MODULE_NAME,
		// 		// },
		// 	},
		// ],
	},
    // {
	// 	path: 'step/:id',
	// 	loadChildren: () => import('../step/step.module').then(module => module.StepModule),
	// 	// canLoad: [IsCitizenGuard, HasQuestionsGuard],
	// 	// canActivate: [IsCitizenGuard, HasQuestionsGuard],
	// },

	// {
	// 	path: 'result',
	// 	loadChildren: () => import('../result/result.module').then(module => module.ResultModule),
	// 	canLoad: [IsCitizenGuard, HasQuestionsGuard],
	// 	canActivate: [IsCitizenGuard, HasQuestionsGuard],
	// },
	// {
	// 	path: 'identification',
	// 	loadChildren: () => import('../identification/identification.module').then(module => module.IdentificationModule),
	// 	//canLoad: [IsCitizenGuard, HasAnswersGuard, DidNotVisitFormGuard, DidNotVisitVideoidentificationGuard],
	// 	//canActivate: [DidNotVisitFormGuard, HasAnswersGuard, DidNotVisitVideoidentificationGuard],
	// },
	// {
	// 	path: 'videoidentification',
	// 	loadChildren: () => import('../videoidentification/videoidentification.module').then(module => module.VideoidentificationModule),
	// 	canLoad: [IsCitizenGuard, HasAnswersGuard, DidNotVisitFormGuard],
	// 	canActivate: [DidNotVisitFormGuard, HasAnswersGuard],
	// },
	// {
	// 	path: 'photo/:id',
	// 	loadChildren: () => import('../photo/photo.module').then(module => module.PhotoModule),
	// },
	// {
	// 	path: '**',
	// 	// redirectTo: '404',
	// },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class HomeRoutingModule {}
