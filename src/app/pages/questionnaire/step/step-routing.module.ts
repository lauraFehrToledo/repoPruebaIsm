import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PanCentroComponent } from "./component/pan-centro/pan-centro.component";
import { PanRegistroComponent } from "./component/pan-registro/pan-registro.component";
import { PanSolBarcoComponent } from "./component/pan-sol-barco/pan-sol-barco.component";
import { PanSolDocumentacionComponent } from "./component/pan-sol-documentacion/pan-sol-documentacion.component";
import { PanSolDotacionReposicionComponent } from "./component/pan-sol-dotacion-reposicion/pan-sol-dotacion-reposicion.component";
import { PanSolFinComponent } from "./component/pan-sol-fin/pan-sol-fin.component";
import { PanSolIniciadaComponent } from "./component/pan-sol-iniciada/pan-sol-iniciada.component";
import { PanSolResumenComponent } from "./component/pan-sol-resumen/pan-sol-resumen.component";
import { PanSolicitanteRepresentanteComponent } from "./component/pan-solicitante-representante/pan-solicitante-representante.component";
import { PanTipoSolicitudBarcoComponent } from "./component/pan-tipo-solicitud-barco/pan-tipo-solicitud-barco.component";
import { StepComponent } from "./component/step/step.component";


const routes: Routes = [
	{
		path: '', component: StepComponent,
		children: [
			{path: 'solicitante', component: PanSolicitanteRepresentanteComponent},
            {path: 'tipoSolicitud', component: PanTipoSolicitudBarcoComponent},
            {path: 'busquedaCentro', component: PanCentroComponent},
            {path: 'dotacionReposicion', component: PanSolDotacionReposicionComponent},
            {path: 'documentacion', component: PanSolDocumentacionComponent},
            {path: 'fin', component: PanSolFinComponent},
            {path: 'solicitudIniciada', component: PanSolIniciadaComponent},
            {path: 'barco', component: PanSolBarcoComponent},
            {path: 'resumen', component: PanSolResumenComponent},
            {path: 'registro', component: PanRegistroComponent}

		]

	}
    
	// {
	// 	path: '**',
	// 	// redirectTo: '404',
	// },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class StepRoutingModule {}
