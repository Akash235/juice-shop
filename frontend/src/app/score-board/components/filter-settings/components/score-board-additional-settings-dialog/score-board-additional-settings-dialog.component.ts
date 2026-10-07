import { Component, ChangeDetectionStrategy } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog'
import { TranslateModule } from '@ngx-translate/core'

@Component({
  changeDetection: ChangeDetectionStrategy.Eager,
  selector: 'score-board-additional-settings-dialog',
  templateUrl: './score-board-additional-settings-dialog.component.html',
  styleUrls: ['./score-board-additional-settings-dialog.component.scss'],
  imports: [MatDialogModule, MatButtonModule, TranslateModule]
})
export class ScoreBoardAdditionalSettingsDialogComponent {}
