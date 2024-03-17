import { Component } from '@angular/core';
import { Svc1Service } from '../svc1.service';

@Component({
  selector: 'app-foo',
  standalone: true,
  imports: [],
  templateUrl: './foo.component.html',
  styleUrl: './foo.component.scss'
})
export class FooComponent {
/**
 *
 */
constructor(public svc1: Svc1Service) {}
}
