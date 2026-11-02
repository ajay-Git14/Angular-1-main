export {}; // Give each lab its own module scope.
// Lab 1. Legacy class decorator: executed when the class is defined.
function Logger(_constructor: Function): void {
  console.log('Class decorator executed');
}

@Logger
class Trainer {
  teach(): string {
    return 'Teaching TypeScript';
  }
}

const trainer = new Trainer();
console.log(trainer.teach());
