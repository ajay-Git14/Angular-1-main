export {}; // Give each lab its own module scope.
// Lab 5. Parameter decorators are supported ONLY in legacy mode.
function LogParameter(
  _target: object,
  propertyKey: string | symbol | undefined,
  parameterIndex: number
): void {
  console.log(`Parameter index ${parameterIndex} in ${String(propertyKey)}`);
}

class Trainer {
  teach(@LogParameter topic: string): string {
    return `Teaching ${topic}`;
  }
}

console.log(new Trainer().teach('Angular'));
