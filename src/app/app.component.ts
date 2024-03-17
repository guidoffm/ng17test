import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FooComponent } from "./foo/foo.component";
import { Svc1Service } from './svc1.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, FooComponent]
})
export class AppComponent {

public goto(dst: string) {
  // Navigate to the bar component
  this.router.navigate([dst]);
}
  title = 'ng17test';
  /**
   *
   */
  constructor(public svc1: Svc1Service, private router: Router) {

    
  }
}
