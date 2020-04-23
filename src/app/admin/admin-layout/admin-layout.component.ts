import { Component, OnInit } from '@angular/core';
import { faTv, faTable, faClock, faCalendar, faFileAlt, faKey, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  title = 'tvbit';
  accauntTitle = 'Тестовый аккаунт';
  userRoleTitle = 'Главный пользователь TVbit';

  faTv = faTv;
  faTable = faTable;
  faClock = faClock;
  faCalendar = faCalendar;
  faFileAlt = faFileAlt;
  faKey = faKey;
  faCog = faCog;
  faSignOutAlt = faSignOutAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
