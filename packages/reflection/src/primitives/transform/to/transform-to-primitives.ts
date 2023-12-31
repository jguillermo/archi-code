import { AggregateRoot } from '@archi-code/aggregate';
import { PrimitiveTypes } from '@archi-code/common';
import { PrimitiveAggregate } from '@archi-code/primitive';

export interface PropertieToPrimitive<T extends AggregateRoot> {
  toPrimitives(): PrimitiveAggregate<T>;
}

type PropertiesKeys = {
  [key: string]: PrimitiveTypes;
};

export function instanceToPrimitives<T extends AggregateRoot>(aggregate: T): PrimitiveAggregate<T> {
  const properties: PropertiesKeys = {};
  getAllPropertiesFromInstanceClass(aggregate).forEach((property: string) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    properties[property] = aggregate[property].value;
  });
  return properties as PrimitiveAggregate<T>;
}

export function getAllPropertiesFromInstanceClass(obj: any): string[] {
  const data = Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertyNames(Object.getPrototypeOf(obj)));
  const dataFiltered = data.filter((item) => !['domainEvents', 'constructor'].includes(item));

  const properties = dataFiltered.map((item) => {
    return item.startsWith('_') ? item.substring(1) : item;
  });

  return properties.filter((item, index) => properties.indexOf(item) === index);
}
