import { Injectable } from "@angular/core";
import { HeaderData } from "src/app/pages/questionnaire/step/model/headerData.model";

@Injectable()
export class UtilsService {
    
    // Hace que el scroll vaya hacia arriba.
    public goUp(): void {
        window.scrollTo(0, 0)
    }

    public header_data: HeaderData = new HeaderData();
    public number_step: number;


}