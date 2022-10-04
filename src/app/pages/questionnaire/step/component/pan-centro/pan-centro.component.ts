import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Constants } from 'src/app/shared/constants';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { StepService } from '../../service/step.service';
import { StepConstants } from '../../step.constants';

@Component({
  selector: 'app-pan-centro',
  templateUrl: './pan-centro.component.html',
  styleUrls: ['./pan-centro.component.scss']
})
export class PanCentroComponent implements OnInit, OnDestroy {

  private suscripciones: Subscription = new Subscription();

  public isRepresentative = false;

  // Si se realiza busqueda se habilita
  public showSearch = false;


  constructor(public stepConstants: StepConstants,
    public constants: Constants,
    public stepService: StepService,
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
    // GUARDA LOS DATOS DE ESTA PANTALLA Y LUEGO ENVIA UN EMITTER A EL STEP PADRE
    const path = this.stepConstants.URL_STEP;

    switch(this.stepService.request_type) {
      case this.constants.REQUEST_TYPE.inicial:
        this.router.navigate([`${path}dotacionReposicion`]);
        break;
      
      case this.constants.REQUEST_TYPE.periodica:
        // aqui analizar caso
        break;

      case this.constants.REQUEST_TYPE.documentacion:
        this.router.navigate([`${path}documentacion`]);
        break;
        
      default:
        // AQUI MENSAJE SI NO ES NINGUNA DE LAS OPCIONES ANTERIORES
        this.router.navigate([`${path}`]);
        break;
    }
    this.utilService.number_step = this.utilService.number_step + 1;

  }

  public buscarCentros(): void {
    this.showSearch = true;
  }
}
