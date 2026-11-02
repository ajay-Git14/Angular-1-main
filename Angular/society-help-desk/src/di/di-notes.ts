/** Source-aligned Chapter 05 lab notes derived from the two numbered syllabus files.
 * The live source is in di-execution.ts/html and di-services.ts.
 */
export interface Ch05Note {
  readonly labNumber:number;
  readonly focus:string;
  readonly action:string;
  readonly expected:string;
  readonly hook:string;
  readonly explanation:string;
  readonly snippet:string;
}
export const CH05_NOTES: Readonly<Record<string, Readonly<Record<string, Ch05Note>>>> =
{
  "dependency-injection": {
    "lab-1": {
      "labNumber": 1,
      "focus": "Manual object creation",
      "action": "Create a plain helper using new and compare it with the injected service.",
      "expected": "Manual construction couples code; Angular can supply the dependency.",
      "hook": "Manual = you build it; DI = injector supplies it.",
      "explanation": "Problem Without Dependency Injection: Manual object creation in the fictitious Society Help Desk project.",
      "snippet": "export class ComplaintComponent{\n\nservice =\n\nnew ComplaintService();\n\n}"
    },
    "lab-2": {
      "labNumber": 2,
      "focus": "Angular Dependency Injection",
      "action": "Compare constructor injection with inject() and call ComplaintService.",
      "expected": "Both references resolve the same root service instance.",
      "hook": "Constructor or inject() → same root instance.",
      "explanation": "Angular Dependency Injection: Angular Dependency Injection in the fictitious Society Help Desk project.",
      "snippet": "constructor(\n\nprivate complaintService:\nComplaintService\n\n){\n\n}"
    },
    "lab-3": {
      "labNumber": 3,
      "focus": "Constructor Injection",
      "action": "Read the service through an Angular constructor parameter.",
      "expected": "The injected constructor reference renders current complaint data.",
      "hook": "Angular fills the constructor's dependency.",
      "explanation": "Constructor Injection: Constructor Injection in the fictitious Society Help Desk project.",
      "snippet": "constructor(\n\nprivate service:\nComplaintService\n\n){\n\n}"
    },
    "lab-4": {
      "labNumber": 4,
      "focus": "Using an Injected Service",
      "action": "Call getComplaints() and inspect the service read counter.",
      "expected": "Reading records increments the service's call counter.",
      "hook": "Component asks; service works.",
      "explanation": "Using Injected Service: Using an Injected Service in the fictitious Society Help Desk project.",
      "snippet": "constructor(\n\nprivate service:\nComplaintService\n\n){\n\n}\n\nloadData(){\n\nthis.service\n.getComplaints();\n\n}"
    },
    "lab-5": {
      "labNumber": 5,
      "focus": "Injector Resolution",
      "action": "Resolve ComplaintService through Injector.get() and compare identity.",
      "expected": "Injector.get() returns the existing service; the root counter increments.",
      "hook": "Injector = Angular's service lookup.",
      "explanation": "Injector Flow: Injector Resolution in the fictitious Society Help Desk project.",
      "snippet": "Component Requests Service\n          ↓\nInjector Checks Availability\n          ↓\nCreates Service\n          ↓\nReturns Service"
    },
    "lab-6": {
      "labNumber": 6,
      "focus": "Root Injector",
      "action": "Increment an app-level root-injected counter.",
      "expected": "The same root service identity/count is available to all consumers.",
      "hook": "Root provider = shared application service.",
      "explanation": "Root Injector: Root Injector in the fictitious Society Help Desk project.",
      "snippet": "@Injectable({\n\nprovidedIn:'root'\n\n})"
    },
    "lab-7": {
      "labNumber": 7,
      "focus": "Component Injector",
      "action": "Click local counters on two component instances.",
      "expected": "Each card keeps its own local count and distinct identity.",
      "hook": "Component provider = independent instance.",
      "explanation": "Component Injector: Component Injector in the fictitious Society Help Desk project.",
      "snippet": "@Component({\n\nproviders:[\n\nComplaintService\n\n]\n\n})"
    },
    "lab-8": {
      "labNumber": 8,
      "focus": "Hierarchical Injectors",
      "action": "Compare overridden component token with shared root counter.",
      "expected": "Child label is local; root service identity remains shared.",
      "hook": "Nearest provider wins.",
      "explanation": "Hierarchical Injectors: Hierarchical Injectors in the fictitious Society Help Desk project.",
      "snippet": "App Component\n      ↓\nComplaint Component\n      ↓\nComplaint Details Component"
    },
    "lab-9": {
      "labNumber": 9,
      "focus": "inject() Function",
      "action": "Use inject(ComplaintService) and compare it with constructor injection.",
      "expected": "Both injection styles access the same managed instance.",
      "hook": "inject() requests without new.",
      "explanation": "inject() Function: inject() Function in the fictitious Society Help Desk project.",
      "snippet": "complaintService =\n\ninject(\nComplaintService\n);"
    },
    "lab-10": {
      "labNumber": 10,
      "focus": "InjectionToken",
      "action": "Read training configuration and a configured API URL token.",
      "expected": "Token values are rendered without any network request.",
      "hook": "Token = name for non-class dependency.",
      "explanation": "Injection Token: InjectionToken in the fictitious Society Help Desk project.",
      "snippet": "import {\n\nInjectionToken\n\n}\nfrom '@angular/core';"
    },
    "lab-11": {
      "labNumber": 11,
      "focus": "Providing a Token",
      "action": "Show token factory and useClass notification provider.",
      "expected": "A local message appears when the provider's send() method runs.",
      "hook": "Provider recipe tells Angular how to build.",
      "explanation": "Provide Token: Providing a Token in the fictitious Society Help Desk project.",
      "snippet": "providers:[\n\n{\n\nprovide:API_URL,\n\nuseValue:\n'https://api.com'\n\n}\n\n]"
    },
    "lab-12": {
      "labNumber": 12,
      "focus": "Injecting a Token",
      "action": "Read the API_URL token and preview its configuration.",
      "expected": "An injected URL is displayed; no HTTP request is made.",
      "hook": "Inject a token, not a hard-coded string.",
      "explanation": "Inject Token: Injecting a Token in the fictitious Society Help Desk project.",
      "snippet": "constructor(\n\n@Inject(API_URL)\n\nprivate apiUrl:string\n\n){\n\n}"
    },
    "lab-13": {
      "labNumber": 13,
      "focus": "Society Complaint Service",
      "action": "Create and list a fictitious society complaint.",
      "expected": "The root ComplaintService updates its visible list.",
      "hook": "UI → injected service → state.",
      "explanation": "Society Complaint Example: Society Complaint Service in the fictitious Society Help Desk project.",
      "snippet": "constructor(\n\nprivate complaintService:\nComplaintService\n\n){\n\n}"
    },
    "lab-14": {
      "labNumber": 14,
      "focus": "Employee Management Service",
      "action": "Add a fictitious employee via injected EmployeeService.",
      "expected": "The employee list updates without direct DOM modification.",
      "hook": "One service per business responsibility.",
      "explanation": "Employee Management Example: Employee Management Service in the fictitious Society Help Desk project.",
      "snippet": "constructor(\n\nprivate employeeService:\nEmployeeService\n\n){\n\n}"
    },
    "lab-15": {
      "labNumber": 15,
      "focus": "Account Service Boundary",
      "action": "Run a fake account transfer using an injected service.",
      "expected": "Only an in-memory balance changes; no real funds move.",
      "hook": "Business boundary = replaceable service.",
      "explanation": "Banking Example: Account Service Boundary in the fictitious Society Help Desk project.",
      "snippet": "constructor(\n\nprivate accountService:\nAccountService\n\n){\n\n}"
    }
  },
  "services-and-providers-injectable": {
    "lab-1": {
      "labNumber": 1,
      "focus": "Service Class",
      "action": "Call an injected ComplaintService method.",
      "expected": "The service returns training complaints.",
      "hook": "Service is a reusable business class.",
      "explanation": "What Is A Service?: Service Class in the fictitious Society Help Desk project.",
      "snippet": "export class ComplaintService{\n\n}"
    },
    "lab-2": {
      "labNumber": 2,
      "focus": "Generate Service with CLI",
      "action": "Read the ng generate service command and use the existing service.",
      "expected": "The demo uses the existing service; generating files is a terminal exercise.",
      "hook": "CLI creates scaffolding; DI wires usage.",
      "explanation": "Generate Service: Generate Service with CLI in the fictitious Society Help Desk project.",
      "snippet": "ng g s complaint"
    },
    "lab-3": {
      "labNumber": 3,
      "focus": "Business Logic in Service",
      "action": "Call getComplaints() while tracking method calls.",
      "expected": "Service-owned data appears and call counter increments.",
      "hook": "Move business work out of components.",
      "explanation": "Service With Business Logic: Business Logic in Service in the fictitious Society Help Desk project.",
      "snippet": "export class ComplaintService{\n\ngetComplaints(){\n\nreturn [\n\n'Water Issue',\n\n'Parking Issue',\n\n'Security Issue'\n\n];\n\n}\n\n}"
    },
    "lab-4": {
      "labNumber": 4,
      "focus": "Service Consumption",
      "action": "Invoke an injected service method from the UI.",
      "expected": "The method changes displayed output.",
      "hook": "UI delegates to service.",
      "explanation": "Using Service: Service Consumption in the fictitious Society Help Desk project.",
      "snippet": "constructor(\n\nprivate complaintService:\nComplaintService\n\n){\n\n}\n\nload(){\n\nconsole.log(\n\nthis.complaintService\n.getComplaints()\n\n);\n\n}"
    },
    "lab-5": {
      "labNumber": 5,
      "focus": "@Injectable Decorator",
      "action": "Send a fake notification via useClass injection.",
      "expected": "Provider resolves LocalNotification and returns a local message.",
      "hook": "@Injectable marks service for DI metadata.",
      "explanation": "@Injectable Decorator: @Injectable Decorator in the fictitious Society Help Desk project.",
      "snippet": "import {\n\nInjectable\n\n}\nfrom '@angular/core';\n\n@Injectable()\n\nexport class ComplaintService{\n\n}"
    },
    "lab-6": {
      "labNumber": 6,
      "focus": "providedIn Root",
      "action": "Increment a root-provided counter.",
      "expected": "Root identity stays constant while count increases.",
      "hook": "Root = shared service.",
      "explanation": "providedIn:'root': providedIn Root in the fictitious Society Help Desk project.",
      "snippet": "@Injectable({\n\nprovidedIn:'root'\n\n})\nexport class ComplaintService{\n\n}"
    },
    "lab-7": {
      "labNumber": 7,
      "focus": "Singleton Service",
      "action": "Update root counter from two consumers.",
      "expected": "Both consumers display the same count.",
      "hook": "One instance in a common injector.",
      "explanation": "Singleton Service: Singleton Service in the fictitious Society Help Desk project.",
      "snippet": "@Injectable({\n\nprovidedIn:'root'\n\n})"
    },
    "lab-8": {
      "labNumber": 8,
      "focus": "Component Provider",
      "action": "Compare scoped counters in two child panels.",
      "expected": "Each panel's local counter changes independently.",
      "hook": "Local providers isolate state.",
      "explanation": "Providers: Component Provider in the fictitious Society Help Desk project.",
      "snippet": "@Component({\n\nproviders:[\n\nComplaintService\n\n]\n\n})"
    },
    "lab-9": {
      "labNumber": 9,
      "focus": "Shared User State",
      "action": "Change the current user through UserService.",
      "expected": "Two consumers show the same updated name.",
      "hook": "Singleton state is shared.",
      "explanation": "Sharing Data Using Service: Shared User State in the fictitious Society Help Desk project.",
      "snippet": "@Injectable({\n\nprovidedIn:'root'\n\n})\n\nexport class UserService{\n\nuserName =\n\n'Deepak';\n\n}"
    },
    "lab-10": {
      "labNumber": 10,
      "focus": "Employee Service Methods",
      "action": "Add a fictitious employee through injected service.",
      "expected": "The employee list updates from a shared service.",
      "hook": "Business logic belongs in service.",
      "explanation": "Service Methods: Employee Service Methods in the fictitious Society Help Desk project.",
      "snippet": "@Injectable({\n\nprovidedIn:'root'\n\n})\n\nexport class EmployeeService{\n\ngetEmployees(){\n\nreturn [];\n\n}\n\nsaveEmployee(){\n\n}\n\ndeleteEmployee(){\n\n}\n\n}"
    },
    "lab-11": {
      "labNumber": 11,
      "focus": "Complaint Service CRUD",
      "action": "Create, read, update and delete training complaints.",
      "expected": "The displayed complaint records change after each action.",
      "hook": "CRUD = Create, Read, Update, Delete.",
      "explanation": "Society Complaint Service: Complaint Service CRUD in the fictitious Society Help Desk project.",
      "snippet": "@Injectable({\n\nprovidedIn:'root'\n\n})\n\nexport class ComplaintService{\n\ngetComplaints(){\n\n}\n\ncreateComplaint(){\n\n}\n\nupdateComplaint(){\n\n}\n\ndeleteComplaint(){\n\n}\n\n}"
    },
    "lab-12": {
      "labNumber": 12,
      "focus": "Employee Service Operations",
      "action": "Add an employee then remove one.",
      "expected": "EmployeeService maintains the visible employee list.",
      "hook": "Reuse the same business service.",
      "explanation": "Employee Service: Employee Service Operations in the fictitious Society Help Desk project.",
      "snippet": "@Injectable({\n\nprovidedIn:'root'\n\n})\n\nexport class EmployeeService{\n\ngetEmployees(){\n\n}\n\ncreateEmployee(){\n\n}\n\n}"
    },
    "lab-13": {
      "labNumber": 13,
      "focus": "Account Service",
      "action": "Transfer a small fake amount.",
      "expected": "Only the mock account balance changes.",
      "hook": "Service abstraction separates business rules.",
      "explanation": "Banking Service: Account Service in the fictitious Society Help Desk project.",
      "snippet": "@Injectable({\n\nprovidedIn:'root'\n\n})\n\nexport class AccountService{\n\ngetAccount(){\n\n}\n\ntransferMoney(){\n\n}\n\n}"
    },
    "lab-14": {
      "labNumber": 14,
      "focus": "Service API Boundary",
      "action": "Preview endpoint token without making HTTP requests.",
      "expected": "A configured dummy URL is displayed; no network access occurs.",
      "hook": "API integration is a service boundary.",
      "explanation": "Service Consuming API: Service API Boundary in the fictitious Society Help Desk project.",
      "snippet": "@Injectable({\n\nprovidedIn:'root'\n\n})\n\nexport class ComplaintService{\n\nloadComplaints(){\n\n// API Call\n\n}\n\n}"
    },
    "lab-15": {
      "labNumber": 15,
      "focus": "Multiple Injected Services",
      "action": "Read complaint, employee and user services together.",
      "expected": "A combined summary uses multiple injected dependencies.",
      "hook": "Compose services; keep concerns separate.",
      "explanation": "Multiple Services: Multiple Injected Services in the fictitious Society Help Desk project.",
      "snippet": "constructor(\n\nprivate complaintService:\nComplaintService,\n\nprivate employeeService:\nEmployeeService,\n\nprivate userService:\nUserService\n\n){\n\n}"
    }
  }
};
