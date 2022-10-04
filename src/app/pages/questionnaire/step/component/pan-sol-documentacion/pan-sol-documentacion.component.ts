import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Constants } from 'src/app/shared/constants';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { StepConstants } from '../../step.constants';

@Component({
  selector: 'app-pan-sol-documentacion',
  templateUrl: './pan-sol-documentacion.component.html',
  styleUrls: ['./pan-sol-documentacion.component.scss']
})
export class PanSolDocumentacionComponent implements OnInit, OnDestroy {

  private suscripciones: Subscription = new Subscription();

  public isRepresentative = false;

  // Si se realiza busqueda se habilita
  public showSearch = false;


  constructor(public stepConstants: StepConstants,
    public constants: Constants,
    private router: Router,
    public utilsService: UtilsService) { }

  ngOnInit(): void {
  }



  ngOnDestroy(): void {
    this.suscripciones.unsubscribe();
  }

  public aceptar(): void {
    this.utilsService.number_step = this.utilsService.number_step + 1;
    // CHEQUEA QUE HAYA AL MENOS UN CHECK MARCADO Y REDIRIGE
    // TAMBIÉN HAY QUE COMPROBAR SI NO HAY MAS CHECKS DEL PASO DOS, EN CASO DE QUE NO, PASA A SOL.FIN
    const path = this.stepConstants.URL_STEP;
    this.router.navigate([`${path}fin`]);

  }


}
