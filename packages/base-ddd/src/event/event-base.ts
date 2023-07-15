import { PrimitiveAggregate } from '../primitives/types/primitive-aggregate';
import { plainToInstance } from 'class-transformer';
import { ClassConstructor } from 'class-transformer/types/interfaces';
import { EventBase } from '@archi-code/event';
import { AggregateRoot } from '@archi-code/aggregate';

export function aggregateToEvent<E extends EventBase, T extends AggregateRoot>(
  clsEvent: ClassConstructor<E>,
  aggregatePrimitives: PrimitiveAggregate<T>,
): E {
  return plainToInstance(clsEvent, aggregatePrimitives) as E;
}
