import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Constants } from 'src/app/shared/constants';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { StepService } from '../../service/step.service';
import { StepConstants } from '../../step.constants';

@Component({
  selector: 'app-pan-sol-iniciada',
  templateUrl: './pan-sol-iniciada.component.html',
  styleUrls: ['./pan-sol-iniciada.component.scss']
})
export class PanSolIniciadaComponent implements OnInit, OnDestroy {

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
    console.log(this.stepService.request_type)
  }

  private loadConfig() {
    this.isRepresentative = this.constants.TYPE_ROL_USER.representate === this.stepService.rolUser; 
  }

  ngOnDestroy(): void {
    this.suscripciones.unsubscribe();
  }


  public buscarCentros(): void {
    this.showSearch = true;
  }

  public continuar(): void {
    this.utilService.number_step = this.utilService.number_step + 1;
    // EN CASO DE PULSAR CONTINUAR REDIRIGE A SOL.BARCO
    const path = this.stepConstants.URL_STEP;
    this.router.navigate([`${path}barco`]);
  }

  public nuevaSolicitud(): void {
    this.utilService.number_step = this.utilService.number_step + 1;
    // EN CASO DE PULSAR CONTINUAR REDIRIGE A PAN.CENTRO Y CREA UNA NUEVA SOLICITUD INICIAL
    const path = this.stepConstants.URL_STEP;
    this.router.navigate([`${path}busquedaCentro`]);
  }


}
