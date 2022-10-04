import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { StepService } from "./service/step.service";
import { StepRoutingModule } from "./step-routing.module";
import { StepConstants } from "./step.constants";
import { StepComponent } from './component/step/step.component';
import { PanSolicitanteRepresentanteComponent } from './component/pan-solicitante-representante/pan-solicitante-representante.component';
import { PanTipoSolicitudBarcoComponent } from './component/pan-tipo-solicitud-barco/pan-tipo-solicitud-barco.component';
import { PanSolDocumentacionComponent } from './component/pan-sol-documentacion/pan-sol-documentacion.component';
import { PanCentroComponent } from './component/pan-centro/pan-centro.component';
import { PanSolIniciadaComponent } from './component/pan-sol-iniciada/pan-sol-iniciada.component';
import { DatosSolicitanteComponent } from './component/fragment/datos-solicitante/datos-solicitante.component';
import { DatosSolicitudComponent } from './component/fragment/datos-solicitud/datos-solicitud.component';
import { PanSolDotacionReposicionComponent } from './component/pan-sol-dotacion-reposicion/pan-sol-dotacion-reposicion.component';
import { PanSolFinComponent } from './component/pan-sol-fin/pan-sol-fin.component';
import { PanSolBarcoComponent } from './component/pan-sol-barco/pan-sol-barco.component';
import { PanSolResumenComponent } from './component/pan-sol-resumen/pan-sol-resumen.component';
import { PanRegistroComponent } from './component/pan-registro/pan-registro.component';
import { BtnUpComponent } from './component/fragment/btn-up/btn-up.component';


@NgModule({
	declarations: [ 
        StepComponent, 
        PanSolicitanteRepresentanteComponent, 
        PanTipoSolicitudBarcoComponent,
        PanSolDocumentacionComponent, 
        PanCentroComponent, 
        PanSolIniciadaComponent, 
        DatosSolicitanteComponent, 
        DatosSolicitudComponent, 
        PanSolDotacionReposicionComponent, 
        PanSolFinComponent, 
        PanSolBarcoComponent, 
        PanSolResumenComponent, 
        PanRegistroComponent, BtnUpComponent
    ],
	imports: [
		CommonModule,
        StepRoutingModule,
        SharedModule
		// HomeApiModule,
		// HomeRoutingModule,
		// SharedModule,
		// I18nModule.forFeature(MODULE_NAME),
		// EffectsModule.forFeature([HomeEffects]),
		// StoreModule.forFeature(featureStoreName, homeReducer),
	],
	providers: [
        StepService, 
        StepConstants
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
export class StepModule {}
