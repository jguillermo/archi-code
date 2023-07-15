import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import { ValidatorInterface } from './';

@ValidatorConstraint({ name: 'domainValidator', async: false })
export class DomainValidator implements ValidatorConstraintInterface {
  private static factoryType(value: any, objClass: any): ValidatorInterface {
    const vo: ValidatorInterface = new objClass(value);
    return vo;
  }

  validate(value: any, args: ValidationArguments): Promise<boolean> | boolean {
    try {
      const vo = DomainValidator.factoryType(value, args.constraints[0]);
      return vo.isValid();
    } catch (e) {
      return false;
    }
  }

  defaultMessage(args: ValidationArguments): string {
    try {
      const vo = DomainValidator.factoryType(args.value, args.constraints[0]);
      vo.isValid();
      return `${args.property}: ${vo.validatorMessage()}`;
    } catch (e: any) {
      return `${args.property}: ${e.message}`;
    }
  }
}
