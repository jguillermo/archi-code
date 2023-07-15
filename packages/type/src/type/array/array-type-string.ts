import { ArrayType } from './array-type';
import { StringValidator } from '@archi-code/common';

export class ArrayTypeString extends ArrayType<string> {
  protected itemValidator(item: any): boolean {
    return StringValidator.isValid(item);
  }
}
