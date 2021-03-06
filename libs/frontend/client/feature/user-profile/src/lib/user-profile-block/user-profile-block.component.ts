import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IUsersFacade } from '@svvs/frontend/shared/data-access/user-store';

@Component({
  selector: 'svvs-user-profile-block',
  templateUrl: './user-profile-block.component.html',
  styleUrls: ['./user-profile-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserProfileBlockComponent {
  constructor(public userFacade: IUsersFacade) {
    this.userFacade.loadUser();
  }
}
