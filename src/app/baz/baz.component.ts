import { Component } from '@angular/core';
import { Svc1Service } from '../svc1.service';

@Component({
  selector: 'app-baz',
  standalone: true,
  imports: [],
  templateUrl: './baz.component.html',
  styleUrl: './baz.component.scss'
})
export class BazComponent {
  constructor(public svc1: Svc1Service) {
    console.log("BazComponent.constructor");
  }
}
