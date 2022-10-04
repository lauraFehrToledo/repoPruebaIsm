import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { HomeComponent } from "./component/home/home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeService } from "./service/home.service";
import { HomeConstants } from "./home.constants";


@NgModule({
	declarations: [    
    HomeComponent
  ],
	imports: [
		CommonModule,
        HomeRoutingModule,
        SharedModule
		// HomeApiModule,
		// HomeRoutingModule,
		// SharedModule,
		// I18nModule.forFeature(MODULE_NAME),
		// EffectsModule.forFeature([HomeEffects]),
		// StoreModule.forFeature(featureStoreName, homeReducer),
	],
	providers: [
        HomeService, 
        HomeConstants
        // HasQuestionsGuard,
        // HasAnswersGuard,
        // IsCitizenGuard,
        // DidNotVisitFormGuard,
        // DidNotVisitVideoidentificationGuard,
        // ProvinceInV2Guard
    ],
	entryComponents: [
        // HomeComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule {}
