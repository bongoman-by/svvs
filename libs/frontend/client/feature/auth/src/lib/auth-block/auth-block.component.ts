import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ISignAuthPayload } from '@svvs/shared/utils/interfaces';

@Component({
  selector: 'svvs-auth-ui',
  templateUrl: './auth-block.component.html',
  styleUrls: ['./auth-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthBlockComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onLogin(loginPayload: ISignAuthPayload): void {
    console.log('login in login block', loginPayload);
  }
}
