import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { BsDropdownDirective } from 'ngx-bootstrap/dropdown';
import { IDropdown, IDropdownItem, INavbarItem } from './navbar.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isCollapsed = false;

  @Input() brandName: string
  @Input() dropdowns: IDropdown[]
  @ViewChildren("dropdown") dropdownElements: QueryList<BsDropdownDirective>

  constructor() { }

  ngOnInit(): void {

  }

  onToggleDropdown(clickedIndex: number) {
    for (let i = 0; i < this.dropdownElements.length; i++) {
      if (i === clickedIndex) continue
      this.dropdownElements.get(i).isOpen = false
    }
  }
}
