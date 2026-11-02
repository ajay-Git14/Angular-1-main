export {}; // Give each lab its own module scope.
// Lab 2. A factory returns the actual legacy class decorator.
function Company(name: string): ClassDecorator {
  return (_constructor: Function): void => {
    console.log(`Company: ${name}`);
  };
}

@Company('Techlambda')
class Trainer {
  readonly department = 'Learning';
}

console.log(new Trainer().department);
