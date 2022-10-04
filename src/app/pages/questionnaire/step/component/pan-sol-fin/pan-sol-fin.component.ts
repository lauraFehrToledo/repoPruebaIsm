import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from 'src/app/shared/constants';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { StepService } from '../../service/step.service';
import { StepConstants } from '../../step.constants';

@Component({
  selector: 'app-pan-sol-fin',
  templateUrl: './pan-sol-fin.component.html',
  styleUrls: ['./pan-sol-fin.component.scss']
})
export class PanSolFinComponent implements OnInit {

  constructor(
    public stepConstants: StepConstants,
    public constants: Constants,
    public stepService: StepService,
    public utilService: UtilsService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public aceptar(): void {
    this.utilService.number_step = this.utilService.number_step + 1;
    // SI NO HAY DOC ADJUNTOS SE ABRE MODAL, SINO REDIRIGE
    const path = this.stepConstants.URL_STEP;
    this.router.navigate([`${path}resumen`]);
  }
}
