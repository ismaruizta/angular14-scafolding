import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared.module';
// import { UiArrowLink } from '../../../../mova3-components/components';

@Component({
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class PublicHomeComponent implements OnInit {

  constructor() { }

  onSave(){
    console.log("hola");
  }

  ngOnInit(): void {
  }

}
