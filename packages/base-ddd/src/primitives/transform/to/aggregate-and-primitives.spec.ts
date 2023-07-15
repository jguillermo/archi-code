import { faker } from '@faker-js/faker';
import { instanceToPrimitives, PropertieToPrimitive } from './transform-to-primitives';

import { AggregateRoot } from '@archi-code/aggregate';
import { IdTypeImp } from '@archi-code/type';
import { PrimitiveAggregate } from '@archi-code/primitive';

export class AggregateObjectMotherId extends AggregateRoot implements PropertieToPrimitive<AggregateObjectMotherId> {
  private readonly aggregateId: IdTypeImp;

  constructor(aggregateId: string) {
    super();
    this.aggregateId = new IdTypeImp(aggregateId);
  }

  toPrimitives(): PrimitiveAggregate<AggregateObjectMotherId> {
    return instanceToPrimitives(this);
  }
}

describe('aggregtate whith primitives', () => {
  it('Id', () => {
    const uuid = faker.datatype.uuid();
    const aggregate = new AggregateObjectMotherId(uuid);
    expect(aggregate.toPrimitives()).toEqual({ aggregateId: uuid });
  });
});
