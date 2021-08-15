import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IAuthFacade } from '@svvs/frontend/shared/data-access/auth-store';
import { ISignAuthPayload } from '@svvs/shared/utils/interfaces';

@Component({
  selector: 'svvs-auth-ui',
  templateUrl: './auth-block.component.html',
  styleUrls: ['./auth-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthBlockComponent {
  constructor(public authFacade: IAuthFacade) {}

  onLogin(loginPayload: ISignAuthPayload): void {
    console.log('login in login block', loginPayload);
    this.authFacade.signInSet(loginPayload);
    // this.authFacade.signIn();
  }
}
