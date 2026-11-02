export {}; // Give each lab its own module scope.
// TypeScript 5+ standard decorators: NO experimentalDecorators flag.
function Registered(_value: Function, context: ClassDecoratorContext): void {
  console.log(`Registered class: ${String(context.name)}`);
}

function Trace<This, Args extends unknown[], Return>(
  original: (this: This, ...args: Args) => Return,
  context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>
): (this: This, ...args: Args) => Return {
  return function (this: This, ...args: Args): Return {
    console.log(`Calling ${String(context.name)}`);
    return original.apply(this, args);
  };
}

@Registered
class Trainer {
  @Trace
  teach(topic: string): string {
    return `Teaching ${topic}`;
  }
}

console.log(new Trainer().teach('Modern Decorators'));
