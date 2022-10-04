import { Component, OnInit } from '@angular/core';
import { StepConstants } from '../../../step.constants';

@Component({
  selector: 'app-datos-solicitud',
  templateUrl: './datos-solicitud.component.html',
  styleUrls: ['./datos-solicitud.component.scss']
})
export class DatosSolicitudComponent implements OnInit {

  constructor(public stepConstants: StepConstants) { }

  ngOnInit(): void {
  }

}
