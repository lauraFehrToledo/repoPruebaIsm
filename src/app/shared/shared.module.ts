import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
	ImvUiButton,
	ImvUiCard,
	ImvUiInput
} from '@app/ui-kit';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
	declarations: [
		/** Ui Kit */
		ImvUiButton,
		ImvUiCard,
		ImvUiInput
	],
	imports: [
		ReactiveFormsModule,
		NgbModule,

		/** Material */
		MatToolbarModule,
		MatIconModule,
		MatCardModule,
		MatButtonModule,
		MatDividerModule
	],
	exports: [
		/** Ui Kit */
		ImvUiButton,
		ImvUiCard,
		ImvUiInput,

		/** Material */
		MatToolbarModule,
		MatIconModule,
		MatCardModule,
		MatButtonModule,
		MatDividerModule		
	]
})
export class SharedModule {}
