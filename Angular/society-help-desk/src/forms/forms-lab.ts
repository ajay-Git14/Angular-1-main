import { JsonPipe } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { toSignal, takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {
  AbstractControl, FormArray, FormBuilder, FormControl, FormRecord,
  FormsModule, NgForm, ReactiveFormsModule, ValidationErrors, Validators
} from '@angular/forms';
import { chapterTopicById, courseSubtopicById } from '../lab/course-catalog';
import { FORMS_LAB_NOTES, type FormsLabNote } from './forms-lab-notes';

/** A custom validator belongs in TypeScript, not inside an Angular template.
 * Demo society flat codes use A-001, A-002 etc. (fictitious examples only).
 */
export function flatCodeValidator(control: AbstractControl): ValidationErrors | null {
  const value = String(control.value ?? '');
  return !value || /^A-\d{3}$/.test(value) ? null : { invalidFlat: true };
}

/** Cross-field validation: group-wide rule (passwords are not stored or logged). */
export function passwordsMatch(control: AbstractControl): ValidationErrors | null {
  const password = String(control.get('password')?.value ?? '');
  const confirm = String(control.get('confirmPassword')?.value ?? '');
  return password === confirm ? null : { passwordMismatch: true };
}

export type DynamicKind = 'text' | 'email' | 'date' | 'select' | 'textarea';
export interface DynamicField {
  readonly key: string;
  readonly label: string;
  readonly kind: DynamicKind;
  readonly required: boolean;
  readonly options?: readonly string[];
}

const INITIAL_FIELDS: readonly DynamicField[] = [
  { key:'resident', label:'Resident name', kind:'text', required:true },
  { key:'category', label:'Complaint category', kind:'select', required:true,
    options:['Water','Lift','Parking','Security'] },
  { key:'details', label:'Complaint details', kind:'textarea', required:false },
  { key:'email', label:'Contact email (demo)', kind:'email', required:false },
  { key:'visitDate', label:'Preferred visit date', kind:'date', required:false }
];

/**
 * Chapter 04 execution screen: all six published Forms topics use one
 * incremental Society Help Desk training project, with no fake backend.
 * A shared engine provides reusable controls; each subtopic links its
 * source lesson and displays its own focus / exercise / expected result.
 */
@Component({
  standalone: true,
  imports: [RouterLink, JsonPipe, FormsModule, ReactiveFormsModule],
  templateUrl: './forms-lab.html',
  styleUrl: './forms-lab.css'
})
export class FormsExecution {
  private readonly fb = inject(FormBuilder);
  private readonly route = inject(ActivatedRoute);
  private readonly params = toSignal(this.route.paramMap, {
    initialValue:this.route.snapshot.paramMap
  });

  readonly topic = computed(() => chapterTopicById('04', this.params().get('topic')));
  readonly subtopic = computed(() => courseSubtopicById(
    '04', this.params().get('topic'), this.params().get('subtopic')
  ));
  readonly labNumber = computed(() => Number(this.subtopic()?.id.match(/^lab-(\d+)/)?.[1] ?? 1));
  readonly note = computed<FormsLabNote | undefined>(() =>
    FORMS_LAB_NOTES[this.params().get('topic') ?? '']?.[this.subtopic()?.id ?? '']
  );

  // Native and template-driven examples. Only non-sensitive fields appear in previews.
  model = {
    resident:'Aarav', email:'', flat:'A-101', title:'Lift needs repair',
    details:'Lift stopped between floors', category:'Water',
    password:'', accept:false, priority:'Medium', visitDate:'2026-10-26'
  };
  readonly nativeStatus = signal('Change a control or submit the example.');
  readonly fileName = signal('No file chosen (filename only; nothing uploaded).');
  readonly keyEvent = signal('No keyboard event captured yet.');
  readonly inputEvent = signal('No input event captured yet.');
  readonly changedSelection = signal('Select a value to trigger change.');
  readonly submitted = signal('');
  readonly singleControl = new FormControl('', { nonNullable:true });

  // The FormBuilder model is explicit and completely independent of ngModel.
  readonly reactiveForm = this.fb.nonNullable.group({
    resident:['', [Validators.required, Validators.minLength(2)]],
    email:['', [Validators.required, Validators.email]],
    flat:['A-101', [Validators.required, flatCodeValidator]],
    title:['Lift repair', [Validators.required, Validators.maxLength(50)]],
    details:[''],
    password:[''],
    confirmPassword:[''],
    mobile:['', Validators.pattern(/^\d{10}$/)],
    department:['Engineering'],
    course:['Angular'],
    skills:this.fb.array<FormControl<string>>([this.fb.nonNullable.control('Angular')])
  }, { validators: passwordsMatch });
  readonly reactiveLatest = signal('Edit a FormControl to see valueChanges.');

  // A dedicated validation example; cross-field/password error is group-level.
  readonly validationForm = this.fb.nonNullable.group({
    resident:['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    email:['', [Validators.required, Validators.email]],
    mobile:['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    flat:['', [Validators.required, flatCodeValidator]],
    password:['', [Validators.required, Validators.minLength(6)]],
    confirmPassword:['', Validators.required]
  }, { validators: passwordsMatch });

  // Metadata describes questions; FormRecord actually owns dynamic values.
  readonly fields = signal<readonly DynamicField[]>(INITIAL_FIELDS.map(field => ({...field})));
  readonly dynamicForm = new FormRecord<FormControl<string>>({
    resident:this.fb.nonNullable.control('', Validators.required),
    category:this.fb.nonNullable.control('Water', Validators.required),
    details:this.fb.nonNullable.control(''),
    email:this.fb.nonNullable.control('',Validators.email),
    visitDate:this.fb.nonNullable.control('')
  });
  readonly checklist = new FormArray<FormControl<string>>([
    this.fb.nonNullable.control('Check water supply')
  ]);
  private nextCustomId = 1;

  constructor() {
    // Destroy-safe reactive subscription. Avoid manual ngOnDestroy or leaks.
    this.reactiveForm.valueChanges.pipe(takeUntilDestroyed()).subscribe(value => {
      this.reactiveLatest.set(JSON.stringify({
        resident:value.resident, email:value.email, title:value.title,
        flat:value.flat, skills:value.skills
      }, null, 2));
    });
  }

  get skills(): FormArray<FormControl<string>> {
    return this.reactiveForm.controls.skills;
  }

  readValue(event:Event): string {
    return (event.target as HTMLInputElement | HTMLSelectElement).value;
  }
  readChecked(event:Event): boolean {
    return (event.target as HTMLInputElement).checked;
  }

  /** In native HTML forms prevent navigation. Never call a real API in this lab. */
  submitNative(event:Event):void {
    event.preventDefault();
    this.nativeStatus.set('Native form submitted locally; inspect the value preview below.');
    this.submitted.set(JSON.stringify(this.safeModel(),null,2));
  }
  submitTemplate(form:NgForm):void {
    if(form.invalid) {
      form.control.markAllAsTouched();
      this.submitted.set('Validation stopped submission. Check required fields.');
      return;
    }
    this.submitted.set('Template-driven ngSubmit success (local demo): ' +
      JSON.stringify(this.safeModel()));
  }
  safeModel(): Record<string, string | boolean> {
    // Deliberately omit password from the on-screen JSON summary.
    const { password: _password, ...safe } = this.model;
    return safe;
  }
  updateInput(event:Event):void {
    this.inputEvent.set('Input event: ' + this.readValue(event));
  }
  updateKey(event:KeyboardEvent):void {
    this.keyEvent.set('Keyup: ' + event.key);
  }
  updateChange(event:Event):void {
    this.changedSelection.set('Change event: ' + this.readValue(event));
  }
  chooseFile(event:Event):void {
    const file=(event.target as HTMLInputElement).files?.item(0);
    // Only show name. Never send or load the file.
    this.fileName.set(file ? 'Selected locally: ' + file.name : 'No file chosen.');
  }

  /** Reactive examples of setValue, patchValue, FormArray, state, and submit. */
  fillReactive():void {
    this.reactiveForm.setValue({
      resident:'Aarav', email:'aarav@example.test', flat:'A-101',
      title:'Lift repair', details:'Lift requires maintenance',
      password:'', confirmPassword:'', mobile:'9876543210',
      department:'Engineering', course:'Angular',
      skills:this.skills.controls.map((_,i)=>i===0?'Angular':'TypeScript')
    });
  }
  patchReactive():void {
    this.reactiveForm.patchValue({ resident:'Nia', title:'Water pressure issue' });
  }
  addSkill():void {
    this.skills.push(this.fb.nonNullable.control(''));
  }
  removeSkill(index:number):void {
    if(this.skills.length>1)this.skills.removeAt(index);
  }
  submitReactive():void {
    this.reactiveForm.markAllAsTouched();
    if(this.reactiveForm.invalid){
      this.submitted.set('Reactive form invalid; correct highlighted fields.');
      return;
    }
    // Training preview: no password or private authentication.
    const { password: _password, confirmPassword: _confirm, ...safe } =
      this.reactiveForm.getRawValue();
    this.submitted.set('Reactive form valid: ' + JSON.stringify(safe,null,2));
  }
  submitValidation():void {
    this.validationForm.markAllAsTouched();
    this.submitted.set(this.validationForm.valid
      ? 'Validation passed; local demo only (not saved).'
      : 'Validation blocked submission; review the errors.');
  }

  /** Dynamic metadata/FormRecord operations must always stay synchronized. */
  addDynamicField():void {
    const key='custom'+this.nextCustomId++;
    this.dynamicForm.addControl(key,this.fb.nonNullable.control(''));
    this.fields.update(fields=>[
      ...fields,{key,label:'Optional note '+key,kind:'text',required:false}
    ]);
  }
  removeDynamicField(key:string):void {
    if(!key.startsWith('custom'))return; // prevent removing required fields
    this.dynamicForm.removeControl(key);
    this.fields.update(fields=>fields.filter(field=>field.key!==key));
  }
  /** Conditional field: a Parking complaint requires a parking slot.
   * Update BOTH metadata and the FormRecord, avoiding missing-control errors.
   */
  onDynamicCategoryChanged(key:string,event:Event):void {
    if(key!=='category')return;
    const category=this.readValue(event);
    const exists=!!this.dynamicForm.get('parkingSlot');
    if(category==='Parking' && !exists){
      this.dynamicForm.addControl('parkingSlot',this.fb.nonNullable.control('',Validators.required));
      this.fields.update(fields=>[
        ...fields,{key:'parkingSlot',label:'Parking slot code',kind:'text',required:true}
      ]);
    } else if(category!=='Parking' && exists){
      this.dynamicForm.removeControl('parkingSlot');
      this.fields.update(fields=>fields.filter(field=>field.key!=='parkingSlot'));
    }
  }

  toggleDynamicRequired(key:string):void {
    const field=this.fields().find(x=>x.key===key);
    if(!field)return;
    const required=!field.required;
    const control=this.dynamicForm.controls[key];
    if(!control)return;
    // Keep format validation if the email field is marked optional.
    const rules = required ? [Validators.required] : [];
    if(field.kind==='email')rules.push(Validators.email);
    control.setValidators(rules);
    control.updateValueAndValidity();
    this.fields.update(items=>items.map(x=>x.key===key?{...x,required}:x));
  }
  addChecklist():void {this.checklist.push(this.fb.nonNullable.control('New inspection item'));}
  removeChecklist(index:number):void {
    if(this.checklist.length>1)this.checklist.removeAt(index);
  }
  patchDynamic():void {
    this.dynamicForm.patchValue({
      resident:'Nia',category:'Lift',details:'Maintenance visit',
      email:'nia@example.test',visitDate:'2026-11-02'
    });
    // The patched category is non-Parking; synchronize optional parking control.
    if(this.dynamicForm.get('parkingSlot')){
      this.dynamicForm.removeControl('parkingSlot');
      this.fields.update(fields=>fields.filter(field=>field.key!=='parkingSlot'));
    }
  }
  submitDynamic():void {
    this.dynamicForm.markAllAsTouched();
    this.submitted.set(this.dynamicForm.valid
      ? 'Schema-driven form valid (local preview): ' + JSON.stringify(this.dynamicForm.getRawValue(),null,2)
      : 'Schema-driven form invalid; fill required questions.');
  }

  reset():void {
    this.submitted.set('');
    this.nativeStatus.set('Reset complete.');
    this.fileName.set('No file chosen.');
    this.keyEvent.set('No keyboard event captured yet.');
    this.inputEvent.set('No input event captured yet.');
    this.changedSelection.set('Select a value to trigger change.');
    this.model={
      resident:'Aarav',email:'',flat:'A-101',title:'Lift needs repair',
      details:'Lift stopped between floors',category:'Water',password:'',
      accept:false,priority:'Medium',visitDate:'2026-10-26'
    };
    this.singleControl.reset();
    this.reactiveForm.reset();
    while(this.skills.length>1)this.skills.removeAt(this.skills.length-1);
    this.validationForm.reset();
    for(const key of Object.keys(this.dynamicForm.controls))
      if(key.startsWith('custom') || key==='parkingSlot')this.dynamicForm.removeControl(key);
    this.fields.set(INITIAL_FIELDS.map(f=>({...f})));
    this.dynamicForm.reset({resident:'',category:'Water',details:'',email:'',visitDate:''});
    this.nextCustomId=1;
    this.checklist.clear();
    this.checklist.push(this.fb.nonNullable.control('Check water supply'));
  }
}

