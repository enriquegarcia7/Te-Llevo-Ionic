import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.page.html',
  styleUrls: ['./page404.page.scss'],
})
export class Page404Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  volverAtras() {
    this.router.navigate(['/auth']);
  }

}
