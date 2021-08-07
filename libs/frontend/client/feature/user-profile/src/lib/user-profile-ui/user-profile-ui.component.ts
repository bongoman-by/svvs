import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IUsersFacade } from '@svvs/frontend/shared/data-access/user-store';

@Component({
  selector: 'svvs-user-profile-ui',
  templateUrl: './user-profile-ui.component.html',
  styleUrls: ['./user-profile-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserProfileUiComponent implements OnInit {
  constructor(private userFacade: IUsersFacade) {}
  ngOnInit(): void {
    this.userFacade.loadUser();
  }
}
