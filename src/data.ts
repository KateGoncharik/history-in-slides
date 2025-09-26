import { Category } from './types';

export const mockCategories: Category[] = [
  {
    name: 'Технологии',
    events: [
      { year: 1987, description: 'США, реж. Джон Мактирнан' },
      {
        year: 1988,

        description: 'США, реж. Роберт Земекис',
      },
      { year: 1989, description: 'США, реж. Роберт Земекис' },
      { year: 1990, description: 'США, реж. Джон Мактирнан' },
    ],
  },
  {
    name: 'Кино',
    events: [{ year: 1987 }, { year: 1988 }],
  },
  {
    name: 'Литература',
    events: [{ year: 1987 }, { year: 1988 }],
  },
  {
    name: 'Театр',
    events: [{ year: 1987 }, { year: 1988 }],
  },
  {
    name: 'Спорт',
    events: [{ year: 1987 }, { year: 1988 }],
  },
  {
    name: 'Наука',
    events: [
      {
        year: 2015,
        description:
          '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
      },
      { year: 2022 },
    ],
  },
];
