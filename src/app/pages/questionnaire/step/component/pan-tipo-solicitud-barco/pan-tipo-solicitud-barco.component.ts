import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Constants } from 'src/app/shared/constants';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { StepService } from '../../service/step.service';
import { StepConstants } from '../../step.constants';

@Component({
  selector: 'app-pan-tipo-solicitud-barco',
  templateUrl: './pan-tipo-solicitud-barco.component.html',
  styleUrls: ['./pan-tipo-solicitud-barco.component.scss']
})
export class PanTipoSolicitudBarcoComponent implements OnInit {


  public numberStep: number = null;

  private suscripciones: Subscription = new Subscription();

  public isRepresentative = false;

  public showSearch = false;

  constructor(public stepConstants: StepConstants,
    public constants: Constants,
    private stepService: StepService,
    public utilService: UtilsService,
    private router: Router) { }

  ngOnInit(): void {
    this.loadConfig();
  }

  private loadConfig() {
    this.isRepresentative = this.constants.TYPE_ROL_USER.representate === this.stepService.rolUser;
  }

  ngOnDestroy(): void {
    this.suscripciones.unsubscribe();
  }

  public aceptar(): void {
    this.utilService.number_step = this.utilService.number_step + 1;

    // SE TOMAN LOS DATOS DEL NIB, CENTRO ETC Y SE GUARDAN PARA METER EN LA CABECERA.
    this.utilService.header_data.hidden = false; // habilita la linea de cabecera para que se muestre texto
    this.utilService.header_data.nib = '2';
    this.utilService.header_data.boatName = 'AMAYA';
    this.utilService.header_data.registration = '3-VILL-3-6978';
    this.utilService.header_data.center = '0800 BARCELONA';

    // GUARDA LOS DATOS DE ESTA PANTALLA Y REDIRIGE DEPENDIENDO EL CHECK SELECCIONADO.
    const path = this.stepConstants.URL_STEP;

    switch(this.stepService.request_type) {
      case this.constants.REQUEST_TYPE.inicial:
        this.router.navigate([`${path}busquedaCentro`]);
        break;

      case this.constants.REQUEST_TYPE.periodica:
        this.stepService.rewiev_status === this.constants.REVIEW_STATUS.pendiente || this.stepService.rewiev_status === this.constants.REVIEW_STATUS.subsanada ? 'AQUI MODAL': null;
        this.stepService.rewiev_status === this.constants.REVIEW_STATUS.iniciada ? this.router.navigate([`${path}solicitudIniciada`]) : null;
        this.stepService.rewiev_status === this.constants.REVIEW_STATUS.pendiente_subsanacion ? this.router.navigate([`${path}documentacion`]) : null;
        break;

      case this.constants.REQUEST_TYPE.documentacion:
        this.router.navigate([`${path}busquedaCentro`]);
        break;

      default:
        // AQUI MENSAJE SI NO ES NINGUNA DE LAS OPCIONES ANTERIORES
        this.router.navigate([`${path}`]);
        break;
    }
  }

  public buscar(): void {
    this.showSearch = true;
  }


}
