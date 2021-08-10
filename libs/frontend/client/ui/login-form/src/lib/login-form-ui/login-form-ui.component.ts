import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISignAuthPayload } from '@svvs/shared/utils/interfaces';

@Component({
  selector: 'svvs-login-form-ui',
  templateUrl: './login-form-ui.component.html',
  styleUrls: ['./login-form-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormUiComponent implements OnInit {
  loginForm!: FormGroup;

  @Output()
  login = new EventEmitter<ISignAuthPayload>();

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    this.login.emit(this.loginForm.value);
  }
}
