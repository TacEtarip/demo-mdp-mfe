import { ITalent } from 'src/app/interfaces/ITalent';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TalentService {
  talents: ITalent[] = [
    {
      id: 1,
      name: 'Luis Huertas',
      score: '9.00',
      skill: 'Full Stack',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed cursus enim. Nulla facilisi. Vestibulum ullamcorper egestas dolor. Ut ullamcorper eros quis euismod tincidunt. Quisque aliquam, nulla nec auctor elementum, urna erat faucibus risus, vitae consectetur augue risus eget ex. Integer commodo lorem in mauris elementum fringilla.',
    },
    {
      id: 2,
      name: 'Luis Huertas',
      score: '9.00',
      skill: 'Full Stack',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed cursus enim. Nulla facilisi. Vestibulum ullamcorper egestas dolor. Ut ullamcorper eros quis euismod tincidunt. Quisque aliquam, nulla nec auctor elementum, urna erat faucibus risus, vitae consectetur augue risus eget ex. Integer commodo lorem in mauris elementum fringilla.',
    },
    {
      id: 3,
      name: 'Luis Huertas',
      score: '9.00',
      skill: 'Full Stack',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed cursus enim. Nulla facilisi. Vestibulum ullamcorper egestas dolor. Ut ullamcorper eros quis euismod tincidunt. Quisque aliquam, nulla nec auctor elementum, urna erat faucibus risus, vitae consectetur augue risus eget ex. Integer commodo lorem in mauris elementum fringilla.',
    },
    {
      id: 4,
      name: 'Luis Huertas',
      score: '9.00',
      skill: 'Full Stack',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed cursus enim. Nulla facilisi. Vestibulum ullamcorper egestas dolor. Ut ullamcorper eros quis euismod tincidunt. Quisque aliquam, nulla nec auctor elementum, urna erat faucibus risus, vitae consectetur augue risus eget ex. Integer commodo lorem in mauris elementum fringilla.',
    },
    {
      id: 5,
      name: 'Luis Huertas',
      score: '9.00',
      skill: 'Full Stack',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed cursus enim. Nulla facilisi. Vestibulum ullamcorper egestas dolor. Ut ullamcorper eros quis euismod tincidunt. Quisque aliquam, nulla nec auctor elementum, urna erat faucibus risus, vitae consectetur augue risus eget ex. Integer commodo lorem in mauris elementum fringilla.',
    },
    {
      id: 6,
      name: 'Luis Huertas',
      score: '9.00',
      skill: 'Full Stack',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed cursus enim. Nulla facilisi. Vestibulum ullamcorper egestas dolor. Ut ullamcorper eros quis euismod tincidunt. Quisque aliquam, nulla nec auctor elementum, urna erat faucibus risus, vitae consectetur augue risus eget ex. Integer commodo lorem in mauris elementum fringilla.',
    },
    {
      id: 7,
      name: 'Luis Huertas',
      score: '9.00',
      skill: 'Full Stack',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed cursus enim. Nulla facilisi. Vestibulum ullamcorper egestas dolor. Ut ullamcorper eros quis euismod tincidunt. Quisque aliquam, nulla nec auctor elementum, urna erat faucibus risus, vitae consectetur augue risus eget ex. Integer commodo lorem in mauris elementum fringilla.',
    },
    {
      id: 8,
      name: 'Luis Huertas',
      score: '9.00',
      skill: 'Full Stack',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed cursus enim. Nulla facilisi. Vestibulum ullamcorper egestas dolor. Ut ullamcorper eros quis euismod tincidunt. Quisque aliquam, nulla nec auctor elementum, urna erat faucibus risus, vitae consectetur augue risus eget ex. Integer commodo lorem in mauris elementum fringilla.',
    },
    {
      id: 9,
      name: 'Luis Huertas',
      score: '9.00',
      skill: 'Full Stack',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed cursus enim. Nulla facilisi. Vestibulum ullamcorper egestas dolor. Ut ullamcorper eros quis euismod tincidunt. Quisque aliquam, nulla nec auctor elementum, urna erat faucibus risus, vitae consectetur augue risus eget ex. Integer commodo lorem in mauris elementum fringilla.',
    },
    {
      id: 10,
      name: 'Luis Huertas',
      score: '9.00',
      skill: 'Full Stack',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed cursus enim. Nulla facilisi. Vestibulum ullamcorper egestas dolor. Ut ullamcorper eros quis euismod tincidunt. Quisque aliquam, nulla nec auctor elementum, urna erat faucibus risus, vitae consectetur augue risus eget ex. Integer commodo lorem in mauris elementum fringilla.',
    },
    {
      id: 11,
      name: 'Luis Huertas',
      score: '9.00',
      skill: 'Full Stack',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed cursus enim. Nulla facilisi. Vestibulum ullamcorper egestas dolor. Ut ullamcorper eros quis euismod tincidunt. Quisque aliquam, nulla nec auctor elementum, urna erat faucibus risus, vitae consectetur augue risus eget ex. Integer commodo lorem in mauris elementum fringilla.',
    },
    {
      id: 12,
      name: 'Luis Huertas',
      score: '9.00',
      skill: 'Full Stack',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed cursus enim. Nulla facilisi. Vestibulum ullamcorper egestas dolor. Ut ullamcorper eros quis euismod tincidunt. Quisque aliquam, nulla nec auctor elementum, urna erat faucibus risus, vitae consectetur augue risus eget ex. Integer commodo lorem in mauris elementum fringilla.',
    },
    {
      id: 13,
      name: 'Luis Huertas',
      score: '9.00',
      skill: 'Full Stack',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed cursus enim. Nulla facilisi. Vestibulum ullamcorper egestas dolor. Ut ullamcorper eros quis euismod tincidunt. Quisque aliquam, nulla nec auctor elementum, urna erat faucibus risus, vitae consectetur augue risus eget ex. Integer commodo lorem in mauris elementum fringilla.',
    },
    {
      id: 14,
      name: 'Luis Huertas',
      score: '9.00',
      skill: 'Full Stack',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed cursus enim. Nulla facilisi. Vestibulum ullamcorper egestas dolor. Ut ullamcorper eros quis euismod tincidunt. Quisque aliquam, nulla nec auctor elementum, urna erat faucibus risus, vitae consectetur augue risus eget ex. Integer commodo lorem in mauris elementum fringilla.',
    },
    {
      id: 15,
      name: 'Luis Huertas',
      score: '9.00',
      skill: 'Full Stack',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed cursus enim. Nulla facilisi. Vestibulum ullamcorper egestas dolor. Ut ullamcorper eros quis euismod tincidunt. Quisque aliquam, nulla nec auctor elementum, urna erat faucibus risus, vitae consectetur augue risus eget ex. Integer commodo lorem in mauris elementum fringilla.',
    },
  ];

  constructor() {}

  getTalents() {
    return this.talents;
  }

  getTalent(talentId: number) {
    return this.talents.find((t) => (t.id = talentId));
  }
}
