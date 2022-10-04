import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/shared/constants';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { HomeConstants } from '../../home.constants';
import { HomeService } from '../../service/home.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(public service: HomeService,
    public constants: Constants,
    public utilsService: UtilsService,
    public homeConstants: HomeConstants,
    private location: Location,
    private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    // this.getPrueba();

    // MOCKS
    this.utilsService.header_data.userName = 'Santiago Perez Rodriguez';

  }

  ngAfterViewInit() {
    this.utilsService.number_step = 1;
    this.ref.detectChanges();
}

  // getPrueba() {
  //   this.service.getPrueba().subscribe(
  //     (res) => {
  //       console.log(res);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   )
  // }

  public print(): void {
    // Ver boceto de como quieren que se imprima.
    window.print();
  }

  public back(): void {
    this.utilsService.number_step = this.utilsService.number_step - 1
    this.location.back();
  }

}
