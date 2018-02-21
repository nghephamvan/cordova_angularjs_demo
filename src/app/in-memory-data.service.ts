import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'hthanhtrung' },
      { id: 2, name: 'lnmlinh' },
      { id: 3, name: 'lthoa' },
      { id: 4, name: 'lvgian' },
      { id: 5, name: 'pctin' },
      { id: 6, name: 'pnmkhoi' },
      { id: 7, name: 'pvnghe' },
      { id: 8, name: 'btmtuan' },
      { id: 9, name: 'lhoangbao' },
      { id: 10, name: 'ntrunghau' },
      { id: 11, name: 'vgan' },
      { id: 12, name: 'vtplinh' }
    ];

    return {heroes};
  }
  constructor() { }
}
