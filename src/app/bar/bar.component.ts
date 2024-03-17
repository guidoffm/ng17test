import { Component } from '@angular/core';
import { Svc1Service } from '../svc1.service';

@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [],
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.scss'
})
export class BarComponent {
  /**
   *
   */
  constructor(public svc1: Svc1Service) {
    console.log("BarComponent.constructor");

  }

}
