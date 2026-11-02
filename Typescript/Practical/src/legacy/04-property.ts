export {}; // Give each lab its own module scope.
// Lab 4. This decorator observes property declaration; it does not
// intercept subsequent assignments or validate values.
function LogProperty(_target: object, propertyKey: string | symbol): void {
  console.log(`Decorated property: ${String(propertyKey)}`);
}

class Trainer {
  @LogProperty
  name: string = 'Asha';
}

console.log(`Trainer name: ${new Trainer().name}`);
