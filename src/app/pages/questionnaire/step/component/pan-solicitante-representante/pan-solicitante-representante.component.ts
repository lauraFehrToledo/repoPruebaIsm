import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Constants } from 'src/app/shared/constants';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { StepService } from '../../service/step.service';
import { StepConstants } from '../../step.constants';

@Component({
  selector: 'app-pan-solicitante-representante',
  templateUrl: './pan-solicitante-representante.component.html',
  styleUrls: ['./pan-solicitante-representante.component.scss']
})
export class PanSolicitanteRepresentanteComponent implements OnInit, OnDestroy {

  public numberStep: number = null;

  private suscripciones: Subscription = new Subscription();

  public isRepresentative = false;

  constructor(public stepConstants: StepConstants,
    public constants: Constants,
    private stepService: StepService,
    public utilService: UtilsService,
    private router: Router) { }

  ngOnInit(): void {
    this.loadConfig();
  }

  private loadConfig() {
    this.isRepresentative = this.constants.TYPE_ROL_USER.representate === this.stepService.rolUser 
    // this.utilService.number_step = 1;
  }

  ngOnDestroy(): void {
    this.suscripciones.unsubscribe();
  }

  public aceptar(): void {   

    // da el numero de paso 
    this.utilService.number_step = this.utilService.number_step + 1;

    // GUARDA LOS DATOS DE ESTA PANTALLA y sigue a la siguiente pantalla
    const path = this.stepConstants.URL_STEP + 'tipoSolicitud';
    this.router.navigate([`${path}`]);
  }
}
