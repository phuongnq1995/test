import { Moment } from 'moment';

export interface IBook {
  id?: number;
  title?: string;
  description?: string;
  publicationDate?: string;
}

export const defaultValue: Readonly<IBook> = {};
