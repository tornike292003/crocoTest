import { Component } from '@angular/core';
import { FooterComponent } from "../core/footer/footer.component";
import { HeaderComponent } from "../core/header/header.component";
import { NavigationComponent } from "../core/navigation/navigation.component";
import { TableComponent } from "../core/table/table.component";

@Component({
  selector: 'app-main',
  imports: [FooterComponent, HeaderComponent, NavigationComponent, TableComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
