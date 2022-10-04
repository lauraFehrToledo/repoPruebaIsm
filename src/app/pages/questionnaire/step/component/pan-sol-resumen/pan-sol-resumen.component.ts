import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from 'src/app/shared/constants';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { StepService } from '../../service/step.service';
import { StepConstants } from '../../step.constants';

@Component({
  selector: 'app-pan-sol-resumen',
  templateUrl: './pan-sol-resumen.component.html',
  styleUrls: ['./pan-sol-resumen.component.scss']
})
export class PanSolResumenComponent implements OnInit {

  constructor(
    public stepConstants: StepConstants,
    public constants: Constants,
    public stepService: StepService,
    public utilService: UtilsService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public aceptar(): void{
    this.utilService.number_step = this.utilService.number_step + 1;
    // AQUI SE APLICA EL CUADRO DE FIRMA ELECTRONICA
    // Y ADEMAS PASA A MODAL REGISTRO
    const path = this.stepConstants.URL_STEP;
    this.router.navigate([`${path}registro`]);

  }

}
