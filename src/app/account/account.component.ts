import { Component, Input, OnInit } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [
    LoggingService,
  ]
})
export class AccountComponent implements OnInit {
  @Input() id: number;
  account: { name: string, status: string } = null;

  constructor(
    private loggingService: LoggingService,
    private accountsService: AccountsService
  ) {};

    ngOnInit(): void {
      this.account = this.accountsService.accounts[this.id];
    }

  onSetTo(status: string) {
    this.accountsService.changeStatus(this.id, status)
    this.loggingService.logStatusChange(status)
  }
}
