import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice', weppon: 1 },
      { id: 12, name: 'Narco', weppon: 6 },
      { id: 13, name: 'Bombasto', weppon: 6 },
      { id: 14, name: 'Celeritas', weppon: 4 },
      { id: 15, name: 'Magneta', weppon: 3 },
      { id: 16, name: 'RubberMan', weppon: 5 },
      { id: 17, name: 'Dynama', weppon: 5 },
      { id: 18, name: 'Dr IQ', weppon: 7 },
      { id: 19, name: 'Magma', weppon: 4 },
      { id: 20, name: 'Tornado', weppon: 6 }
    ];

    const weppons = [
      {id: 1, name: 'Gun M-R451'},
      {id: 2, name: 'Sheld'},
      {id: 3, name: 'Sword'},
      {id: 4, name: 'Bow'},
      {id: 5, name: 'Rope'},
      {id: 6, name: 'Mjolnir'},
      {id: 7, name: 'Gloves'},
    ]
    return {heroes, weppons};
  }
}