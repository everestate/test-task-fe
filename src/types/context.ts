import type { EntityManager } from '@mikro-orm/mongodb';
import type { IUser } from './interfaces';

export type Context = {
  user: IUser | null;
  entityManager: EntityManager;
};
