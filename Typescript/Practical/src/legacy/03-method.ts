export {}; // Give each lab its own module scope.
// Lab 3. A method decorator wraps the original implementation.
function LogMethod(
  _target: object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
): void {
  const original = descriptor.value as (topic: string) => string;
  descriptor.value = function (this: Trainer, topic: string): string {
    console.log(`Calling ${String(propertyKey)} with ${topic}`);
    return original.call(this, topic);
  };
}

class Trainer {
  @LogMethod
  teach(topic: string): string {
    return `Teaching ${topic}`;
  }
}

console.log(new Trainer().teach('Decorators'));
