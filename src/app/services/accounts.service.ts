import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  constructor() {};

  addAccount(name: string, status: string) {
    this.accounts.unshift({ name, status });
  };

  changeStatus(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;
  };
}
