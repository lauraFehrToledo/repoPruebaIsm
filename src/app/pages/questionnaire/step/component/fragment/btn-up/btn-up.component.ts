import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/shared/constants';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-btn-up',
  templateUrl: './btn-up.component.html',
  styleUrls: ['./btn-up.component.scss']
})
export class BtnUpComponent implements OnInit {

  constructor(public constants: Constants,
    public utilService: UtilsService) { }

  ngOnInit(): void {
  }

}
