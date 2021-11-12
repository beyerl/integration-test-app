import { EventEmitter } from "@angular/core";

export interface INavbarItem {
    title: string;
    link: string
}

export interface IDropdownItem {
    title: string;
    key: string;
    onClick: (key: string) => void,
}

export interface IDropdown {
    title: string,
    isCollapsed: boolean,
    btnClass: string
    items: IDropdownItem[]
}