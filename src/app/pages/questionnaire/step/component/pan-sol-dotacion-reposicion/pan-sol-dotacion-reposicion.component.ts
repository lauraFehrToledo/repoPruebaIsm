import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from 'src/app/shared/constants';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { StepService } from '../../service/step.service';
import { StepConstants } from '../../step.constants';

@Component({
  selector: 'app-pan-sol-dotacion-reposicion',
  templateUrl: './pan-sol-dotacion-reposicion.component.html',
  styleUrls: ['./pan-sol-dotacion-reposicion.component.scss']
})
export class PanSolDotacionReposicionComponent implements OnInit {

  public showSearch = false;

  constructor(
    public stepConstants: StepConstants,
    public constants: Constants,
    public stepService: StepService,
    public utilService: UtilsService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public buscar(): void {
    this.showSearch = true;
  }

  public aceptar(): void {
    this.utilService.number_step = this.utilService.number_step + 1;
    // AQUI CHEQUEAR SI NO HAY MAS CHECK SELECCIONADOS DEL PASO DOS
    // EN CASO DE NO HABER PASA A PanSolFin
    const path = this.stepConstants.URL_STEP;
    this.router.navigate([`${path}fin`]);
  }

}
