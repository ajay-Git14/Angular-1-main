export {}; // Give each lab its own module scope.
// Challenge assignment: simulate decorator-based registration.
// This is NOT the Angular runtime; it uses our own Map as registry.
interface Metadata {
  kind: 'component' | 'service';
  selector?: string;
}

const registry = new Map<Function, Metadata>();

function ComponentLike(selector: string): ClassDecorator {
  return (target: Function): void => {
    registry.set(target, { kind: 'component', selector });
  };
}

function InjectableLike(): ClassDecorator {
  return (target: Function): void => {
    registry.set(target, { kind: 'service' });
  };
}

@ComponentLike('app-home')
class HomeComponent {}

@InjectableLike()
class UserService {}

console.log(JSON.stringify(registry.get(HomeComponent)));
console.log(JSON.stringify(registry.get(UserService)));

if (registry.size !== 2) {
  throw new Error('Expected two registered classes');
}
