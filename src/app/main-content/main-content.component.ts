import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { DrillDownComponent } from "../drill-down/drill-down.component";
import { BarComponent } from "../bar/bar.component";
import { PieComponent } from "../pie/pie.component";
import { PieDrillComponent } from "../pie-drill/pie-drill.component";
import { StocksComponent } from "../stocks/stocks.component";
import { GasBillComponent } from "../gas-bill/gas-bill.component";
import { WaterBillComponent } from "../water-bill/water-bill.component";
import { IpmSavingsComponent } from "../ipm-savings/ipm-savings.component";


@Component({
    selector: 'app-main-content',
    standalone: true,
    templateUrl: './main-content.component.html',
    styleUrl: './main-content.component.css',
    imports: [MatCardModule, DrillDownComponent, BarComponent, PieComponent, PieDrillComponent, StocksComponent, GasBillComponent, WaterBillComponent, IpmSavingsComponent]
})
export class MainContentComponent {

}
