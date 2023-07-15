import { PrimitiveAggregate } from '../primitives/types/primitive-aggregate';
import { instanceToPrimitives } from '../primitives/transform/to/transform-to-primitives';
import { aggregateToEvent } from '../event';
import { ClassConstructor } from 'class-transformer/types/interfaces';
import { EventBase } from '@archi-code/event';
import { AggregateRoot } from '@archi-code/aggregate';

export abstract class Aggregate<T extends AggregateRoot> extends AggregateRoot {
  toPrimitives(): PrimitiveAggregate<Aggregate<T>> {
    return instanceToPrimitives(this);
  }

  recordBy<E extends EventBase>(clsEvent: ClassConstructor<E>): void {
    this.record(aggregateToEvent(clsEvent, this.toPrimitives()));
  }
}
