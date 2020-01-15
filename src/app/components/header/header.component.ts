import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  isMenuActive = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onLogout() {
    console.log('Logout button clicked!');
    this.router.navigateByUrl('login');
  }

  onToggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }

}
