import { Component, OnInit } from '@angular/core';
import { StepConstants } from '../../../step.constants';

@Component({
  selector: 'app-datos-solicitante',
  templateUrl: './datos-solicitante.component.html',
  styleUrls: ['./datos-solicitante.component.scss']
})
export class DatosSolicitanteComponent implements OnInit {

  constructor(public stepConstants: StepConstants) { }

  ngOnInit(): void {
  }

}
