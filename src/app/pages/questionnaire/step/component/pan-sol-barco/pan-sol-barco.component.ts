import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from 'src/app/shared/constants';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { StepService } from '../../service/step.service';
import { StepConstants } from '../../step.constants';

@Component({
  selector: 'app-pan-sol-barco',
  templateUrl: './pan-sol-barco.component.html',
  styleUrls: ['./pan-sol-barco.component.scss']
})
export class PanSolBarcoComponent implements OnInit {

  constructor(
    public stepConstants: StepConstants,
    public constants: Constants,
    public stepService: StepService,
    public utilService: UtilsService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public aceptar():void {
    this.utilService.number_step = this.utilService.number_step + 1;
    // SE CHEQUEA SI NO HAY MAS CHECK SELECCIONADOS EN PASO 2 Y SE REDIRIGE
    const path = this.stepConstants.URL_STEP;
    this.router.navigate([`${path}fin`]);
  }

}
