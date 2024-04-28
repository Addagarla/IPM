import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { SideMenuComponent } from "../side-menu/side-menu.component";
import { MainContentComponent } from "../main-content/main-content.component";

@Component({
    selector: 'app-container',
    standalone: true,
    templateUrl: './container.component.html',
    styleUrl: './container.component.css',
    imports: [HeaderComponent, SideMenuComponent, MainContentComponent]
})
export class ContainerComponent {

}
