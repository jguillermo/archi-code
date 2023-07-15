import { IdTypeImp } from '../../../type';
import { faker } from '@faker-js/faker';
import { instanceToPrimitives, PropertieToPrimitive } from './transform-to-primitives';
import { PrimitiveAggregate } from '../../types/primitive-aggregate';
import { AggregateRoot } from '@archi-code/aggregate';

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
