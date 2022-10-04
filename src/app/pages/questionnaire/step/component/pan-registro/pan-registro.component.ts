import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/shared/constants';
import { StepConstants } from '../../step.constants';

@Component({
  selector: 'app-pan-registro',
  templateUrl: './pan-registro.component.html',
  styleUrls: ['./pan-registro.component.scss']
})
export class PanRegistroComponent implements OnInit {

  constructor(public stepConstants: StepConstants,
    public constants: Constants) { }

  ngOnInit(): void {
  }

}
