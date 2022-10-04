import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/shared/constants';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { StepService } from '../../service/step.service';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {

  constructor(private stepService: StepService,
    public constants: Constants,
    private utilsService: UtilsService) { }

  ngOnInit(): void {
    // MOCKS
    this.stepService.rolUser = this.constants.TYPE_ROL_USER.representate; // rol del usuario que inicia sesion.
    this.stepService.request_type = '1'; // tipo de opción seleccionada en paso 2.
    this.stepService.rewiev_status = 'S'; // si es revisión periodica puede tener 4 estados la solicitud
  }

}
