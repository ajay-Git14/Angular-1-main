/** Curriculum navigation generated from the actual Angular course Markdown filenames.
 * Chapter 03 binds to the existing executable lab; other chapter topic pages
 * are SOURCE-LINKED study checkpoints, not fabricated running demos.
 */
import { LAB_TOPICS } from './lab.catalog';
export type SubtopicKind = 'live' | 'reading';
export interface CourseSubtopic {
 readonly id:string; readonly name:string; readonly kind:SubtopicKind;
 readonly category?:string; readonly detailFile?:string;
}
export interface CourseTopic {
 readonly id:string; readonly name:string; readonly source:string; readonly docPath:string;
 readonly subtopics: readonly CourseSubtopic[];
}
export interface CourseChapter {
 readonly id:string; readonly name:string; readonly folder:string;
 readonly topics:readonly CourseTopic[];
}
const chaptersSource: readonly CourseChapter[] = [
  {
    "id": "01",
    "name": "Fundamentals",
    "folder": "Angular/1. Fundamentals",
    "topics": [
      {
        "id": "introduction-to-angular",
        "name": "Introduction to angular",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/1.%20Fundamentals/1.%20Introduction%20to%20angular.md",
        "docPath": "Angular/1. Fundamentals/1. Introduction to angular.md",
        "subtopics": [
          {
            "id": "lab-1-verify-angular-cli-installation",
            "name": "Lab 1: Verify Angular CLI Installation",
            "kind": "reading"
          },
          {
            "id": "lab-2-create-first-angular-project",
            "name": "Lab 2: Create First Angular Project",
            "kind": "reading"
          },
          {
            "id": "lab-3-open-project",
            "name": "Lab 3: Open Project",
            "kind": "reading"
          },
          {
            "id": "lab-4-run-angular-application",
            "name": "Lab 4: Run Angular Application",
            "kind": "reading"
          },
          {
            "id": "lab-5-explore-project-structure",
            "name": "Lab 5: Explore Project Structure",
            "kind": "reading"
          },
          {
            "id": "lab-6-open-first-component",
            "name": "Lab 6: Open First Component",
            "kind": "reading"
          },
          {
            "id": "lab-7-modify-application-title",
            "name": "Lab 7: Modify Application Title",
            "kind": "reading"
          },
          {
            "id": "lab-8-create-new-component",
            "name": "Lab 8: Create New Component",
            "kind": "reading"
          },
          {
            "id": "lab-9-use-component",
            "name": "Lab 9: Use Component",
            "kind": "reading"
          },
          {
            "id": "lab-10-angular-application-flow",
            "name": "Lab 10: Angular Application Flow",
            "kind": "reading"
          }
        ]
      },
      {
        "id": "angular-latest-version-overview",
        "name": "Angular latest version overview",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/1.%20Fundamentals/2.%20Angular%20latest%20version%20overview.md",
        "docPath": "Angular/1. Fundamentals/2. Angular latest version overview.md",
        "subtopics": [
          {
            "id": "lab-1-check-angular-version",
            "name": "Lab 1: Check Angular Version",
            "kind": "reading"
          },
          {
            "id": "lab-2-create-latest-angular-application",
            "name": "Lab 2: Create Latest Angular Application",
            "kind": "reading"
          },
          {
            "id": "lab-3-first-standalone-component",
            "name": "Lab 3: First Standalone Component",
            "kind": "reading"
          },
          {
            "id": "lab-4-bootstrap-standalone-application",
            "name": "Lab 4: Bootstrap Standalone Application",
            "kind": "reading"
          },
          {
            "id": "lab-5-signal-introduction",
            "name": "Lab 5: Signal Introduction",
            "kind": "reading"
          },
          {
            "id": "lab-6-signal-example",
            "name": "Lab 6: Signal Example",
            "kind": "reading"
          },
          {
            "id": "lab-7-old-control-flow",
            "name": "Lab 7: Old Control Flow",
            "kind": "reading"
          },
          {
            "id": "lab-8-new-angular-control-flow",
            "name": "Lab 8: New Angular Control Flow",
            "kind": "reading"
          },
          {
            "id": "lab-9-angular-for-loop",
            "name": "Lab 9: Angular @for Loop",
            "kind": "reading"
          },
          {
            "id": "lab-10-angular-switch",
            "name": "Lab 10: Angular @switch",
            "kind": "reading"
          },
          {
            "id": "lab-11-ssr-introduction",
            "name": "Lab 11: SSR Introduction",
            "kind": "reading"
          },
          {
            "id": "lab-12-hydration",
            "name": "Lab 12: Hydration",
            "kind": "reading"
          },
          {
            "id": "lab-13-modern-angular-architecture",
            "name": "Lab 13: Modern Angular Architecture",
            "kind": "reading"
          }
        ]
      },
      {
        "id": "architecture-overview",
        "name": "Architecture overview",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/1.%20Fundamentals/3.%20Architecture%20overview.md",
        "docPath": "Angular/1. Fundamentals/3. Architecture overview.md",
        "subtopics": [
          {
            "id": "lab-1-create-project",
            "name": "Lab 1: Create Project",
            "kind": "reading"
          },
          {
            "id": "lab-2-explore-root-folder",
            "name": "Lab 2: Explore Root Folder",
            "kind": "reading"
          },
          {
            "id": "lab-3-understanding-node-modules",
            "name": "Lab 3: Understanding node_modules",
            "kind": "reading"
          },
          {
            "id": "lab-4-understanding-package-json",
            "name": "Lab 4: Understanding package.json",
            "kind": "reading"
          },
          {
            "id": "lab-5-understanding-angular-json",
            "name": "Lab 5: Understanding angular.json",
            "kind": "reading"
          },
          {
            "id": "lab-6-understanding-tsconfig-json",
            "name": "Lab 6: Understanding tsconfig.json",
            "kind": "reading"
          },
          {
            "id": "lab-7-understanding-src-folder",
            "name": "Lab 7: Understanding src Folder",
            "kind": "reading"
          },
          {
            "id": "lab-8-understanding-index-html",
            "name": "Lab 8: Understanding index.html",
            "kind": "reading"
          },
          {
            "id": "lab-9-understanding-main-ts",
            "name": "Lab 9: Understanding main.ts",
            "kind": "reading"
          },
          {
            "id": "lab-10-understanding-app-folder",
            "name": "Lab 10: Understanding app Folder",
            "kind": "reading"
          },
          {
            "id": "lab-11-understanding-app-ts",
            "name": "Lab 11: Understanding app.ts",
            "kind": "reading"
          },
          {
            "id": "lab-12-understanding-app-html",
            "name": "Lab 12: Understanding app.html",
            "kind": "reading"
          },
          {
            "id": "lab-13-understanding-app-css",
            "name": "Lab 13: Understanding app.css",
            "kind": "reading"
          },
          {
            "id": "lab-14-understanding-assets-folder",
            "name": "Lab 14: Understanding Assets Folder",
            "kind": "reading"
          },
          {
            "id": "lab-15-understanding-public-folder",
            "name": "Lab 15: Understanding Public Folder",
            "kind": "reading"
          },
          {
            "id": "lab-16-complete-angular-startup-flow",
            "name": "Lab 16: Complete Angular Startup Flow",
            "kind": "reading"
          },
          {
            "id": "lab-17-society-portal-mapping",
            "name": "Lab 17: Society Portal Mapping",
            "kind": "reading"
          }
        ]
      },
      {
        "id": "angular-cli-and-its-uses",
        "name": "Angular CLI and its Uses",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/1.%20Fundamentals/4.%20Angular%20CLI%20and%20its%20Uses.md",
        "docPath": "Angular/1. Fundamentals/4. Angular CLI and its Uses.md",
        "subtopics": [
          {
            "id": "lab-1-check-angular-version",
            "name": "Lab 1: Check Angular Version",
            "kind": "reading"
          },
          {
            "id": "lab-2-create-angular-project",
            "name": "Lab 2: Create Angular Project",
            "kind": "reading"
          },
          {
            "id": "lab-3-run-angular-application",
            "name": "Lab 3: Run Angular Application",
            "kind": "reading"
          },
          {
            "id": "lab-4-open-browser-automatically",
            "name": "Lab 4: Open Browser Automatically",
            "kind": "reading"
          },
          {
            "id": "lab-5-generate-component",
            "name": "Lab 5: Generate Component",
            "kind": "reading"
          },
          {
            "id": "lab-6-generate-service",
            "name": "Lab 6: Generate Service",
            "kind": "reading"
          },
          {
            "id": "lab-7-generate-interface",
            "name": "Lab 7: Generate Interface",
            "kind": "reading"
          },
          {
            "id": "lab-8-generate-directive",
            "name": "Lab 8: Generate Directive",
            "kind": "reading"
          },
          {
            "id": "lab-9-generate-pipe",
            "name": "Lab 9: Generate Pipe",
            "kind": "reading"
          },
          {
            "id": "lab-10-generate-guard",
            "name": "Lab 10: Generate Guard",
            "kind": "reading"
          },
          {
            "id": "lab-11-generate-class",
            "name": "Lab 11: Generate Class",
            "kind": "reading"
          },
          {
            "id": "lab-12-build-application",
            "name": "Lab 12: Build Application",
            "kind": "reading"
          },
          {
            "id": "lab-13-production-build",
            "name": "Lab 13: Production Build",
            "kind": "reading"
          },
          {
            "id": "lab-14-run-unit-tests",
            "name": "Lab 14: Run Unit Tests",
            "kind": "reading"
          },
          {
            "id": "lab-15-add-angular-material",
            "name": "Lab 15: Add Angular Material",
            "kind": "reading"
          },
          {
            "id": "lab-16-update-angular",
            "name": "Lab 16: Update Angular",
            "kind": "reading"
          },
          {
            "id": "lab-17-real-enterprise-example",
            "name": "Lab 17: Real Enterprise Example",
            "kind": "reading"
          }
        ]
      },
      {
        "id": "angular-cli-commands",
        "name": "Angular CLI commands",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/1.%20Fundamentals/5.%20Angular%20CLI%20commands.md",
        "docPath": "Angular/1. Fundamentals/5. Angular CLI commands.md",
        "subtopics": [
          {
            "id": "lab-1-check-angular-version",
            "name": "Lab 1: Check Angular Version",
            "kind": "reading"
          },
          {
            "id": "lab-2-create-angular-project",
            "name": "Lab 2: Create Angular Project",
            "kind": "reading"
          },
          {
            "id": "lab-3-run-angular-application",
            "name": "Lab 3: Run Angular Application",
            "kind": "reading"
          },
          {
            "id": "lab-4-open-browser-automatically",
            "name": "Lab 4: Open Browser Automatically",
            "kind": "reading"
          },
          {
            "id": "lab-5-generate-component",
            "name": "Lab 5: Generate Component",
            "kind": "reading"
          },
          {
            "id": "lab-6-generate-service",
            "name": "Lab 6: Generate Service",
            "kind": "reading"
          },
          {
            "id": "lab-7-generate-interface",
            "name": "Lab 7: Generate Interface",
            "kind": "reading"
          },
          {
            "id": "lab-8-generate-directive",
            "name": "Lab 8: Generate Directive",
            "kind": "reading"
          },
          {
            "id": "lab-9-generate-pipe",
            "name": "Lab 9: Generate Pipe",
            "kind": "reading"
          },
          {
            "id": "lab-10-generate-guard",
            "name": "Lab 10: Generate Guard",
            "kind": "reading"
          },
          {
            "id": "lab-11-generate-class",
            "name": "Lab 11: Generate Class",
            "kind": "reading"
          },
          {
            "id": "lab-12-build-application",
            "name": "Lab 12: Build Application",
            "kind": "reading"
          },
          {
            "id": "lab-13-production-build",
            "name": "Lab 13: Production Build",
            "kind": "reading"
          },
          {
            "id": "lab-14-run-unit-tests",
            "name": "Lab 14: Run Unit Tests",
            "kind": "reading"
          },
          {
            "id": "lab-15-add-angular-material",
            "name": "Lab 15: Add Angular Material",
            "kind": "reading"
          },
          {
            "id": "lab-16-update-angular",
            "name": "Lab 16: Update Angular",
            "kind": "reading"
          },
          {
            "id": "lab-17-real-enterprise-example",
            "name": "Lab 17: Real Enterprise Example",
            "kind": "reading"
          }
        ]
      },
      {
        "id": "your-first-angular-hello-world-project",
        "name": "Your First Angular Hello world project",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/1.%20Fundamentals/6.%20Your%20First%20Angular%20Hello%20world%20project.md",
        "docPath": "Angular/1. Fundamentals/6. Your First Angular Hello world project.md",
        "subtopics": [
          {
            "id": "lab-1-create-angular-project",
            "name": "Lab 1: Create Angular Project",
            "kind": "reading"
          },
          {
            "id": "lab-2-open-project",
            "name": "Lab 2: Open Project",
            "kind": "reading"
          },
          {
            "id": "lab-3-run-angular-application",
            "name": "Lab 3: Run Angular Application",
            "kind": "reading"
          },
          {
            "id": "lab-4-understand-startup-flow",
            "name": "Lab 4: Understand Startup Flow",
            "kind": "reading"
          },
          {
            "id": "lab-5-open-root-component",
            "name": "Lab 5: Open Root Component",
            "kind": "reading"
          },
          {
            "id": "lab-6-open-template",
            "name": "Lab 6: Open Template",
            "kind": "reading"
          },
          {
            "id": "lab-7-add-your-name",
            "name": "Lab 7: Add Your Name",
            "kind": "reading"
          },
          {
            "id": "lab-8-add-title-property",
            "name": "Lab 8: Add Title Property",
            "kind": "reading"
          },
          {
            "id": "lab-9-display-variable",
            "name": "Lab 9: Display Variable",
            "kind": "reading"
          },
          {
            "id": "lab-10-add-multiple-variables",
            "name": "Lab 10: Add Multiple Variables",
            "kind": "reading"
          },
          {
            "id": "lab-11-add-simple-styling",
            "name": "Lab 11: Add Simple Styling",
            "kind": "reading"
          },
          {
            "id": "lab-12-society-portal-example",
            "name": "Lab 12: Society Portal Example",
            "kind": "reading"
          },
          {
            "id": "lab-13-complete-hello-world-flow",
            "name": "Lab 13: Complete Hello World Flow",
            "kind": "reading"
          }
        ]
      }
    ]
  },
  {
    "id": "02",
    "name": "Components and Templates",
    "folder": "Angular/2. ComponentsAndTemplates",
    "topics": [
      {
        "id": "standalone-components",
        "name": "Standalone Components",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/2.%20ComponentsAndTemplates/1.%20Standalone%20Components.md",
        "docPath": "Angular/2. ComponentsAndTemplates/1. Standalone Components.md",
        "subtopics": [
          {
            "id": "lab-1-generate-standalone-component",
            "name": "Lab 1: Generate Standalone Component",
            "kind": "reading"
          },
          {
            "id": "lab-2-first-standalone-component",
            "name": "Lab 2: First Standalone Component",
            "kind": "reading"
          },
          {
            "id": "lab-3-import-commonmodule",
            "name": "Lab 3: Import CommonModule",
            "kind": "reading"
          },
          {
            "id": "lab-4-using-ngif",
            "name": "Lab 4: Using NgIf",
            "kind": "reading"
          },
          {
            "id": "lab-5-using-ngfor",
            "name": "Lab 5: Using NgFor",
            "kind": "reading"
          },
          {
            "id": "lab-6-import-another-standalone-component",
            "name": "Lab 6: Import Another Standalone Component",
            "kind": "reading"
          },
          {
            "id": "lab-7-standalone-component-flow",
            "name": "Lab 7: Standalone Component Flow",
            "kind": "reading"
          },
          {
            "id": "lab-8-bootstrap-standalone-application",
            "name": "Lab 8: Bootstrap Standalone Application",
            "kind": "reading"
          },
          {
            "id": "lab-9-application-configuration",
            "name": "Lab 9: Application Configuration",
            "kind": "reading"
          },
          {
            "id": "lab-10-standalone-routing",
            "name": "Lab 10: Standalone Routing",
            "kind": "reading"
          },
          {
            "id": "lab-11-router-configuration",
            "name": "Lab 11: Router Configuration",
            "kind": "reading"
          },
          {
            "id": "lab-12-lazy-loading-standalone-components",
            "name": "Lab 12: Lazy Loading Standalone Components",
            "kind": "reading"
          },
          {
            "id": "lab-13-society-dashboard-example",
            "name": "Lab 13: Society Dashboard Example",
            "kind": "reading"
          },
          {
            "id": "lab-14-feature-folder-structure",
            "name": "Lab 14: Feature Folder Structure",
            "kind": "reading"
          },
          {
            "id": "lab-15-modern-angular-architecture",
            "name": "Lab 15: Modern Angular Architecture",
            "kind": "reading"
          }
        ]
      },
      {
        "id": "component",
        "name": "Component",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/2.%20ComponentsAndTemplates/2.%20Component.md",
        "docPath": "Angular/2. ComponentsAndTemplates/2. Component.md",
        "subtopics": [
          {
            "id": "lab-1-generate-component",
            "name": "Lab 1: Generate Component",
            "kind": "reading"
          },
          {
            "id": "lab-2-component-decorator",
            "name": "Lab 2: Component Decorator",
            "kind": "reading"
          },
          {
            "id": "lab-3-component-class",
            "name": "Lab 3: Component Class",
            "kind": "reading"
          },
          {
            "id": "lab-4-component-template",
            "name": "Lab 4: Component Template",
            "kind": "reading"
          },
          {
            "id": "lab-5-component-styles",
            "name": "Lab 5: Component Styles",
            "kind": "reading"
          },
          {
            "id": "lab-6",
            "name": "Lab 6",
            "kind": "reading"
          },
          {
            "id": "lab-7",
            "name": "Lab 7",
            "kind": "reading"
          },
          {
            "id": "lab-8",
            "name": "Lab 8",
            "kind": "reading"
          }
        ]
      },
      {
        "id": "displaying-data-using-for-if-switch",
        "name": "Displaying Data using @for, @if, @switch",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/2.%20ComponentsAndTemplates/3.%20Displaying%20Data%20using%20%40for%2C%20%40if%2C%20%40switch.md",
        "docPath": "Angular/2. ComponentsAndTemplates/3. Displaying Data using @for, @if, @switch.md",
        "subtopics": [
          {
            "id": "lab-1-create-sample-component",
            "name": "Lab 1: Create Sample Component",
            "kind": "reading"
          },
          {
            "id": "lab-2-using-if",
            "name": "Lab 2: Using @if",
            "kind": "reading"
          },
          {
            "id": "lab-3-using-if-else",
            "name": "Lab 3: Using @if else",
            "kind": "reading"
          },
          {
            "id": "lab-4-nested-if",
            "name": "Lab 4: Nested @if",
            "kind": "reading"
          },
          {
            "id": "lab-5-create-data-array",
            "name": "Lab 5: Create Data Array",
            "kind": "reading"
          },
          {
            "id": "lab-6-using-for",
            "name": "Lab 6: Using @for",
            "kind": "reading"
          },
          {
            "id": "lab-7-understanding-track",
            "name": "Lab 7: Understanding track",
            "kind": "reading"
          },
          {
            "id": "lab-8-using-empty",
            "name": "Lab 8: Using @empty",
            "kind": "reading"
          },
          {
            "id": "lab-9-employee-example",
            "name": "Lab 9: Employee Example",
            "kind": "reading"
          },
          {
            "id": "lab-10-using-switch",
            "name": "Lab 10: Using @switch",
            "kind": "reading"
          },
          {
            "id": "lab-11-multiple-cases",
            "name": "Lab 11: Multiple Cases",
            "kind": "reading"
          },
          {
            "id": "lab-12-default-case",
            "name": "Lab 12: Default Case",
            "kind": "reading"
          },
          {
            "id": "lab-13-society-complaint-management-example",
            "name": "Lab 13: Society Complaint Management Example",
            "kind": "reading"
          },
          {
            "id": "lab-14-dashboard-role-example",
            "name": "Lab 14: Dashboard Role Example",
            "kind": "reading"
          }
        ]
      },
      {
        "id": "template-syntax",
        "name": "Template Syntax",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/2.%20ComponentsAndTemplates/4.%20Template%20Syntax.md",
        "docPath": "Angular/2. ComponentsAndTemplates/4. Template Syntax.md",
        "subtopics": [
          {
            "id": "lab-1-create-component-property",
            "name": "Lab 1: Create Component Property",
            "kind": "reading"
          },
          {
            "id": "lab-2-interpolation",
            "name": "Lab 2: Interpolation",
            "kind": "reading"
          },
          {
            "id": "lab-3-multiple-variables",
            "name": "Lab 3: Multiple Variables",
            "kind": "reading"
          },
          {
            "id": "lab-4-template-expressions",
            "name": "Lab 4: Template Expressions",
            "kind": "reading"
          },
          {
            "id": "lab-5-string-operations",
            "name": "Lab 5: String Operations",
            "kind": "reading"
          },
          {
            "id": "lab-6-boolean-expression",
            "name": "Lab 6: Boolean Expression",
            "kind": "reading"
          },
          {
            "id": "lab-7-arithmetic-expression",
            "name": "Lab 7: Arithmetic Expression",
            "kind": "reading"
          },
          {
            "id": "lab-8-template-statements",
            "name": "Lab 8: Template Statements",
            "kind": "reading"
          },
          {
            "id": "lab-9-template-reference-variable",
            "name": "Lab 9: Template Reference Variable",
            "kind": "reading"
          },
          {
            "id": "lab-10-reading-template-reference",
            "name": "Lab 10: Reading Template Reference",
            "kind": "reading"
          },
          {
            "id": "lab-11-safe-navigation-operator",
            "name": "Lab 11: Safe Navigation Operator",
            "kind": "reading"
          },
          {
            "id": "lab-12-object-example",
            "name": "Lab 12: Object Example",
            "kind": "reading"
          },
          {
            "id": "lab-13-society-complaint-example",
            "name": "Lab 13: Society Complaint Example",
            "kind": "reading"
          },
          {
            "id": "lab-14-dashboard-example",
            "name": "Lab 14: Dashboard Example",
            "kind": "reading"
          },
          {
            "id": "lab-15-combining-expressions",
            "name": "Lab 15: Combining Expressions",
            "kind": "reading"
          }
        ]
      },
      {
        "id": "data-binding",
        "name": "Data Binding",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/2.%20ComponentsAndTemplates/5.%20Data%20Binding.md",
        "docPath": "Angular/2. ComponentsAndTemplates/5. Data Binding.md",
        "subtopics": [
          {
            "id": "lab-1-interpolation-binding",
            "name": "Lab 1: Interpolation Binding",
            "kind": "reading"
          },
          {
            "id": "lab-2-multiple-values",
            "name": "Lab 2: Multiple Values",
            "kind": "reading"
          },
          {
            "id": "lab-3-expression-binding",
            "name": "Lab 3: Expression Binding",
            "kind": "reading"
          },
          {
            "id": "lab-4-object-binding",
            "name": "Lab 4: Object Binding",
            "kind": "reading"
          },
          {
            "id": "lab-5-dashboard-statistics",
            "name": "Lab 5: Dashboard Statistics",
            "kind": "reading"
          },
          {
            "id": "lab-6-binding-dynamic-message",
            "name": "Lab 6: Binding Dynamic Message",
            "kind": "reading"
          },
          {
            "id": "lab-7-property-binding-example",
            "name": "Lab 7: Property Binding Example",
            "kind": "reading"
          },
          {
            "id": "lab-8-dynamic-button-state",
            "name": "Lab 8: Dynamic Button State",
            "kind": "reading"
          },
          {
            "id": "lab-9-event-binding-preview",
            "name": "Lab 9: Event Binding Preview",
            "kind": "reading"
          },
          {
            "id": "lab-10-data-flow-example",
            "name": "Lab 10: Data Flow Example",
            "kind": "reading"
          },
          {
            "id": "lab-11-society-complaint-example",
            "name": "Lab 11: Society Complaint Example",
            "kind": "reading"
          },
          {
            "id": "lab-12-resident-information-example",
            "name": "Lab 12: Resident Information Example",
            "kind": "reading"
          },
          {
            "id": "lab-13-complaint-dashboard",
            "name": "Lab 13: Complaint Dashboard",
            "kind": "reading"
          },
          {
            "id": "lab-14-angular-data-flow-visualization",
            "name": "Lab 14: Angular Data Flow Visualization",
            "kind": "reading"
          }
        ]
      },
      {
        "id": "event-binding",
        "name": "Event Binding",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/2.%20ComponentsAndTemplates/6.%20Event%20Binding.md",
        "docPath": "Angular/2. ComponentsAndTemplates/6. Event Binding.md",
        "subtopics": [
          {
            "id": "lab-1-first-click-event",
            "name": "Lab 1: First Click Event",
            "kind": "reading"
          },
          {
            "id": "lab-2-increment-counter",
            "name": "Lab 2: Increment Counter",
            "kind": "reading"
          },
          {
            "id": "lab-3-multiple-event-calls",
            "name": "Lab 3: Multiple Event Calls",
            "kind": "reading"
          },
          {
            "id": "lab-4-input-event",
            "name": "Lab 4: Input Event",
            "kind": "reading"
          },
          {
            "id": "lab-5-change-event",
            "name": "Lab 5: Change Event",
            "kind": "reading"
          },
          {
            "id": "lab-6-keyup-event",
            "name": "Lab 6: Keyup Event",
            "kind": "reading"
          },
          {
            "id": "lab-7-keydown-event",
            "name": "Lab 7: Keydown Event",
            "kind": "reading"
          },
          {
            "id": "lab-8-reading-event-object",
            "name": "Lab 8: Reading Event Object",
            "kind": "reading"
          },
          {
            "id": "lab-9-reading-mouse-coordinates",
            "name": "Lab 9: Reading Mouse Coordinates",
            "kind": "reading"
          },
          {
            "id": "lab-10-passing-parameters",
            "name": "Lab 10: Passing Parameters",
            "kind": "reading"
          },
          {
            "id": "lab-11-form-submit-event",
            "name": "Lab 11: Form Submit Event",
            "kind": "reading"
          },
          {
            "id": "lab-12-complaint-registration-example",
            "name": "Lab 12: Complaint Registration Example",
            "kind": "reading"
          },
          {
            "id": "lab-13-resident-search-example",
            "name": "Lab 13: Resident Search Example",
            "kind": "reading"
          },
          {
            "id": "lab-14-dashboard-refresh-example",
            "name": "Lab 14: Dashboard Refresh Example",
            "kind": "reading"
          }
        ]
      },
      {
        "id": "property-binding",
        "name": "Property Binding",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/2.%20ComponentsAndTemplates/7.%20Property%20Binding.md",
        "docPath": "Angular/2. ComponentsAndTemplates/7. Property Binding.md",
        "subtopics": [
          {
            "id": "lab-1-first-property-binding",
            "name": "Lab 1: First Property Binding",
            "kind": "reading"
          },
          {
            "id": "lab-2-image-binding",
            "name": "Lab 2: Image Binding",
            "kind": "reading"
          },
          {
            "id": "lab-3-hyperlink-binding",
            "name": "Lab 3: Hyperlink Binding",
            "kind": "reading"
          },
          {
            "id": "lab-4-button-disable-example",
            "name": "Lab 4: Button Disable Example",
            "kind": "reading"
          },
          {
            "id": "lab-5-dynamic-enable-disable",
            "name": "Lab 5: Dynamic Enable Disable",
            "kind": "reading"
          },
          {
            "id": "lab-6-input-placeholder",
            "name": "Lab 6: Input Placeholder",
            "kind": "reading"
          },
          {
            "id": "lab-7-dynamic-css-class",
            "name": "Lab 7: Dynamic CSS Class",
            "kind": "reading"
          },
          {
            "id": "lab-8-dynamic-style-binding",
            "name": "Lab 8: Dynamic Style Binding",
            "kind": "reading"
          },
          {
            "id": "lab-9-dynamic-width",
            "name": "Lab 9: Dynamic Width",
            "kind": "reading"
          },
          {
            "id": "lab-10-profile-picture-example",
            "name": "Lab 10: Profile Picture Example",
            "kind": "reading"
          },
          {
            "id": "lab-11-society-complaint-status",
            "name": "Lab 11: Society Complaint Status",
            "kind": "reading"
          },
          {
            "id": "lab-12-resident-portal-link",
            "name": "Lab 12: Resident Portal Link",
            "kind": "reading"
          },
          {
            "id": "lab-13-complaint-priority-color",
            "name": "Lab 13: Complaint Priority Color",
            "kind": "reading"
          },
          {
            "id": "lab-14-dashboard-card-style",
            "name": "Lab 14: Dashboard Card Style",
            "kind": "reading"
          },
          {
            "id": "lab-15-complete-property-binding-flow",
            "name": "Lab 15: Complete Property Binding Flow",
            "kind": "reading"
          }
        ]
      },
      {
        "id": "two-way-binding",
        "name": "Two Way Binding",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/2.%20ComponentsAndTemplates/8.%20Two%20Way%20Binding.md",
        "docPath": "Angular/2. ComponentsAndTemplates/8. Two Way Binding.md",
        "subtopics": [
          {
            "id": "lab-1-import-formsmodule",
            "name": "Lab 1: Import FormsModule",
            "kind": "reading"
          },
          {
            "id": "lab-2-first-two-way-binding",
            "name": "Lab 2: First Two Way Binding",
            "kind": "reading"
          },
          {
            "id": "lab-3-real-time-name-update",
            "name": "Lab 3: Real-Time Name Update",
            "kind": "reading"
          },
          {
            "id": "lab-4-course-selection",
            "name": "Lab 4: Course Selection",
            "kind": "reading"
          },
          {
            "id": "lab-5-age-input",
            "name": "Lab 5: Age Input",
            "kind": "reading"
          },
          {
            "id": "lab-6-complaint-title",
            "name": "Lab 6: Complaint Title",
            "kind": "reading"
          },
          {
            "id": "lab-7-resident-registration",
            "name": "Lab 7: Resident Registration",
            "kind": "reading"
          },
          {
            "id": "lab-8-feedback-form",
            "name": "Lab 8: Feedback Form",
            "kind": "reading"
          },
          {
            "id": "lab-9-dropdown-binding",
            "name": "Lab 9: Dropdown Binding",
            "kind": "reading"
          },
          {
            "id": "lab-10-checkbox-binding",
            "name": "Lab 10: Checkbox Binding",
            "kind": "reading"
          },
          {
            "id": "lab-11-login-form-example",
            "name": "Lab 11: Login Form Example",
            "kind": "reading"
          },
          {
            "id": "lab-12-society-complaint-form",
            "name": "Lab 12: Society Complaint Form",
            "kind": "reading"
          },
          {
            "id": "lab-13-dashboard-filter",
            "name": "Lab 13: Dashboard Filter",
            "kind": "reading"
          },
          {
            "id": "lab-14-complete-two-way-binding-flow",
            "name": "Lab 14: Complete Two Way Binding Flow",
            "kind": "reading"
          }
        ]
      },
      {
        "id": "lifecycle-hooks",
        "name": "Lifecycle Hooks",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/2.%20ComponentsAndTemplates/9.%20Lifecycle%20Hooks.md",
        "docPath": "Angular/2. ComponentsAndTemplates/9. Lifecycle Hooks.md",
        "subtopics": [
          {
            "id": "lab-1-constructor",
            "name": "Lab 1: Constructor",
            "kind": "reading"
          },
          {
            "id": "lab-2-ngoninit",
            "name": "Lab 2: ngOnInit",
            "kind": "reading"
          },
          {
            "id": "lab-3-data-loading-example",
            "name": "Lab 3: Data Loading Example",
            "kind": "reading"
          },
          {
            "id": "lab-4-ngonchanges",
            "name": "Lab 4: ngOnChanges",
            "kind": "reading"
          },
          {
            "id": "lab-5-parent-child-example",
            "name": "Lab 5: Parent Child Example",
            "kind": "reading"
          },
          {
            "id": "lab-6-ngdocheck",
            "name": "Lab 6: ngDoCheck",
            "kind": "reading"
          },
          {
            "id": "lab-7-ngaftercontentinit",
            "name": "Lab 7: ngAfterContentInit",
            "kind": "reading"
          },
          {
            "id": "lab-8-ngaftercontentchecked",
            "name": "Lab 8: ngAfterContentChecked",
            "kind": "reading"
          },
          {
            "id": "lab-9-ngafterviewinit",
            "name": "Lab 9: ngAfterViewInit",
            "kind": "reading"
          },
          {
            "id": "lab-10-access-view-example",
            "name": "Lab 10: Access View Example",
            "kind": "reading"
          },
          {
            "id": "lab-11-ngafterviewchecked",
            "name": "Lab 11: ngAfterViewChecked",
            "kind": "reading"
          },
          {
            "id": "lab-12-ngondestroy",
            "name": "Lab 12: ngOnDestroy",
            "kind": "reading"
          },
          {
            "id": "lab-13-unsubscribe-example",
            "name": "Lab 13: Unsubscribe Example",
            "kind": "reading"
          },
          {
            "id": "lab-14-timer-cleanup-example",
            "name": "Lab 14: Timer Cleanup Example",
            "kind": "reading"
          },
          {
            "id": "lab-15-complete-lifecycle-visualization",
            "name": "Lab 15: Complete Lifecycle Visualization",
            "kind": "reading"
          },
          {
            "id": "lab-16-society-complaint-dashboard-example",
            "name": "Lab 16: Society Complaint Dashboard Example",
            "kind": "reading"
          }
        ]
      },
      {
        "id": "component-interaction-input-output",
        "name": "Component Interaction @Input, @Output",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/2.%20ComponentsAndTemplates/10.%20Component%20Interaction%20%40Input%2C%20%40Output.md",
        "docPath": "Angular/2. ComponentsAndTemplates/10. Component Interaction @Input, @Output.md",
        "subtopics": [
          {
            "id": "lab-1-create-signal",
            "name": "Lab 1: Create Signal",
            "kind": "reading"
          },
          {
            "id": "lab-2-update-signal",
            "name": "Lab 2: Update Signal",
            "kind": "reading"
          },
          {
            "id": "lab-3-increment-signal",
            "name": "Lab 3: Increment Signal",
            "kind": "reading"
          },
          {
            "id": "lab-4-display-signal",
            "name": "Lab 4: Display Signal",
            "kind": "reading"
          },
          {
            "id": "lab-5-create-signal-input",
            "name": "Lab 5: Create Signal Input",
            "kind": "reading"
          },
          {
            "id": "lab-6-parent-passes-data",
            "name": "Lab 6: Parent Passes Data",
            "kind": "reading"
          },
          {
            "id": "lab-7-child-reads-signal-input",
            "name": "Lab 7: Child Reads Signal Input",
            "kind": "reading"
          },
          {
            "id": "lab-8-dynamic-updates",
            "name": "Lab 8: Dynamic Updates",
            "kind": "reading"
          },
          {
            "id": "lab-9-create-signal-output",
            "name": "Lab 9: Create Signal Output",
            "kind": "reading"
          },
          {
            "id": "lab-10-emit-signal-output",
            "name": "Lab 10: Emit Signal Output",
            "kind": "reading"
          },
          {
            "id": "lab-11-child-template",
            "name": "Lab 11: Child Template",
            "kind": "reading"
          },
          {
            "id": "lab-12-parent-receives-output",
            "name": "Lab 12: Parent Receives Output",
            "kind": "reading"
          },
          {
            "id": "lab-13-complaint-registration-example",
            "name": "Lab 13: Complaint Registration Example",
            "kind": "reading"
          },
          {
            "id": "lab-14-resident-management-example",
            "name": "Lab 14: Resident Management Example",
            "kind": "reading"
          },
          {
            "id": "lab-15-dashboard-refresh-example",
            "name": "Lab 15: Dashboard Refresh Example",
            "kind": "reading"
          },
          {
            "id": "lab-16-signal-communication-flow",
            "name": "Lab 16: Signal Communication Flow",
            "kind": "reading"
          },
          {
            "id": "lab-17-society-complaint-management-architecture",
            "name": "Lab 17: Society Complaint Management Architecture",
            "kind": "reading"
          }
        ]
      },
      {
        "id": "signal-inputs-and-outputs",
        "name": "Signal Inputs and Outputs",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/2.%20ComponentsAndTemplates/11.%20Signal%20Inputs%20and%20Outputs.md",
        "docPath": "Angular/2. ComponentsAndTemplates/11. Signal Inputs and Outputs.md",
        "subtopics": [
          {
            "id": "what",
            "name": "What",
            "kind": "reading"
          }
        ]
      },
      {
        "id": "component-styles",
        "name": "Component Styles",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/2.%20ComponentsAndTemplates/12.%20Component%20Styles.md",
        "docPath": "Angular/2. ComponentsAndTemplates/12. Component Styles.md",
        "subtopics": [
          {
            "id": "lab-1-component-style-file",
            "name": "Lab 1: Component Style File",
            "kind": "reading"
          },
          {
            "id": "lab-2-add-component-style",
            "name": "Lab 2: Add Component Style",
            "kind": "reading"
          },
          {
            "id": "lab-3-inline-styles",
            "name": "Lab 3: Inline Styles",
            "kind": "reading"
          },
          {
            "id": "lab-4-external-style-file",
            "name": "Lab 4: External Style File",
            "kind": "reading"
          },
          {
            "id": "lab-5-multiple-component-styling",
            "name": "Lab 5: Multiple Component Styling",
            "kind": "reading"
          },
          {
            "id": "lab-6-default-angular-behavior",
            "name": "Lab 6: Default Angular Behavior",
            "kind": "reading"
          },
          {
            "id": "lab-7-shadow-dom",
            "name": "Lab 7: Shadow DOM",
            "kind": "reading"
          },
          {
            "id": "lab-8-disable-encapsulation",
            "name": "Lab 8: Disable Encapsulation",
            "kind": "reading"
          },
          {
            "id": "lab-9-dynamic-class-binding",
            "name": "Lab 9: Dynamic Class Binding",
            "kind": "reading"
          },
          {
            "id": "lab-10-dynamic-style-binding",
            "name": "Lab 10: Dynamic Style Binding",
            "kind": "reading"
          },
          {
            "id": "lab-11-society-dashboard-header",
            "name": "Lab 11: Society Dashboard Header",
            "kind": "reading"
          },
          {
            "id": "lab-12-complaint-status-colors",
            "name": "Lab 12: Complaint Status Colors",
            "kind": "reading"
          },
          {
            "id": "lab-13-resident-card-styling",
            "name": "Lab 13: Resident Card Styling",
            "kind": "reading"
          },
          {
            "id": "lab-14-dashboard-grid-layout",
            "name": "Lab 14: Dashboard Grid Layout",
            "kind": "reading"
          },
          {
            "id": "lab-15-component-style-architecture",
            "name": "Lab 15: Component Style Architecture",
            "kind": "reading"
          }
        ]
      }
    ]
  },
  {
    "id": "03",
    "name": "Directives, Pipes and Animations",
    "folder": "Angular/3. Directives, Pipes and Animations",
    "topics": [
      {
        "id": "attribute-directives",
        "name": "Attribute Directives, [ngClass], [ngStyle], other attributes",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/3.%20Directives%2C%20Pipes%20and%20Animations/1.%20Attribute%20Directives%2C%20%5BngClass%5D%2C%20%5BngStyle%5D%2C%20other%20attributes.md",
        "docPath": "Angular/3. Directives, Pipes and Animations/1. Attribute Directives, [ngClass], [ngStyle], other attributes.md",
        "subtopics": [
          {
            "id": "ngclass",
            "kind": "live",
            "category": "directives",
            "name": "ngClass"
          },
          {
            "id": "ngstyle",
            "kind": "live",
            "category": "directives",
            "name": "ngStyle"
          },
          {
            "id": "attribute",
            "kind": "live",
            "category": "directives",
            "name": "Attribute and disabled bindings"
          }
        ]
      },
      {
        "id": "structural-directives",
        "name": "Structural Directives",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/3.%20Directives%2C%20Pipes%20and%20Animations/2.%20Structural%20Directives.md",
        "docPath": "Angular/3. Directives, Pipes and Animations/2. Structural Directives.md",
        "subtopics": [
          {
            "id": "if",
            "kind": "live",
            "category": "directives",
            "name": "@if / @else"
          },
          {
            "id": "for",
            "kind": "live",
            "category": "directives",
            "name": "@for / @empty"
          },
          {
            "id": "switch",
            "kind": "live",
            "category": "directives",
            "name": "@switch / @case"
          }
        ]
      },
      {
        "id": "custom-directives",
        "name": "Custom Directives",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/3.%20Directives%2C%20Pipes%20and%20Animations/3.%20Custom%20Directives.md",
        "docPath": "Angular/3. Directives, Pipes and Animations/3. Custom Directives.md",
        "subtopics": [
          {
            "id": "hover",
            "kind": "live",
            "category": "directives",
            "name": "Custom Hover Highlight"
          },
          {
            "id": "priority",
            "kind": "live",
            "category": "directives",
            "name": "Custom Priority Badge"
          }
        ]
      },
      {
        "id": "pipes-and-custom-pipes",
        "name": "Pipes and custom pipes",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/3.%20Directives%2C%20Pipes%20and%20Animations/4.%20Pipes%20and%20custom%20pipes.md",
        "docPath": "Angular/3. Directives, Pipes and Animations/4. Pipes and custom pipes.md",
        "subtopics": [
          {
            "id": "uppercase",
            "kind": "live",
            "category": "pipes",
            "name": "UpperCasePipe"
          },
          {
            "id": "lowercase",
            "kind": "live",
            "category": "pipes",
            "name": "LowerCasePipe"
          },
          {
            "id": "titlecase",
            "kind": "live",
            "category": "pipes",
            "name": "TitleCasePipe"
          },
          {
            "id": "currency",
            "kind": "live",
            "category": "pipes",
            "name": "CurrencyPipe"
          },
          {
            "id": "date",
            "kind": "live",
            "category": "pipes",
            "name": "DatePipe"
          },
          {
            "id": "percent",
            "kind": "live",
            "category": "pipes",
            "name": "PercentPipe"
          },
          {
            "id": "json",
            "kind": "live",
            "category": "pipes",
            "name": "JsonPipe"
          },
          {
            "id": "slice",
            "kind": "live",
            "category": "pipes",
            "name": "SlicePipe"
          },
          {
            "id": "chain",
            "kind": "live",
            "category": "pipes",
            "name": "Chained pipes"
          },
          {
            "id": "custom",
            "kind": "live",
            "category": "pipes",
            "name": "Custom Status Label Pipe"
          }
        ]
      },
      {
        "id": "animations",
        "name": "Animations",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/3.%20Directives%2C%20Pipes%20and%20Animations/5.%20Animations.md",
        "docPath": "Angular/3. Directives, Pipes and Animations/5. Animations.md",
        "subtopics": [
          {
            "id": "enter",
            "kind": "live",
            "category": "animations",
            "name": "animate.enter"
          },
          {
            "id": "leave",
            "kind": "live",
            "category": "animations",
            "name": "animate.leave"
          },
          {
            "id": "fade",
            "kind": "live",
            "category": "animations",
            "name": "Fade transition"
          },
          {
            "id": "slide",
            "kind": "live",
            "category": "animations",
            "name": "Slide transition"
          },
          {
            "id": "scale",
            "kind": "live",
            "category": "animations",
            "name": "Scale transition"
          },
          {
            "id": "hoverlift",
            "kind": "live",
            "category": "animations",
            "name": "Hover lift"
          },
          {
            "id": "toast",
            "kind": "live",
            "category": "animations",
            "name": "Animated notification"
          },
          {
            "id": "stagger",
            "kind": "live",
            "category": "animations",
            "name": "Staggered list entrance"
          }
        ]
      }
    ]
  },
  {
    "id": "04",
    "name": "Forms",
    "folder": "Angular/4. Forms",
    "topics": [
      {
        "id": "forms",
        "name": "Forms",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/4.%20Forms/1.%20Forms.md",
        "docPath": "Angular/4. Forms/1. Forms.md",
        "subtopics": [
          {
            "id": "lab-1-first-form",
            "name": "Lab 1: First Form",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/forms/lab-1-first-form.md"
          },
          {
            "id": "lab-2-user-registration-form",
            "name": "Lab 2: User Registration Form",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/forms/lab-2-user-registration-form.md"
          },
          {
            "id": "lab-3-complaint-registration-form",
            "name": "Lab 3: Complaint Registration Form",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/forms/lab-3-complaint-registration-form.md"
          },
          {
            "id": "lab-4-login-form",
            "name": "Lab 4: Login Form",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/forms/lab-4-login-form.md"
          },
          {
            "id": "lab-5-employee-registration-form",
            "name": "Lab 5: Employee Registration Form",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/forms/lab-5-employee-registration-form.md"
          },
          {
            "id": "lab-6-textbox",
            "name": "Lab 6: Textbox",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/forms/lab-6-textbox.md"
          },
          {
            "id": "lab-7-textarea",
            "name": "Lab 7: Textarea",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/forms/lab-7-textarea.md"
          },
          {
            "id": "lab-8-dropdown",
            "name": "Lab 8: Dropdown",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/forms/lab-8-dropdown.md"
          },
          {
            "id": "lab-9-checkbox",
            "name": "Lab 9: Checkbox",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/forms/lab-9-checkbox.md"
          },
          {
            "id": "lab-10-radio-button",
            "name": "Lab 10: Radio Button",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/forms/lab-10-radio-button.md"
          },
          {
            "id": "lab-11-submit-event",
            "name": "Lab 11: Submit Event",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/forms/lab-11-submit-event.md"
          },
          {
            "id": "lab-12",
            "name": "Lab 12 — Society Complaint Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/forms/lab-12.md"
          },
          {
            "id": "lab-13",
            "name": "Lab 13 — Employee Onboarding Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/forms/lab-13.md"
          },
          {
            "id": "lab-14",
            "name": "Lab 14 — Student Registration Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/forms/lab-14.md"
          },
          {
            "id": "lab-15",
            "name": "Lab 15 — Dashboard Search Form",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/forms/lab-15.md"
          }
        ]
      },
      {
        "id": "user-input",
        "name": "User Input",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/4.%20Forms/2.%20User%20Input.md",
        "docPath": "Angular/4. Forms/2. User Input.md",
        "subtopics": [
          {
            "id": "lab-1-text-input",
            "name": "Lab 1: Text Input",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/user-input/lab-1-text-input.md"
          },
          {
            "id": "lab-2-capturing-text-input",
            "name": "Lab 2: Capturing Text Input",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/user-input/lab-2-capturing-text-input.md"
          },
          {
            "id": "lab-3-email-input",
            "name": "Lab 3: Email Input",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/user-input/lab-3-email-input.md"
          },
          {
            "id": "lab-4-password-input",
            "name": "Lab 4: Password Input",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/user-input/lab-4-password-input.md"
          },
          {
            "id": "lab-5",
            "name": "Lab 5 — Textarea",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/user-input/lab-5.md"
          },
          {
            "id": "lab-6-complaint-description",
            "name": "Lab 6: Complaint Description",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/user-input/lab-6-complaint-description.md"
          },
          {
            "id": "lab-7",
            "name": "Lab 7 — Checkbox",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/user-input/lab-7.md"
          },
          {
            "id": "lab-8-terms-acceptance",
            "name": "Lab 8: Terms Acceptance",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/user-input/lab-8-terms-acceptance.md"
          },
          {
            "id": "lab-9",
            "name": "Lab 9 — Radio Button",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/user-input/lab-9.md"
          },
          {
            "id": "lab-10",
            "name": "Lab 10 — Dropdown",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/user-input/lab-10.md"
          },
          {
            "id": "lab-11-complaint-category",
            "name": "Lab 11: Complaint Category",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/user-input/lab-11-complaint-category.md"
          },
          {
            "id": "lab-12",
            "name": "Lab 12 — Date Input",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/user-input/lab-12.md"
          },
          {
            "id": "lab-13",
            "name": "Lab 13 — File Upload",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/user-input/lab-13.md"
          },
          {
            "id": "lab-14-complaint-attachment",
            "name": "Lab 14: Complaint Attachment",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/user-input/lab-14-complaint-attachment.md"
          },
          {
            "id": "lab-15-input-event",
            "name": "Lab 15: Input Event",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/user-input/lab-15-input-event.md"
          },
          {
            "id": "lab-16-keyup-event",
            "name": "Lab 16: Keyup Event",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/user-input/lab-16-keyup-event.md"
          },
          {
            "id": "lab-17-change-event",
            "name": "Lab 17: Change Event",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/user-input/lab-17-change-event.md"
          },
          {
            "id": "lab-18",
            "name": "Lab 18 — Society Complaint Registration Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/user-input/lab-18.md"
          },
          {
            "id": "lab-19",
            "name": "Lab 19 — Employee Onboarding Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/user-input/lab-19.md"
          },
          {
            "id": "lab-20",
            "name": "Lab 20 — Banking Application Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/user-input/lab-20.md"
          }
        ]
      },
      {
        "id": "template-driven-forms",
        "name": "Template-driven Forms",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/4.%20Forms/3.%20Template-driven%20Forms.md",
        "docPath": "Angular/4. Forms/3. Template-driven Forms.md",
        "subtopics": [
          {
            "id": "lab-1-first-template-driven-form",
            "name": "Lab 1: First Template-Driven Form",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/template-driven-forms/lab-1-first-template-driven-form.md"
          },
          {
            "id": "lab-2-register-ngform",
            "name": "Lab 2: Register ngForm",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/template-driven-forms/lab-2-register-ngform.md"
          },
          {
            "id": "lab-3-bind-user-name",
            "name": "Lab 3: Bind User Name",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/template-driven-forms/lab-3-bind-user-name.md"
          },
          {
            "id": "lab-4-multiple-controls",
            "name": "Lab 4: Multiple Controls",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/template-driven-forms/lab-4-multiple-controls.md"
          },
          {
            "id": "lab-5",
            "name": "Lab 5 — Form Submission",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/template-driven-forms/lab-5.md"
          },
          {
            "id": "lab-6",
            "name": "Lab 6 — Touched",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/template-driven-forms/lab-6.md"
          },
          {
            "id": "lab-7",
            "name": "Lab 7 — Untouched",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/template-driven-forms/lab-7.md"
          },
          {
            "id": "lab-8",
            "name": "Lab 8 — Dirty",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/template-driven-forms/lab-8.md"
          },
          {
            "id": "lab-9",
            "name": "Lab 9 — Pristine",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/template-driven-forms/lab-9.md"
          },
          {
            "id": "lab-10",
            "name": "Lab 10 — Valid",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/template-driven-forms/lab-10.md"
          },
          {
            "id": "lab-11",
            "name": "Lab 11 — Invalid",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/template-driven-forms/lab-11.md"
          },
          {
            "id": "lab-12",
            "name": "Lab 12 — Required Validation",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/template-driven-forms/lab-12.md"
          },
          {
            "id": "lab-13",
            "name": "Lab 13 — Email Validation",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/template-driven-forms/lab-13.md"
          },
          {
            "id": "lab-14",
            "name": "Lab 14 — Minimum Length Validation",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/template-driven-forms/lab-14.md"
          },
          {
            "id": "lab-15",
            "name": "Lab 15 — Validation Message",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/template-driven-forms/lab-15.md"
          },
          {
            "id": "lab-16",
            "name": "Lab 16 — Society Complaint Form",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/template-driven-forms/lab-16.md"
          },
          {
            "id": "lab-17",
            "name": "Lab 17 — Employee Registration Form",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/template-driven-forms/lab-17.md"
          },
          {
            "id": "lab-18",
            "name": "Lab 18 — Student Enrollment Form",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/template-driven-forms/lab-18.md"
          },
          {
            "id": "lab-19",
            "name": "Lab 19 — Login Form",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/template-driven-forms/lab-19.md"
          }
        ]
      },
      {
        "id": "reactive-forms",
        "name": "Reactive Forms",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/4.%20Forms/4.%20Reactive%20Forms.md",
        "docPath": "Angular/4. Forms/4. Reactive Forms.md",
        "subtopics": [
          {
            "id": "lab-1-first-formcontrol",
            "name": "Lab 1: First FormControl",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/reactive-forms/lab-1-first-formcontrol.md"
          },
          {
            "id": "lab-2-first-formgroup",
            "name": "Lab 2: First FormGroup",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/reactive-forms/lab-2-first-formgroup.md"
          },
          {
            "id": "lab-3",
            "name": "Lab 3 — Reading Values",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/reactive-forms/lab-3.md"
          },
          {
            "id": "lab-4",
            "name": "Lab 4 — Form Submission",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/reactive-forms/lab-4.md"
          },
          {
            "id": "lab-5",
            "name": "Lab 5 — setValue()",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/reactive-forms/lab-5.md"
          },
          {
            "id": "lab-6",
            "name": "Lab 6 — patchValue()",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/reactive-forms/lab-6.md"
          },
          {
            "id": "lab-7",
            "name": "Lab 7 — FormBuilder",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/reactive-forms/lab-7.md"
          },
          {
            "id": "lab-8",
            "name": "Lab 8 — FormBuilder",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/reactive-forms/lab-8.md"
          },
          {
            "id": "lab-9",
            "name": "Lab 9 — Form Validation",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/reactive-forms/lab-9.md"
          },
          {
            "id": "lab-10",
            "name": "Lab 10 — Validation Check",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/reactive-forms/lab-10.md"
          },
          {
            "id": "lab-11",
            "name": "Lab 11 — valueChanges",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/reactive-forms/lab-11.md"
          },
          {
            "id": "lab-12",
            "name": "Lab 12 — FormArray",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/reactive-forms/lab-12.md"
          },
          {
            "id": "lab-13",
            "name": "Lab 13 — FormArray",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/reactive-forms/lab-13.md"
          },
          {
            "id": "lab-14",
            "name": "Lab 14 — FormArray",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/reactive-forms/lab-14.md"
          },
          {
            "id": "lab-15",
            "name": "Lab 15 — Society Complaint Form",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/reactive-forms/lab-15.md"
          },
          {
            "id": "lab-16",
            "name": "Lab 16 — Employee Registration Form",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/reactive-forms/lab-16.md"
          },
          {
            "id": "lab-17",
            "name": "Lab 17 — Login Form",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/reactive-forms/lab-17.md"
          },
          {
            "id": "lab-18",
            "name": "Lab 18 — Student Enrollment Form",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/reactive-forms/lab-18.md"
          },
          {
            "id": "lab-19",
            "name": "Lab 19 — Dynamic Skills Form",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/reactive-forms/lab-19.md"
          }
        ]
      },
      {
        "id": "form-validation",
        "name": "Form Validation",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/4.%20Forms/5.%20Form%20Validation.md",
        "docPath": "Angular/4. Forms/5. Form Validation.md",
        "subtopics": [
          {
            "id": "lab-1",
            "name": "Lab 1 — Required Validation",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/form-validation/lab-1.md"
          },
          {
            "id": "lab-2-validation-message",
            "name": "Lab 2: Validation Message",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/form-validation/lab-2-validation-message.md"
          },
          {
            "id": "lab-3",
            "name": "Lab 3 — Min Length Validation",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/form-validation/lab-3.md"
          },
          {
            "id": "lab-4",
            "name": "Lab 4 — Min Length Validation",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/form-validation/lab-4.md"
          },
          {
            "id": "lab-5",
            "name": "Lab 5 — Max Length Validation",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/form-validation/lab-5.md"
          },
          {
            "id": "lab-6",
            "name": "Lab 6 — Max Length Validation",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/form-validation/lab-6.md"
          },
          {
            "id": "lab-7",
            "name": "Lab 7 — Email Validation",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/form-validation/lab-7.md"
          },
          {
            "id": "lab-8",
            "name": "Lab 8 — Email Validation",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/form-validation/lab-8.md"
          },
          {
            "id": "lab-9",
            "name": "Lab 9 — Pattern Validation",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/form-validation/lab-9.md"
          },
          {
            "id": "lab-10",
            "name": "Lab 10 — Pattern Validation",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/form-validation/lab-10.md"
          },
          {
            "id": "lab-11",
            "name": "Lab 11 — Multiple Validation Rules",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/form-validation/lab-11.md"
          },
          {
            "id": "lab-12",
            "name": "Lab 12 — Disable Submit Until Valid",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/form-validation/lab-12.md"
          },
          {
            "id": "lab-13",
            "name": "Lab 13 — Validation State Properties",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/form-validation/lab-13.md"
          },
          {
            "id": "lab-14",
            "name": "Lab 14 — Validation State Properties",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/form-validation/lab-14.md"
          },
          {
            "id": "lab-15",
            "name": "Lab 15 — Validation State Properties",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/form-validation/lab-15.md"
          },
          {
            "id": "lab-16",
            "name": "Lab 16 — Validation State Properties",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/form-validation/lab-16.md"
          },
          {
            "id": "lab-17-create-validator",
            "name": "Lab 17: Create Validator",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/form-validation/lab-17-create-validator.md"
          },
          {
            "id": "lab-18",
            "name": "Lab 18 — Cross Field Validation",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/form-validation/lab-18.md"
          },
          {
            "id": "lab-19",
            "name": "Lab 19 — Society Complaint Form Validation",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/form-validation/lab-19.md"
          },
          {
            "id": "lab-20",
            "name": "Lab 20 — Employee Registration Validation",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/form-validation/lab-20.md"
          }
        ]
      },
      {
        "id": "dynamic-forms",
        "name": "Dynamic Forms",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/4.%20Forms/6.%20Dynamic%20Forms.md",
        "docPath": "Angular/4. Forms/6. Dynamic Forms.md",
        "subtopics": [
          {
            "id": "lab-1-metadata-driven-form-problem-and-architecture",
            "name": "Lab 1: Metadata-driven Form Problem and Architecture",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/dynamic-forms/lab-1-metadata-driven-form-problem-and-architecture.md"
          },
          {
            "id": "lab-2-define-a-field-schema-interface",
            "name": "Lab 2: Define a Field Schema Interface",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/dynamic-forms/lab-2-define-a-field-schema-interface.md"
          },
          {
            "id": "lab-3-create-a-textbox-question-metadata-object",
            "name": "Lab 3: Create a Textbox Question Metadata Object",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/dynamic-forms/lab-3-create-a-textbox-question-metadata-object.md"
          },
          {
            "id": "lab-4-create-dropdown-options-in-metadata",
            "name": "Lab 4: Create Dropdown Options in Metadata",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/dynamic-forms/lab-4-create-dropdown-options-in-metadata.md"
          },
          {
            "id": "lab-5-build-the-initial-form-schema-array",
            "name": "Lab 5: Build the Initial Form Schema Array",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/dynamic-forms/lab-5-build-the-initial-form-schema-array.md"
          },
          {
            "id": "lab-6-render-controls-using-for-and-switch",
            "name": "Lab 6: Render Controls using @for and @switch",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/dynamic-forms/lab-6-render-controls-using-for-and-switch.md"
          },
          {
            "id": "lab-7-create-a-formrecord-from-metadata",
            "name": "Lab 7: Create a FormRecord from Metadata",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/dynamic-forms/lab-7-create-a-formrecord-from-metadata.md"
          },
          {
            "id": "lab-8-connect-formcontrolname-to-dynamic-keys",
            "name": "Lab 8: Connect formControlName to Dynamic Keys",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/dynamic-forms/lab-8-connect-formcontrolname-to-dynamic-keys.md"
          },
          {
            "id": "lab-9-apply-validators-from-schema-metadata",
            "name": "Lab 9: Apply Validators from Schema Metadata",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/dynamic-forms/lab-9-apply-validators-from-schema-metadata.md"
          },
          {
            "id": "lab-10-show-dynamic-validation-messages",
            "name": "Lab 10: Show Dynamic Validation Messages",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/dynamic-forms/lab-10-show-dynamic-validation-messages.md"
          },
          {
            "id": "lab-11-add-an-optional-field-at-runtime",
            "name": "Lab 11: Add an Optional Field at Runtime",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/dynamic-forms/lab-11-add-an-optional-field-at-runtime.md"
          },
          {
            "id": "lab-12-remove-a-runtime-created-field",
            "name": "Lab 12: Remove a Runtime-created Field",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/dynamic-forms/lab-12-remove-a-runtime-created-field.md"
          },
          {
            "id": "lab-13-change-a-field-requirement-at-runtime",
            "name": "Lab 13: Change a Field Requirement at Runtime",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/dynamic-forms/lab-13-change-a-field-requirement-at-runtime.md"
          },
          {
            "id": "lab-14-build-a-conditional-parking-input",
            "name": "Lab 14: Build a Conditional Parking Input",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/dynamic-forms/lab-14-build-a-conditional-parking-input.md"
          },
          {
            "id": "lab-15-build-a-date-input-from-metadata",
            "name": "Lab 15: Build a Date Input from Metadata",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/dynamic-forms/lab-15-build-a-date-input-from-metadata.md"
          },
          {
            "id": "lab-16-add-textarea-for-complaint-details",
            "name": "Lab 16: Add Textarea for Complaint Details",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/dynamic-forms/lab-16-add-textarea-for-complaint-details.md"
          },
          {
            "id": "lab-17-use-a-dynamic-formarray-for-checklist-items",
            "name": "Lab 17: Use a Dynamic FormArray for Checklist Items",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/dynamic-forms/lab-17-use-a-dynamic-formarray-for-checklist-items.md"
          },
          {
            "id": "lab-18-patch-values-into-a-generated-form",
            "name": "Lab 18: Patch Values into a Generated Form",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/dynamic-forms/lab-18-patch-values-into-a-generated-form.md"
          },
          {
            "id": "lab-19-validate-and-preview-submission-without-a-backend",
            "name": "Lab 19: Validate and Preview Submission without a Backend",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/dynamic-forms/lab-19-validate-and-preview-submission-without-a-backend.md"
          },
          {
            "id": "lab-20-reset-test-and-explain-dynamic-forms",
            "name": "Lab 20: Reset, Test, and Explain Dynamic Forms",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-04/executions/dynamic-forms/lab-20-reset-test-and-explain-dynamic-forms.md"
          }
        ]
      }
    ]
  },
  {
    "id": "05",
    "name": "Dependency Injection and Services",
    "folder": "Angular/5. Dependency Injection and Services",
    "topics": [
      {
        "id": "dependency-injection",
        "name": "Dependency Injection",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/5.%20Dependency%20Injection%20and%20Services/1.%20Dependency%20Injection.md",
        "docPath": "Angular/5. Dependency Injection and Services/1. Dependency Injection.md",
        "subtopics": [
          {
            "id": "lab-1",
            "name": "Lab 1: Manual object creation",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-05/executions/dependency-injection/lab-1.md"
          },
          {
            "id": "lab-2",
            "name": "Lab 2: Angular Dependency Injection",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-05/executions/dependency-injection/lab-2.md"
          },
          {
            "id": "lab-3",
            "name": "Lab 3: Constructor Injection",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-05/executions/dependency-injection/lab-3.md"
          },
          {
            "id": "lab-4",
            "name": "Lab 4: Using an Injected Service",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-05/executions/dependency-injection/lab-4.md"
          },
          {
            "id": "lab-5",
            "name": "Lab 5: Injector Resolution",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-05/executions/dependency-injection/lab-5.md"
          },
          {
            "id": "lab-6",
            "name": "Lab 6: Root Injector",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-05/executions/dependency-injection/lab-6.md"
          },
          {
            "id": "lab-7",
            "name": "Lab 7: Component Injector",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-05/executions/dependency-injection/lab-7.md"
          },
          {
            "id": "lab-8",
            "name": "Lab 8: Hierarchical Injectors",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-05/executions/dependency-injection/lab-8.md"
          },
          {
            "id": "lab-9",
            "name": "Lab 9: inject() Function",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-05/executions/dependency-injection/lab-9.md"
          },
          {
            "id": "lab-10",
            "name": "Lab 10: InjectionToken",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-05/executions/dependency-injection/lab-10.md"
          },
          {
            "id": "lab-11",
            "name": "Lab 11: Providing a Token",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-05/executions/dependency-injection/lab-11.md"
          },
          {
            "id": "lab-12",
            "name": "Lab 12: Injecting a Token",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-05/executions/dependency-injection/lab-12.md"
          },
          {
            "id": "lab-13",
            "name": "Lab 13: Society Complaint Service",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-05/executions/dependency-injection/lab-13.md"
          },
          {
            "id": "lab-14",
            "name": "Lab 14: Employee Management Service",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-05/executions/dependency-injection/lab-14.md"
          },
          {
            "id": "lab-15",
            "name": "Lab 15: Account Service Boundary",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-05/executions/dependency-injection/lab-15.md"
          }
        ]
      },
      {
        "id": "services-and-providers-injectable",
        "name": "Services and providers @Injectable",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/5.%20Dependency%20Injection%20and%20Services/2.%20Services%20and%20providers%20%40Injectable.md",
        "docPath": "Angular/5. Dependency Injection and Services/2. Services and providers @Injectable.md",
        "subtopics": [
          {
            "id": "lab-1",
            "name": "Lab 1: Service Class",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-05/executions/services-and-providers-injectable/lab-1.md"
          },
          {
            "id": "lab-2",
            "name": "Lab 2: Generate Service with CLI",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-05/executions/services-and-providers-injectable/lab-2.md"
          },
          {
            "id": "lab-3",
            "name": "Lab 3: Business Logic in Service",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-05/executions/services-and-providers-injectable/lab-3.md"
          },
          {
            "id": "lab-4",
            "name": "Lab 4: Service Consumption",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-05/executions/services-and-providers-injectable/lab-4.md"
          },
          {
            "id": "lab-5",
            "name": "Lab 5: @Injectable Decorator",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-05/executions/services-and-providers-injectable/lab-5.md"
          },
          {
            "id": "lab-6",
            "name": "Lab 6: providedIn Root",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-05/executions/services-and-providers-injectable/lab-6.md"
          },
          {
            "id": "lab-7",
            "name": "Lab 7: Singleton Service",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-05/executions/services-and-providers-injectable/lab-7.md"
          },
          {
            "id": "lab-8",
            "name": "Lab 8: Component Provider",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-05/executions/services-and-providers-injectable/lab-8.md"
          },
          {
            "id": "lab-9",
            "name": "Lab 9: Shared User State",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-05/executions/services-and-providers-injectable/lab-9.md"
          },
          {
            "id": "lab-10",
            "name": "Lab 10: Employee Service Methods",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-05/executions/services-and-providers-injectable/lab-10.md"
          },
          {
            "id": "lab-11",
            "name": "Lab 11: Complaint Service CRUD",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-05/executions/services-and-providers-injectable/lab-11.md"
          },
          {
            "id": "lab-12",
            "name": "Lab 12: Employee Service Operations",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-05/executions/services-and-providers-injectable/lab-12.md"
          },
          {
            "id": "lab-13",
            "name": "Lab 13: Account Service",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-05/executions/services-and-providers-injectable/lab-13.md"
          },
          {
            "id": "lab-14",
            "name": "Lab 14: Service API Boundary",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-05/executions/services-and-providers-injectable/lab-14.md"
          },
          {
            "id": "lab-15",
            "name": "Lab 15: Multiple Injected Services",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-05/executions/services-and-providers-injectable/lab-15.md"
          }
        ]
      }
    ]
  },
  {
    "id": "06",
    "name": "API Integration, RxJS and Signals",
    "folder": "Angular/6. API Integration, RxJS and Signals",
    "topics": [
      {
        "id": "httpclient-and-api-integration",
        "name": "HttpClient and API integration",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/6.%20API%20Integration%2C%20RxJS%20and%20Signals/1.%20HttpClient%20and%20API%20integration.md",
        "docPath": "Angular/6. API Integration, RxJS and Signals/1. HttpClient and API integration.md",
        "subtopics": [
          {
            "id": "lab-1",
            "name": "Lab 1: Configure HttpClient",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/httpclient-and-api-integration/lab-1.md"
          },
          {
            "id": "lab-2",
            "name": "Lab 2: Inject HttpClient",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/httpclient-and-api-integration/lab-2.md"
          },
          {
            "id": "lab-3",
            "name": "Lab 3: GET Request",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/httpclient-and-api-integration/lab-3.md"
          },
          {
            "id": "lab-4",
            "name": "Lab 4: POST Request",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/httpclient-and-api-integration/lab-4.md"
          },
          {
            "id": "lab-5",
            "name": "Lab 5: PUT Request",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/httpclient-and-api-integration/lab-5.md"
          },
          {
            "id": "lab-6",
            "name": "Lab 6: DELETE Request",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/httpclient-and-api-integration/lab-6.md"
          },
          {
            "id": "lab-7",
            "name": "Lab 7: Query Parameters",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/httpclient-and-api-integration/lab-7.md"
          },
          {
            "id": "lab-8",
            "name": "Lab 8: Request Headers",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/httpclient-and-api-integration/lab-8.md"
          },
          {
            "id": "lab-9",
            "name": "Lab 9: Request Body",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/httpclient-and-api-integration/lab-9.md"
          },
          {
            "id": "lab-10",
            "name": "Lab 10: Response Handling",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/httpclient-and-api-integration/lab-10.md"
          },
          {
            "id": "lab-11",
            "name": "Lab 11: Error Handling",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/httpclient-and-api-integration/lab-11.md"
          },
          {
            "id": "lab-12",
            "name": "Lab 12: Society Complaint Service",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/httpclient-and-api-integration/lab-12.md"
          },
          {
            "id": "lab-13",
            "name": "Lab 13: Society Complaint Component",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/httpclient-and-api-integration/lab-13.md"
          },
          {
            "id": "lab-14",
            "name": "Lab 14: Employee API Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/httpclient-and-api-integration/lab-14.md"
          },
          {
            "id": "lab-15",
            "name": "Lab 15: Banking API Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/httpclient-and-api-integration/lab-15.md"
          },
          {
            "id": "lab-16",
            "name": "Lab 16: Generic API Service Pattern",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/httpclient-and-api-integration/lab-16.md"
          }
        ]
      },
      {
        "id": "http-interceptors",
        "name": "HTTP Interceptors",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/6.%20API%20Integration%2C%20RxJS%20and%20Signals/2.%20HTTP%20Interceptors.md",
        "docPath": "Angular/6. API Integration, RxJS and Signals/2. HTTP Interceptors.md",
        "subtopics": [
          {
            "id": "lab-1",
            "name": "Lab 1: Create Interceptor",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/http-interceptors/lab-1.md"
          },
          {
            "id": "lab-2",
            "name": "Lab 2: Functional Interceptor",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/http-interceptors/lab-2.md"
          },
          {
            "id": "lab-3",
            "name": "Lab 3: Register Interceptor",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/http-interceptors/lab-3.md"
          },
          {
            "id": "lab-4",
            "name": "Lab 4: Intercept Request",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/http-interceptors/lab-4.md"
          },
          {
            "id": "lab-5",
            "name": "Lab 5: Add JWT Token",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/http-interceptors/lab-5.md"
          },
          {
            "id": "lab-6",
            "name": "Lab 6: Multiple Headers",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/http-interceptors/lab-6.md"
          },
          {
            "id": "lab-7",
            "name": "Lab 7: Response Interception",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/http-interceptors/lab-7.md"
          },
          {
            "id": "lab-8",
            "name": "Lab 8: Logging Interceptor",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/http-interceptors/lab-8.md"
          },
          {
            "id": "lab-9",
            "name": "Lab 9: Error Interceptor",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/http-interceptors/lab-9.md"
          },
          {
            "id": "lab-10",
            "name": "Lab 10: Global Error Handling",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/http-interceptors/lab-10.md"
          },
          {
            "id": "lab-11",
            "name": "Lab 11: Handle 403 Error",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/http-interceptors/lab-11.md"
          },
          {
            "id": "lab-12",
            "name": "Lab 12: Handle 500 Error",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/http-interceptors/lab-12.md"
          },
          {
            "id": "lab-13",
            "name": "Lab 13: Loading Interceptor",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/http-interceptors/lab-13.md"
          },
          {
            "id": "lab-14",
            "name": "Lab 14: Retry Failed Requests",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/http-interceptors/lab-14.md"
          },
          {
            "id": "lab-15",
            "name": "Lab 15: Authentication Interceptor",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/http-interceptors/lab-15.md"
          },
          {
            "id": "lab-16",
            "name": "Lab 16: Society Complaint Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/http-interceptors/lab-16.md"
          },
          {
            "id": "lab-17",
            "name": "Lab 17: Banking Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/http-interceptors/lab-17.md"
          },
          {
            "id": "lab-18",
            "name": "Lab 18: Multiple Interceptors",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/http-interceptors/lab-18.md"
          }
        ]
      },
      {
        "id": "rxjs-fundamentals",
        "name": "RxJS fundamentals",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/6.%20API%20Integration%2C%20RxJS%20and%20Signals/3.%20RxJS%20fundamentals.md",
        "docPath": "Angular/6. API Integration, RxJS and Signals/3. RxJS fundamentals.md",
        "subtopics": [
          {
            "id": "lab-1",
            "name": "Lab 1: First RxJS Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/rxjs-fundamentals/lab-1.md"
          },
          {
            "id": "lab-2",
            "name": "Lab 2: First RxJS Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/rxjs-fundamentals/lab-2.md"
          },
          {
            "id": "lab-3",
            "name": "Lab 3: Subscribe",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/rxjs-fundamentals/lab-3.md"
          },
          {
            "id": "lab-4",
            "name": "Lab 4: pipe()",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/rxjs-fundamentals/lab-4.md"
          },
          {
            "id": "lab-5",
            "name": "Lab 5: map()",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/rxjs-fundamentals/lab-5.md"
          },
          {
            "id": "lab-6",
            "name": "Lab 6: filter()",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/rxjs-fundamentals/lab-6.md"
          },
          {
            "id": "lab-7",
            "name": "Lab 7: tap()",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/rxjs-fundamentals/lab-7.md"
          },
          {
            "id": "lab-8",
            "name": "Lab 8: Multiple Operators",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/rxjs-fundamentals/lab-8.md"
          },
          {
            "id": "lab-9",
            "name": "Lab 9: Search Box Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/rxjs-fundamentals/lab-9.md"
          },
          {
            "id": "lab-10",
            "name": "Lab 10: mergeMap()",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/rxjs-fundamentals/lab-10.md"
          },
          {
            "id": "lab-11",
            "name": "Lab 11: Society Complaint Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/rxjs-fundamentals/lab-11.md"
          },
          {
            "id": "lab-12",
            "name": "Lab 12: Employee Management Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/rxjs-fundamentals/lab-12.md"
          },
          {
            "id": "lab-13",
            "name": "Lab 13: Banking Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/rxjs-fundamentals/lab-13.md"
          }
        ]
      },
      {
        "id": "observables-and-subjects",
        "name": "Observables and Subjects",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/6.%20API%20Integration%2C%20RxJS%20and%20Signals/4.%20Observables%20and%20Subjects.md",
        "docPath": "Angular/6. API Integration, RxJS and Signals/4. Observables and Subjects.md",
        "subtopics": [
          {
            "id": "lab-1",
            "name": "Lab 1: Observable",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/observables-and-subjects/lab-1.md"
          },
          {
            "id": "lab-2",
            "name": "Lab 2: Observable",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/observables-and-subjects/lab-2.md"
          },
          {
            "id": "lab-3",
            "name": "Lab 3: Subscribe",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/observables-and-subjects/lab-3.md"
          },
          {
            "id": "lab-4",
            "name": "Lab 4: Observer",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/observables-and-subjects/lab-4.md"
          },
          {
            "id": "lab-5",
            "name": "Lab 5: Subscription",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/observables-and-subjects/lab-5.md"
          },
          {
            "id": "lab-6",
            "name": "Lab 6: Unsubscribe",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/observables-and-subjects/lab-6.md"
          },
          {
            "id": "lab-7",
            "name": "Lab 7: Cold Observable",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/observables-and-subjects/lab-7.md"
          },
          {
            "id": "lab-8",
            "name": "Lab 8: Subject",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/observables-and-subjects/lab-8.md"
          },
          {
            "id": "lab-9",
            "name": "Lab 9: Subject",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/observables-and-subjects/lab-9.md"
          },
          {
            "id": "lab-10",
            "name": "Lab 10: Subject",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/observables-and-subjects/lab-10.md"
          },
          {
            "id": "lab-11",
            "name": "Lab 11: BehaviorSubject",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/observables-and-subjects/lab-11.md"
          },
          {
            "id": "lab-12",
            "name": "Lab 12: ReplaySubject",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/observables-and-subjects/lab-12.md"
          },
          {
            "id": "lab-13",
            "name": "Lab 13: AsyncSubject",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/observables-and-subjects/lab-13.md"
          },
          {
            "id": "lab-14",
            "name": "Lab 14: Society Complaint Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/observables-and-subjects/lab-14.md"
          },
          {
            "id": "lab-15",
            "name": "Lab 15: Employee Management Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/observables-and-subjects/lab-15.md"
          },
          {
            "id": "lab-16",
            "name": "Lab 16: Notification System Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/observables-and-subjects/lab-16.md"
          }
        ]
      },
      {
        "id": "signals",
        "name": "Signals",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/6.%20API%20Integration%2C%20RxJS%20and%20Signals/5.%20Signals.md",
        "docPath": "Angular/6. API Integration, RxJS and Signals/5. Signals.md",
        "subtopics": [
          {
            "id": "lab-1",
            "name": "Lab 1: What Is A Signal?",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/signals/lab-1.md"
          },
          {
            "id": "lab-2",
            "name": "Lab 2: Reading Signal Value",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/signals/lab-2.md"
          },
          {
            "id": "lab-3",
            "name": "Lab 3: Display Signal",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/signals/lab-3.md"
          },
          {
            "id": "lab-4",
            "name": "Lab 4: Updating Signal",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/signals/lab-4.md"
          },
          {
            "id": "lab-5",
            "name": "Lab 5: Increment Counter",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/signals/lab-5.md"
          },
          {
            "id": "lab-6",
            "name": "Lab 6: update()",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/signals/lab-6.md"
          },
          {
            "id": "lab-7",
            "name": "Lab 7: String Signal",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/signals/lab-7.md"
          },
          {
            "id": "lab-8",
            "name": "Lab 8: Object Signal",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/signals/lab-8.md"
          },
          {
            "id": "lab-9",
            "name": "Lab 9: Update Object",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/signals/lab-9.md"
          },
          {
            "id": "lab-10",
            "name": "Lab 10: Array Signal",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/signals/lab-10.md"
          },
          {
            "id": "lab-11",
            "name": "Lab 11: Add Item",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/signals/lab-11.md"
          },
          {
            "id": "lab-12",
            "name": "Lab 12: Society Complaint Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/signals/lab-12.md"
          },
          {
            "id": "lab-13",
            "name": "Lab 13: Employee Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/signals/lab-13.md"
          },
          {
            "id": "lab-14",
            "name": "Lab 14: Login State Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/signals/lab-14.md"
          }
        ]
      },
      {
        "id": "computed-signals",
        "name": "Computed Signals",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/6.%20API%20Integration%2C%20RxJS%20and%20Signals/6.%20Computed%20Signals.md",
        "docPath": "Angular/6. API Integration, RxJS and Signals/6. Computed Signals.md",
        "subtopics": [
          {
            "id": "lab-1",
            "name": "Lab 1: What Is Computed Signal?",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/computed-signals/lab-1.md"
          },
          {
            "id": "lab-2",
            "name": "Lab 2: What Is Computed Signal?",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/computed-signals/lab-2.md"
          },
          {
            "id": "lab-3",
            "name": "Lab 3: Reading Computed Signal",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/computed-signals/lab-3.md"
          },
          {
            "id": "lab-4",
            "name": "Lab 4: Automatic Recalculation",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/computed-signals/lab-4.md"
          },
          {
            "id": "lab-5",
            "name": "Lab 5: Multiple Signal Dependencies",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/computed-signals/lab-5.md"
          },
          {
            "id": "lab-6",
            "name": "Lab 6: Multiple Signal Dependencies",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/computed-signals/lab-6.md"
          },
          {
            "id": "lab-7",
            "name": "Lab 7: Update Dependency",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/computed-signals/lab-7.md"
          },
          {
            "id": "lab-8",
            "name": "Lab 8: Shopping Cart Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/computed-signals/lab-8.md"
          },
          {
            "id": "lab-9",
            "name": "Lab 9: Full Name Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/computed-signals/lab-9.md"
          },
          {
            "id": "lab-10",
            "name": "Lab 10: Full Name Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/computed-signals/lab-10.md"
          },
          {
            "id": "lab-11",
            "name": "Lab 11: Dashboard KPI Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/computed-signals/lab-11.md"
          },
          {
            "id": "lab-12",
            "name": "Lab 12: Dashboard KPI Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/computed-signals/lab-12.md"
          },
          {
            "id": "lab-13",
            "name": "Lab 13: Percentage Calculation",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/computed-signals/lab-13.md"
          },
          {
            "id": "lab-14",
            "name": "Lab 14: Employee Dashboard Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/computed-signals/lab-14.md"
          },
          {
            "id": "lab-15",
            "name": "Lab 15: Banking Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/computed-signals/lab-15.md"
          },
          {
            "id": "lab-16",
            "name": "Lab 16: Signal Chain",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/computed-signals/lab-16.md"
          },
          {
            "id": "lab-17",
            "name": "Lab 17: Computed Signals Are Read Only",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/computed-signals/lab-17.md"
          },
          {
            "id": "lab-18",
            "name": "Lab 18: Enterprise Dashboard Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/computed-signals/lab-18.md"
          }
        ]
      },
      {
        "id": "effects",
        "name": "Effects",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/6.%20API%20Integration%2C%20RxJS%20and%20Signals/7.%20Effects.md",
        "docPath": "Angular/6. API Integration, RxJS and Signals/7. Effects.md",
        "subtopics": [
          {
            "id": "lab-1",
            "name": "Lab 1: What Is An Effect?",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/effects/lab-1.md"
          },
          {
            "id": "lab-2",
            "name": "Lab 2: What Is An Effect?",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/effects/lab-2.md"
          },
          {
            "id": "lab-3",
            "name": "Lab 3: Signal Update",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/effects/lab-3.md"
          },
          {
            "id": "lab-4",
            "name": "Lab 4: Counter Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/effects/lab-4.md"
          },
          {
            "id": "lab-5",
            "name": "Lab 5: Multiple Signal Dependencies",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/effects/lab-5.md"
          },
          {
            "id": "lab-6",
            "name": "Lab 6: Multiple Signal Dependencies",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/effects/lab-6.md"
          },
          {
            "id": "lab-7",
            "name": "Lab 7: Logging Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/effects/lab-7.md"
          },
          {
            "id": "lab-8",
            "name": "Lab 8: Local Storage Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/effects/lab-8.md"
          },
          {
            "id": "lab-9",
            "name": "Lab 9: Theme Preference Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/effects/lab-9.md"
          },
          {
            "id": "lab-10",
            "name": "Lab 10: Society Complaint Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/effects/lab-10.md"
          },
          {
            "id": "lab-11",
            "name": "Lab 11: Employee Dashboard Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/effects/lab-11.md"
          },
          {
            "id": "lab-12",
            "name": "Lab 12: Analytics Tracking",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/effects/lab-12.md"
          },
          {
            "id": "lab-13",
            "name": "Lab 13: API Trigger Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/effects/lab-13.md"
          },
          {
            "id": "lab-14",
            "name": "Lab 14: Notification Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/effects/lab-14.md"
          },
          {
            "id": "lab-15",
            "name": "Lab 15: Shopping Cart Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/effects/lab-15.md"
          }
        ]
      },
      {
        "id": "angular-state-management-basics",
        "name": "Angular State Management Basics",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/6.%20API%20Integration%2C%20RxJS%20and%20Signals/8.%20Angular%20State%20Management%20Basics.md",
        "docPath": "Angular/6. API Integration, RxJS and Signals/8. Angular State Management Basics.md",
        "subtopics": [
          {
            "id": "lab-1",
            "name": "Lab 1: Component State",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/angular-state-management-basics/lab-1.md"
          },
          {
            "id": "lab-2",
            "name": "Lab 2: Signal State",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/angular-state-management-basics/lab-2.md"
          },
          {
            "id": "lab-3",
            "name": "Lab 3: Service Based State",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/angular-state-management-basics/lab-3.md"
          },
          {
            "id": "lab-4",
            "name": "Lab 4: BehaviorSubject State",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/angular-state-management-basics/lab-4.md"
          },
          {
            "id": "lab-5",
            "name": "Lab 5: Society Complaint Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/angular-state-management-basics/lab-5.md"
          },
          {
            "id": "lab-6",
            "name": "Lab 6: Employee Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/angular-state-management-basics/lab-6.md"
          },
          {
            "id": "lab-7",
            "name": "Lab 7: Authentication State",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/angular-state-management-basics/lab-7.md"
          },
          {
            "id": "lab-8",
            "name": "Lab 8: Shopping Cart State",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/angular-state-management-basics/lab-8.md"
          },
          {
            "id": "lab-9",
            "name": "Lab 9: Dashboard State",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/angular-state-management-basics/lab-9.md"
          },
          {
            "id": "lab-10",
            "name": "Lab 10: Enterprise Store Pattern",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-06/executions/angular-state-management-basics/lab-10.md"
          }
        ]
      }
    ]
  },
  {
    "id": "07",
    "name": "Routing and Navigation",
    "folder": "Angular/7. Routing And Navigation",
    "topics": [
      {
        "id": "routing-and-navigation",
        "name": "Routing & Navigation",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/7.%20Routing%20And%20Navigation/1.%20Routing%20%26%20Navigation.md",
        "docPath": "Angular/7. Routing And Navigation/1. Routing & Navigation.md",
        "subtopics": [
          {
            "id": "lab-1",
            "name": "Lab 1: Create Routes",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/routing-and-navigation/lab-1.md"
          },
          {
            "id": "lab-2",
            "name": "Lab 2: First Route",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/routing-and-navigation/lab-2.md"
          },
          {
            "id": "lab-3",
            "name": "Lab 3: Router Outlet",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/routing-and-navigation/lab-3.md"
          },
          {
            "id": "lab-4",
            "name": "Lab 4: RouterLink",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/routing-and-navigation/lab-4.md"
          },
          {
            "id": "lab-5",
            "name": "Lab 5: RouterLink",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/routing-and-navigation/lab-5.md"
          },
          {
            "id": "lab-6",
            "name": "Lab 6: Navigation Menu",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/routing-and-navigation/lab-6.md"
          },
          {
            "id": "lab-7",
            "name": "Lab 7: Default Route",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/routing-and-navigation/lab-7.md"
          },
          {
            "id": "lab-8",
            "name": "Lab 8: Wildcard Route",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/routing-and-navigation/lab-8.md"
          },
          {
            "id": "lab-9",
            "name": "Lab 9: Programmatic Navigation",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/routing-and-navigation/lab-9.md"
          },
          {
            "id": "lab-10",
            "name": "Lab 10: Programmatic Navigation",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/routing-and-navigation/lab-10.md"
          },
          {
            "id": "lab-11",
            "name": "Lab 11: Passing Data During Navigation",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/routing-and-navigation/lab-11.md"
          },
          {
            "id": "lab-12",
            "name": "Lab 12: Active Route Styling",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/routing-and-navigation/lab-12.md"
          },
          {
            "id": "lab-13",
            "name": "Lab 13: Society Complaint Project Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/routing-and-navigation/lab-13.md"
          },
          {
            "id": "lab-14",
            "name": "Lab 14: Employee Portal Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/routing-and-navigation/lab-14.md"
          },
          {
            "id": "lab-15",
            "name": "Lab 15: Admin Panel Navigation",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/routing-and-navigation/lab-15.md"
          }
        ]
      },
      {
        "id": "route-parameters",
        "name": "Route Parameters",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/7.%20Routing%20And%20Navigation/2.%20Route%20Parameters.md",
        "docPath": "Angular/7. Routing And Navigation/2. Route Parameters.md",
        "subtopics": [
          {
            "id": "lab-1",
            "name": "Lab 1: Create Parameterized Route",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/route-parameters/lab-1.md"
          },
          {
            "id": "lab-2",
            "name": "Lab 2: Understanding :id",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/route-parameters/lab-2.md"
          },
          {
            "id": "lab-3",
            "name": "Lab 3: Reading Route Parameter",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/route-parameters/lab-3.md"
          },
          {
            "id": "lab-4",
            "name": "Lab 4: Snapshot",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/route-parameters/lab-4.md"
          },
          {
            "id": "lab-5",
            "name": "Lab 5: Display Parameter",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/route-parameters/lab-5.md"
          },
          {
            "id": "lab-6",
            "name": "Lab 6: Navigate With Parameter",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/route-parameters/lab-6.md"
          },
          {
            "id": "lab-7",
            "name": "Lab 7: Society Complaint Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/route-parameters/lab-7.md"
          },
          {
            "id": "lab-8",
            "name": "Lab 8: Read Complaint ID",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/route-parameters/lab-8.md"
          },
          {
            "id": "lab-9",
            "name": "Lab 9: Employee Profile Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/route-parameters/lab-9.md"
          },
          {
            "id": "lab-10",
            "name": "Lab 10: Product Details Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/route-parameters/lab-10.md"
          },
          {
            "id": "lab-11",
            "name": "Lab 11: Multiple Route Parameters",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/route-parameters/lab-11.md"
          },
          {
            "id": "lab-12",
            "name": "Lab 12: Read Multiple Parameters",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/route-parameters/lab-12.md"
          },
          {
            "id": "lab-13",
            "name": "Lab 13: Observable Route Parameters",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/route-parameters/lab-13.md"
          },
          {
            "id": "lab-14",
            "name": "Lab 14: Query Parameters",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/route-parameters/lab-14.md"
          },
          {
            "id": "lab-15",
            "name": "Lab 15: Read Query Parameters",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/route-parameters/lab-15.md"
          },
          {
            "id": "lab-16",
            "name": "Lab 16: Society Complaint Search Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/route-parameters/lab-16.md"
          },
          {
            "id": "lab-17",
            "name": "Lab 17: Employee Search Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/route-parameters/lab-17.md"
          },
          {
            "id": "lab-18",
            "name": "Lab 18: Banking Transaction Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/route-parameters/lab-18.md"
          }
        ]
      },
      {
        "id": "child-routes",
        "name": "Child Routes",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/7.%20Routing%20And%20Navigation/3.%20Child%20Routes.md",
        "docPath": "Angular/7. Routing And Navigation/3. Child Routes.md",
        "subtopics": [
          {
            "id": "lab-1",
            "name": "Lab 1: Parent Route Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/child-routes/lab-1.md"
          },
          {
            "id": "lab-2",
            "name": "Lab 2: Child Routes",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/child-routes/lab-2.md"
          },
          {
            "id": "lab-3",
            "name": "Lab 3: Child Route Structure",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/child-routes/lab-3.md"
          },
          {
            "id": "lab-4",
            "name": "Lab 4: Nested Router Outlet",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/child-routes/lab-4.md"
          },
          {
            "id": "lab-5",
            "name": "Lab 5: Navigation To Child Routes",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/child-routes/lab-5.md"
          },
          {
            "id": "lab-6",
            "name": "Lab 6: Society Project Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/child-routes/lab-6.md"
          },
          {
            "id": "lab-7",
            "name": "Lab 7: Dashboard Layout",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/child-routes/lab-7.md"
          },
          {
            "id": "lab-8",
            "name": "Lab 8: Employee Portal Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/child-routes/lab-8.md"
          },
          {
            "id": "lab-9",
            "name": "Lab 9: Admin Portal Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/child-routes/lab-9.md"
          },
          {
            "id": "lab-10",
            "name": "Lab 10: Multiple Level Child Routes",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/child-routes/lab-10.md"
          },
          {
            "id": "lab-11",
            "name": "Lab 11: Default Child Route",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/child-routes/lab-11.md"
          },
          {
            "id": "lab-12",
            "name": "Lab 12: Child Route Navigation",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/child-routes/lab-12.md"
          },
          {
            "id": "lab-13",
            "name": "Lab 13: Child Route With Parameters",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/child-routes/lab-13.md"
          },
          {
            "id": "lab-14",
            "name": "Lab 14: Route Hierarchy",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/child-routes/lab-14.md"
          },
          {
            "id": "lab-15",
            "name": "Lab 15: Enterprise Architecture Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/child-routes/lab-15.md"
          }
        ]
      },
      {
        "id": "route-guards",
        "name": "Route Guards",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/7.%20Routing%20And%20Navigation/4.%20Route%20Guards.md",
        "docPath": "Angular/7. Routing And Navigation/4. Route Guards.md",
        "subtopics": [
          {
            "id": "lab-1-generate-guard",
            "name": "Lab 1: Generate Guard",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/route-guards/lab-1-generate-guard.md"
          },
          {
            "id": "lab-2-first-guard",
            "name": "Lab 2: First Guard",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/route-guards/lab-2-first-guard.md"
          },
          {
            "id": "lab-3",
            "name": "Lab 3: Apply Guard",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/route-guards/lab-3.md"
          },
          {
            "id": "lab-4",
            "name": "Lab 4: Authentication Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/route-guards/lab-4.md"
          },
          {
            "id": "lab-5",
            "name": "Lab 5: Redirect User",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/route-guards/lab-5.md"
          },
          {
            "id": "lab-6",
            "name": "Lab 6: Society Project Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/route-guards/lab-6.md"
          },
          {
            "id": "lab-7",
            "name": "Lab 7: Role-Based Authorization",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/route-guards/lab-7.md"
          },
          {
            "id": "lab-8",
            "name": "Lab 8: Admin Route",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/route-guards/lab-8.md"
          },
          {
            "id": "lab-9",
            "name": "Lab 9: CanDeactivate",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/route-guards/lab-9.md"
          },
          {
            "id": "lab-10",
            "name": "Lab 10: CanDeactivate",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/route-guards/lab-10.md"
          },
          {
            "id": "lab-11",
            "name": "Lab 11: CanActivateChild",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/route-guards/lab-11.md"
          },
          {
            "id": "lab-12",
            "name": "Lab 12: CanMatch",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/route-guards/lab-12.md"
          },
          {
            "id": "lab-13",
            "name": "Lab 13: Banking Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/route-guards/lab-13.md"
          },
          {
            "id": "lab-14",
            "name": "Lab 14: Employee Portal Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/route-guards/lab-14.md"
          },
          {
            "id": "lab-15",
            "name": "Lab 15: Society Dashboard Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/route-guards/lab-15.md"
          }
        ]
      },
      {
        "id": "lazy-loading",
        "name": "Lazy loading",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/7.%20Routing%20And%20Navigation/5.%20Lazy%20loading.md",
        "docPath": "Angular/7. Routing And Navigation/5. Lazy loading.md",
        "subtopics": [
          {
            "id": "lab-1",
            "name": "Lab 1: Traditional Loading",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/lazy-loading/lab-1.md"
          },
          {
            "id": "lab-2",
            "name": "Lab 2: Lazy Loaded Route",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/lazy-loading/lab-2.md"
          },
          {
            "id": "lab-3",
            "name": "Lab 3: Feature Module Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/lazy-loading/lab-3.md"
          },
          {
            "id": "lab-4",
            "name": "Lab 4: Reports Routing Module",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/lazy-loading/lab-4.md"
          },
          {
            "id": "lab-5",
            "name": "Lab 5: Configure Child Routes",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/lazy-loading/lab-5.md"
          },
          {
            "id": "lab-6",
            "name": "Lab 6: Lazy Load Feature",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/lazy-loading/lab-6.md"
          },
          {
            "id": "lab-7",
            "name": "Lab 7: Society Project Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/lazy-loading/lab-7.md"
          },
          {
            "id": "lab-8",
            "name": "Lab 8: Lazy Loading Flow",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/lazy-loading/lab-8.md"
          },
          {
            "id": "lab-9",
            "name": "Lab 9: Employee Portal Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/lazy-loading/lab-9.md"
          },
          {
            "id": "lab-10",
            "name": "Lab 10: Admin Module Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/lazy-loading/lab-10.md"
          },
          {
            "id": "lab-11",
            "name": "Lab 11: Banking Application Example",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/lazy-loading/lab-11.md"
          },
          {
            "id": "lab-12",
            "name": "Lab 12: Verify Lazy Loading",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/lazy-loading/lab-12.md"
          },
          {
            "id": "lab-13",
            "name": "Lab 13: Bundle Splitting",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/lazy-loading/lab-13.md"
          },
          {
            "id": "lab-14",
            "name": "Lab 14: Nested Lazy Loading",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/lazy-loading/lab-14.md"
          },
          {
            "id": "lab-15",
            "name": "Lab 15: Enterprise Architecture",
            "kind": "live",
            "detailFile": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-07/executions/lazy-loading/lab-15.md"
          }
        ]
      }
    ]
  },
  {
    "id": "08",
    "name": "Advanced Angular Features",
    "folder": "Angular/8. Advance Angular Features",
    "topics": [
      {
        "id": "viewchild-and-its-usage",
        "name": "@ViewChild and its usage",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/8.%20Advance%20Angular%20Features/1.%20%40ViewChild%20and%20its%20usage.md",
        "docPath": "Angular/8. Advance Angular Features/1. @ViewChild and its usage.md",
        "subtopics": [
          {
            "id": "lab-1",
            "name": "Lab 1",
            "kind": "reading"
          },
          {
            "id": "lab-2",
            "name": "Lab 2",
            "kind": "reading"
          },
          {
            "id": "lab-3",
            "name": "Lab 3",
            "kind": "reading"
          },
          {
            "id": "lab-4",
            "name": "Lab 4",
            "kind": "reading"
          },
          {
            "id": "lab-5",
            "name": "Lab 5",
            "kind": "reading"
          },
          {
            "id": "lab-6",
            "name": "Lab 6",
            "kind": "reading"
          },
          {
            "id": "lab-7",
            "name": "Lab 7",
            "kind": "reading"
          },
          {
            "id": "lab-8",
            "name": "Lab 8",
            "kind": "reading"
          },
          {
            "id": "lab-9",
            "name": "Lab 9",
            "kind": "reading"
          },
          {
            "id": "lab-10",
            "name": "Lab 10",
            "kind": "reading"
          },
          {
            "id": "lab-11",
            "name": "Lab 11",
            "kind": "reading"
          },
          {
            "id": "lab-12",
            "name": "Lab 12",
            "kind": "reading"
          },
          {
            "id": "lab-13",
            "name": "Lab 13",
            "kind": "reading"
          },
          {
            "id": "lab-14",
            "name": "Lab 14",
            "kind": "reading"
          },
          {
            "id": "lab-15",
            "name": "Lab 15",
            "kind": "reading"
          },
          {
            "id": "lab-16",
            "name": "Lab 16",
            "kind": "reading"
          },
          {
            "id": "lab-17",
            "name": "Lab 17",
            "kind": "reading"
          },
          {
            "id": "lab-18",
            "name": "Lab 18",
            "kind": "reading"
          }
        ]
      },
      {
        "id": "contentchild-and-its-usage",
        "name": "@ContentChild and its usage",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/8.%20Advance%20Angular%20Features/2.%20%40ContentChild%20and%20its%20usage.md",
        "docPath": "Angular/8. Advance Angular Features/2. @ContentChild and its usage.md",
        "subtopics": [
          {
            "id": "lab-1",
            "name": "Lab 1",
            "kind": "reading"
          },
          {
            "id": "lab-2",
            "name": "Lab 2",
            "kind": "reading"
          },
          {
            "id": "lab-3",
            "name": "Lab 3",
            "kind": "reading"
          },
          {
            "id": "lab-4",
            "name": "Lab 4",
            "kind": "reading"
          },
          {
            "id": "lab-5",
            "name": "Lab 5",
            "kind": "reading"
          },
          {
            "id": "lab-6",
            "name": "Lab 6",
            "kind": "reading"
          },
          {
            "id": "lab-7",
            "name": "Lab 7",
            "kind": "reading"
          },
          {
            "id": "lab-8",
            "name": "Lab 8",
            "kind": "reading"
          },
          {
            "id": "lab-9",
            "name": "Lab 9",
            "kind": "reading"
          },
          {
            "id": "lab-10",
            "name": "Lab 10",
            "kind": "reading"
          },
          {
            "id": "lab-11",
            "name": "Lab 11",
            "kind": "reading"
          },
          {
            "id": "lab-12",
            "name": "Lab 12",
            "kind": "reading"
          },
          {
            "id": "lab-13",
            "name": "Lab 13",
            "kind": "reading"
          },
          {
            "id": "lab-14",
            "name": "Lab 14",
            "kind": "reading"
          },
          {
            "id": "lab-15",
            "name": "Lab 15",
            "kind": "reading"
          }
        ]
      },
      {
        "id": "ngmodules-and-custom-one-for-your-code-separation",
        "name": "NgModules and custom one for your code separation",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/8.%20Advance%20Angular%20Features/3.%20NgModules%20and%20custom%20one%20for%20your%20code%20separation.md",
        "docPath": "Angular/8. Advance Angular Features/3. NgModules and custom one for your code separation.md",
        "subtopics": [
          {
            "id": "lab-1",
            "name": "Lab 1",
            "kind": "reading"
          },
          {
            "id": "lab-2",
            "name": "Lab 2",
            "kind": "reading"
          },
          {
            "id": "lab-3",
            "name": "Lab 3",
            "kind": "reading"
          },
          {
            "id": "lab-4",
            "name": "Lab 4",
            "kind": "reading"
          },
          {
            "id": "lab-5",
            "name": "Lab 5",
            "kind": "reading"
          },
          {
            "id": "lab-6",
            "name": "Lab 6",
            "kind": "reading"
          },
          {
            "id": "lab-7",
            "name": "Lab 7",
            "kind": "reading"
          },
          {
            "id": "lab-8",
            "name": "Lab 8",
            "kind": "reading"
          },
          {
            "id": "lab-9",
            "name": "Lab 9",
            "kind": "reading"
          },
          {
            "id": "lab-10",
            "name": "Lab 10",
            "kind": "reading"
          },
          {
            "id": "lab-11",
            "name": "Lab 11",
            "kind": "reading"
          },
          {
            "id": "lab-12",
            "name": "Lab 12",
            "kind": "reading"
          },
          {
            "id": "lab-13",
            "name": "Lab 13",
            "kind": "reading"
          },
          {
            "id": "lab-14",
            "name": "Lab 14",
            "kind": "reading"
          },
          {
            "id": "lab-15",
            "name": "Lab 15",
            "kind": "reading"
          },
          {
            "id": "lab-16",
            "name": "Lab 16",
            "kind": "reading"
          },
          {
            "id": "lab-17",
            "name": "Lab 17",
            "kind": "reading"
          },
          {
            "id": "lab-18",
            "name": "Lab 18",
            "kind": "reading"
          }
        ]
      },
      {
        "id": "standalone-application-structure",
        "name": "Standalone Application Structure",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/8.%20Advance%20Angular%20Features/4.%20Standalone%20Application%20Structure.md",
        "docPath": "Angular/8. Advance Angular Features/4. Standalone Application Structure.md",
        "subtopics": [
          {
            "id": "lab-1-create-standalone-component",
            "name": "Lab 1: Create Standalone Component",
            "kind": "reading"
          },
          {
            "id": "lab-2-first-standalone-component",
            "name": "Lab 2: First Standalone Component",
            "kind": "reading"
          },
          {
            "id": "lab-3-import-commonmodule",
            "name": "Lab 3: Import CommonModule",
            "kind": "reading"
          },
          {
            "id": "lab-4-import-another-component",
            "name": "Lab 4: Import Another Component",
            "kind": "reading"
          },
          {
            "id": "lab-5-bootstrap-application",
            "name": "Lab 5: Bootstrap Application",
            "kind": "reading"
          },
          {
            "id": "lab-6-application-configuration",
            "name": "Lab 6: Application Configuration",
            "kind": "reading"
          },
          {
            "id": "lab-7-register-router",
            "name": "Lab 7: Register Router",
            "kind": "reading"
          },
          {
            "id": "lab-8-standalone-routing",
            "name": "Lab 8: Standalone Routing",
            "kind": "reading"
          },
          {
            "id": "lab-9-router-outlet",
            "name": "Lab 9: Router Outlet",
            "kind": "reading"
          },
          {
            "id": "lab-10-standalone-directive-usage",
            "name": "Lab 10: Standalone Directive Usage",
            "kind": "reading"
          },
          {
            "id": "lab-11-standalone-pipe",
            "name": "Lab 11: Standalone Pipe",
            "kind": "reading"
          },
          {
            "id": "lab-12-society-dashboard-component",
            "name": "Lab 12: Society Dashboard Component",
            "kind": "reading"
          },
          {
            "id": "lab-13-feature-folder-structure",
            "name": "Lab 13: Feature Folder Structure",
            "kind": "reading"
          },
          {
            "id": "lab-14-lazy-loaded-standalone-route",
            "name": "Lab 14: Lazy Loaded Standalone Route",
            "kind": "reading"
          },
          {
            "id": "lab-15-modern-angular-architecture",
            "name": "Lab 15: Modern Angular Architecture",
            "kind": "reading"
          }
        ]
      },
      {
        "id": "environment-configuration",
        "name": "Environment Configuration",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/8.%20Advance%20Angular%20Features/5.%20Environment%20Configuration.md",
        "docPath": "Angular/8. Advance Angular Features/5. Environment Configuration.md",
        "subtopics": [
          {
            "id": "lab-1-default-environment-file",
            "name": "Lab 1: Default Environment File",
            "kind": "reading"
          },
          {
            "id": "lab-2-production-environment",
            "name": "Lab 2: Production Environment",
            "kind": "reading"
          },
          {
            "id": "lab-3-import-environment",
            "name": "Lab 3: Import Environment",
            "kind": "reading"
          },
          {
            "id": "lab-4-api-service-configuration",
            "name": "Lab 4: API Service Configuration",
            "kind": "reading"
          },
          {
            "id": "lab-5-development-environment-example",
            "name": "Lab 5: Development Environment Example",
            "kind": "reading"
          },
          {
            "id": "lab-6-uat-environment-example",
            "name": "Lab 6: UAT Environment Example",
            "kind": "reading"
          },
          {
            "id": "lab-7-production-environment-example",
            "name": "Lab 7: Production Environment Example",
            "kind": "reading"
          },
          {
            "id": "lab-8-feature-flag",
            "name": "Lab 8: Feature Flag",
            "kind": "reading"
          },
          {
            "id": "lab-9-logging-control",
            "name": "Lab 9: Logging Control",
            "kind": "reading"
          },
          {
            "id": "lab-10-payment-gateway-example",
            "name": "Lab 10: Payment Gateway Example",
            "kind": "reading"
          },
          {
            "id": "lab-11-email-service-example",
            "name": "Lab 11: Email Service Example",
            "kind": "reading"
          },
          {
            "id": "lab-12-society-complaint-system",
            "name": "Lab 12: Society Complaint System",
            "kind": "reading"
          },
          {
            "id": "lab-13-environment-based-title",
            "name": "Lab 13: Environment-Based Title",
            "kind": "reading"
          },
          {
            "id": "lab-14-build-production-application",
            "name": "Lab 14: Build Production Application",
            "kind": "reading"
          },
          {
            "id": "lab-15-environment-flow",
            "name": "Lab 15: Environment Flow",
            "kind": "reading"
          }
        ]
      }
    ]
  },
  {
    "id": "09",
    "name": "Enterprise Angular Development",
    "folder": "Angular/9. Enterprise Angular Development",
    "topics": [
      {
        "id": "error-handling",
        "name": "Error Handling",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/9.%20Enterprise%20Angular%20Development/1.%20Error%20Handling.md",
        "docPath": "Angular/9. Enterprise Angular Development/1. Error Handling.md",
        "subtopics": [
          {
            "id": "lab-1-runtime-error-example",
            "name": "Lab 1: Runtime Error Example",
            "kind": "reading"
          },
          {
            "id": "lab-2-try-catch",
            "name": "Lab 2: Try Catch",
            "kind": "reading"
          },
          {
            "id": "lab-3-error-object",
            "name": "Lab 3: Error Object",
            "kind": "reading"
          },
          {
            "id": "lab-4-api-call",
            "name": "Lab 4: API Call",
            "kind": "reading"
          },
          {
            "id": "lab-5-http-error-callback",
            "name": "Lab 5: HTTP Error Callback",
            "kind": "reading"
          },
          {
            "id": "lab-6-user-friendly-message",
            "name": "Lab 6: User-Friendly Message",
            "kind": "reading"
          },
          {
            "id": "lab-7-catcherror",
            "name": "Lab 7: catchError",
            "kind": "reading"
          },
          {
            "id": "lab-8",
            "name": "Lab 8",
            "kind": "reading"
          },
          {
            "id": "lab-9-create-global-error-handler",
            "name": "Lab 9: Create Global Error Handler",
            "kind": "reading"
          },
          {
            "id": "lab-10",
            "name": "Lab 10",
            "kind": "reading"
          },
          {
            "id": "lab-11",
            "name": "Lab 11",
            "kind": "reading"
          },
          {
            "id": "lab-12-create-interceptor",
            "name": "Lab 12: Create Interceptor",
            "kind": "reading"
          },
          {
            "id": "lab-13",
            "name": "Lab 13",
            "kind": "reading"
          },
          {
            "id": "lab-14",
            "name": "Lab 14",
            "kind": "reading"
          },
          {
            "id": "lab-15",
            "name": "Lab 15",
            "kind": "reading"
          },
          {
            "id": "lab-16",
            "name": "Lab 16",
            "kind": "reading"
          },
          {
            "id": "lab-17",
            "name": "Lab 17",
            "kind": "reading"
          },
          {
            "id": "lab-18",
            "name": "Lab 18",
            "kind": "reading"
          },
          {
            "id": "lab-19",
            "name": "Lab 19",
            "kind": "reading"
          }
        ]
      },
      {
        "id": "authentication-and-authorization",
        "name": "Authentication and Authorization",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/9.%20Enterprise%20Angular%20Development/2.%20Authentication%20and%20Authorization.md",
        "docPath": "Angular/9. Enterprise Angular Development/2. Authentication and Authorization.md",
        "subtopics": [
          {
            "id": "lab-1-login-screen",
            "name": "Lab 1: Login Screen",
            "kind": "reading"
          },
          {
            "id": "lab-2-authentication-flow",
            "name": "Lab 2: Authentication Flow",
            "kind": "reading"
          },
          {
            "id": "lab-3-login-service",
            "name": "Lab 3: Login Service",
            "kind": "reading"
          },
          {
            "id": "lab-4-api-response",
            "name": "Lab 4: API Response",
            "kind": "reading"
          },
          {
            "id": "lab-5",
            "name": "Lab 5",
            "kind": "reading"
          },
          {
            "id": "lab-6",
            "name": "Lab 6",
            "kind": "reading"
          },
          {
            "id": "lab-7",
            "name": "Lab 7",
            "kind": "reading"
          },
          {
            "id": "lab-8",
            "name": "Lab 8",
            "kind": "reading"
          },
          {
            "id": "lab-9",
            "name": "Lab 9",
            "kind": "reading"
          },
          {
            "id": "lab-10",
            "name": "Lab 10",
            "kind": "reading"
          },
          {
            "id": "lab-11",
            "name": "Lab 11",
            "kind": "reading"
          },
          {
            "id": "lab-12",
            "name": "Lab 12",
            "kind": "reading"
          },
          {
            "id": "lab-13",
            "name": "Lab 13",
            "kind": "reading"
          },
          {
            "id": "lab-14",
            "name": "Lab 14",
            "kind": "reading"
          },
          {
            "id": "lab-15",
            "name": "Lab 15",
            "kind": "reading"
          },
          {
            "id": "lab-16",
            "name": "Lab 16",
            "kind": "reading"
          },
          {
            "id": "lab-17",
            "name": "Lab 17",
            "kind": "reading"
          },
          {
            "id": "lab-18",
            "name": "Lab 18",
            "kind": "reading"
          }
        ]
      },
      {
        "id": "file-upload",
        "name": "File Upload",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/9.%20Enterprise%20Angular%20Development/3.%20File%20Upload.md",
        "docPath": "Angular/9. Enterprise Angular Development/3. File Upload.md",
        "subtopics": [
          {
            "id": "lab-1-file-input",
            "name": "Lab 1: File Input",
            "kind": "reading"
          },
          {
            "id": "lab-2-file-change-event",
            "name": "Lab 2: File Change Event",
            "kind": "reading"
          },
          {
            "id": "lab-3-display-file-name",
            "name": "Lab 3: Display File Name",
            "kind": "reading"
          },
          {
            "id": "lab-4-display-file-size",
            "name": "Lab 4: Display File Size",
            "kind": "reading"
          },
          {
            "id": "lab-5",
            "name": "Lab 5",
            "kind": "reading"
          },
          {
            "id": "lab-6",
            "name": "Lab 6",
            "kind": "reading"
          },
          {
            "id": "lab-7",
            "name": "Lab 7",
            "kind": "reading"
          },
          {
            "id": "lab-8",
            "name": "Lab 8",
            "kind": "reading"
          },
          {
            "id": "lab-9-file-type-validation",
            "name": "Lab 9: File Type Validation",
            "kind": "reading"
          },
          {
            "id": "lab-10-file-size-validation",
            "name": "Lab 10: File Size Validation",
            "kind": "reading"
          },
          {
            "id": "lab-11",
            "name": "Lab 11",
            "kind": "reading"
          },
          {
            "id": "lab-12",
            "name": "Lab 12",
            "kind": "reading"
          },
          {
            "id": "lab-13",
            "name": "Lab 13",
            "kind": "reading"
          },
          {
            "id": "lab-14",
            "name": "Lab 14",
            "kind": "reading"
          },
          {
            "id": "lab-15",
            "name": "Lab 15",
            "kind": "reading"
          },
          {
            "id": "lab-16",
            "name": "Lab 16",
            "kind": "reading"
          },
          {
            "id": "lab-17",
            "name": "Lab 17",
            "kind": "reading"
          },
          {
            "id": "lab-18",
            "name": "Lab 18",
            "kind": "reading"
          },
          {
            "id": "lab-19",
            "name": "Lab 19",
            "kind": "reading"
          }
        ]
      }
    ]
  },
  {
    "id": "10",
    "name": "Testing",
    "folder": "Angular/10. Testing",
    "topics": [
      {
        "id": "angular-testing-basics",
        "name": "Angular Testing Basics",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/10.%20Testing/1.%20Angular%20Testing%20Basics.md",
        "docPath": "Angular/10. Testing/1. Angular Testing Basics.md",
        "subtopics": [
          {
            "id": "lab-1-generate-component",
            "name": "Lab 1: Generate Component",
            "kind": "reading"
          },
          {
            "id": "lab-2-first-test",
            "name": "Lab 2: First Test",
            "kind": "reading"
          },
          {
            "id": "lab-3-understanding-describe",
            "name": "Lab 3: Understanding describe()",
            "kind": "reading"
          },
          {
            "id": "lab-4-understanding-it",
            "name": "Lab 4: Understanding it()",
            "kind": "reading"
          },
          {
            "id": "lab-5-understanding-expect",
            "name": "Lab 5: Understanding expect()",
            "kind": "reading"
          },
          {
            "id": "lab-6",
            "name": "Lab 6",
            "kind": "reading"
          },
          {
            "id": "lab-7",
            "name": "Lab 7",
            "kind": "reading"
          },
          {
            "id": "lab-8",
            "name": "Lab 8",
            "kind": "reading"
          },
          {
            "id": "lab-9",
            "name": "Lab 9",
            "kind": "reading"
          },
          {
            "id": "lab-10",
            "name": "Lab 10",
            "kind": "reading"
          },
          {
            "id": "lab-11",
            "name": "Lab 11",
            "kind": "reading"
          },
          {
            "id": "lab-12",
            "name": "Lab 12",
            "kind": "reading"
          },
          {
            "id": "lab-13",
            "name": "Lab 13",
            "kind": "reading"
          },
          {
            "id": "lab-14",
            "name": "Lab 14",
            "kind": "reading"
          },
          {
            "id": "lab-15",
            "name": "Lab 15",
            "kind": "reading"
          }
        ]
      },
      {
        "id": "unit-testing-components-and-services",
        "name": "Unit Testing Components and Services",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/10.%20Testing/2.%20Unit%20Testing%20Components%20and%20Services.md",
        "docPath": "Angular/10. Testing/2. Unit Testing Components and Services.md",
        "subtopics": [
          {
            "id": "lab-1-component-test-file",
            "name": "Lab 1: Component Test File",
            "kind": "reading"
          },
          {
            "id": "lab-2-configure-testbed",
            "name": "Lab 2: Configure TestBed",
            "kind": "reading"
          },
          {
            "id": "lab-3-create-component",
            "name": "Lab 3: Create Component",
            "kind": "reading"
          },
          {
            "id": "lab-4-component-creation-test",
            "name": "Lab 4: Component Creation Test",
            "kind": "reading"
          },
          {
            "id": "lab-5",
            "name": "Lab 5",
            "kind": "reading"
          },
          {
            "id": "lab-6",
            "name": "Lab 6",
            "kind": "reading"
          },
          {
            "id": "lab-7",
            "name": "Lab 7",
            "kind": "reading"
          },
          {
            "id": "lab-8",
            "name": "Lab 8",
            "kind": "reading"
          },
          {
            "id": "lab-9",
            "name": "Lab 9",
            "kind": "reading"
          },
          {
            "id": "lab-10",
            "name": "Lab 10",
            "kind": "reading"
          },
          {
            "id": "lab-11",
            "name": "Lab 11",
            "kind": "reading"
          },
          {
            "id": "lab-12",
            "name": "Lab 12",
            "kind": "reading"
          },
          {
            "id": "lab-13",
            "name": "Lab 13",
            "kind": "reading"
          },
          {
            "id": "lab-14",
            "name": "Lab 14",
            "kind": "reading"
          },
          {
            "id": "lab-15",
            "name": "Lab 15",
            "kind": "reading"
          },
          {
            "id": "lab-16",
            "name": "Lab 16",
            "kind": "reading"
          },
          {
            "id": "lab-17",
            "name": "Lab 17",
            "kind": "reading"
          },
          {
            "id": "lab-18",
            "name": "Lab 18",
            "kind": "reading"
          },
          {
            "id": "lab-19",
            "name": "Lab 19",
            "kind": "reading"
          },
          {
            "id": "lab-20",
            "name": "Lab 20",
            "kind": "reading"
          }
        ]
      }
    ]
  },
  {
    "id": "11",
    "name": "Build, Deployment and Performance",
    "folder": "Angular/11. Build Deployment and Performance",
    "topics": [
      {
        "id": "angular-build",
        "name": "Angular Build",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/11.%20Build%20Deployment%20and%20Performance/1.%20Angular%20Build.md",
        "docPath": "Angular/11. Build Deployment and Performance/1. Angular Build.md",
        "subtopics": [
          {
            "id": "lab-1-create-angular-project",
            "name": "Lab 1: Create Angular Project",
            "kind": "reading"
          },
          {
            "id": "lab-2-development-build",
            "name": "Lab 2: Development Build",
            "kind": "reading"
          },
          {
            "id": "lab-3-build-folder",
            "name": "Lab 3: Build Folder",
            "kind": "reading"
          },
          {
            "id": "lab-4-run-development-server",
            "name": "Lab 4: Run Development Server",
            "kind": "reading"
          },
          {
            "id": "lab-5",
            "name": "Lab 5",
            "kind": "reading"
          },
          {
            "id": "lab-6",
            "name": "Lab 6",
            "kind": "reading"
          },
          {
            "id": "lab-7",
            "name": "Lab 7",
            "kind": "reading"
          },
          {
            "id": "lab-8",
            "name": "Lab 8",
            "kind": "reading"
          },
          {
            "id": "lab-9",
            "name": "Lab 9",
            "kind": "reading"
          },
          {
            "id": "lab-10",
            "name": "Lab 10",
            "kind": "reading"
          },
          {
            "id": "lab-11",
            "name": "Lab 11",
            "kind": "reading"
          },
          {
            "id": "lab-12",
            "name": "Lab 12",
            "kind": "reading"
          },
          {
            "id": "lab-13",
            "name": "Lab 13",
            "kind": "reading"
          },
          {
            "id": "lab-14",
            "name": "Lab 14",
            "kind": "reading"
          },
          {
            "id": "lab-15",
            "name": "Lab 15",
            "kind": "reading"
          },
          {
            "id": "lab-16",
            "name": "Lab 16",
            "kind": "reading"
          }
        ]
      },
      {
        "id": "angular-deployment",
        "name": "Angular Deployment",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/11.%20Build%20Deployment%20and%20Performance/2.%20Angular%20Deployment.md",
        "docPath": "Angular/11. Build Deployment and Performance/2. Angular Deployment.md",
        "subtopics": [
          {
            "id": "lab-1-create-angular-project",
            "name": "Lab 1: Create Angular Project",
            "kind": "reading"
          },
          {
            "id": "lab-2-development-build",
            "name": "Lab 2: Development Build",
            "kind": "reading"
          },
          {
            "id": "lab-3-build-folder",
            "name": "Lab 3: Build Folder",
            "kind": "reading"
          },
          {
            "id": "lab-4-run-development-server",
            "name": "Lab 4: Run Development Server",
            "kind": "reading"
          },
          {
            "id": "lab-5",
            "name": "Lab 5",
            "kind": "reading"
          },
          {
            "id": "lab-6",
            "name": "Lab 6",
            "kind": "reading"
          },
          {
            "id": "lab-7",
            "name": "Lab 7",
            "kind": "reading"
          },
          {
            "id": "lab-8",
            "name": "Lab 8",
            "kind": "reading"
          },
          {
            "id": "lab-9",
            "name": "Lab 9",
            "kind": "reading"
          },
          {
            "id": "lab-10",
            "name": "Lab 10",
            "kind": "reading"
          },
          {
            "id": "lab-11",
            "name": "Lab 11",
            "kind": "reading"
          },
          {
            "id": "lab-12",
            "name": "Lab 12",
            "kind": "reading"
          },
          {
            "id": "lab-13",
            "name": "Lab 13",
            "kind": "reading"
          },
          {
            "id": "lab-14",
            "name": "Lab 14",
            "kind": "reading"
          },
          {
            "id": "lab-15",
            "name": "Lab 15",
            "kind": "reading"
          },
          {
            "id": "lab-16",
            "name": "Lab 16",
            "kind": "reading"
          }
        ]
      },
      {
        "id": "angular-performance-optimization",
        "name": "Angular Performance Optimization",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/11.%20Build%20Deployment%20and%20Performance/3.%20Angular%20Performance%20Optimization.md",
        "docPath": "Angular/11. Build Deployment and Performance/3. Angular Performance Optimization.md",
        "subtopics": [
          {
            "id": "lab-1-performance-problem",
            "name": "Lab 1: Performance Problem",
            "kind": "reading"
          },
          {
            "id": "lab-2-lazy-loading",
            "name": "Lab 2: Lazy Loading",
            "kind": "reading"
          },
          {
            "id": "lab-3-bundle-optimization",
            "name": "Lab 3: Bundle Optimization",
            "kind": "reading"
          },
          {
            "id": "lab-4-change-detection-problem",
            "name": "Lab 4: Change Detection Problem",
            "kind": "reading"
          },
          {
            "id": "lab-5-onpush-strategy",
            "name": "Lab 5: OnPush Strategy",
            "kind": "reading"
          },
          {
            "id": "lab-6-onpush-flow",
            "name": "Lab 6: OnPush Flow",
            "kind": "reading"
          },
          {
            "id": "lab-7-trackby-problem",
            "name": "Lab 7: TrackBy Problem",
            "kind": "reading"
          },
          {
            "id": "lab-8-trackby-solution",
            "name": "Lab 8: TrackBy Solution",
            "kind": "reading"
          },
          {
            "id": "lab-9-signals",
            "name": "Lab 9: Signals",
            "kind": "reading"
          },
          {
            "id": "lab-10-signals-performance",
            "name": "Lab 10: Signals Performance",
            "kind": "reading"
          },
          {
            "id": "lab-11-image-optimization",
            "name": "Lab 11: Image Optimization",
            "kind": "reading"
          },
          {
            "id": "lab-12-caching",
            "name": "Lab 12: Caching",
            "kind": "reading"
          },
          {
            "id": "lab-13-api-optimization",
            "name": "Lab 13: API Optimization",
            "kind": "reading"
          },
          {
            "id": "lab-14-dashboard-optimization",
            "name": "Lab 14: Dashboard Optimization",
            "kind": "reading"
          },
          {
            "id": "lab-15-society-complaint-management-example",
            "name": "Lab 15: Society Complaint Management Example",
            "kind": "reading"
          },
          {
            "id": "lab-16-build-optimization",
            "name": "Lab 16: Build Optimization",
            "kind": "reading"
          },
          {
            "id": "lab-17-route-level-optimization",
            "name": "Lab 17: Route-Level Optimization",
            "kind": "reading"
          },
          {
            "id": "lab-18-enterprise-architecture",
            "name": "Lab 18: Enterprise Architecture",
            "kind": "reading"
          },
          {
            "id": "lab-19-monitoring-performance",
            "name": "Lab 19: Monitoring Performance",
            "kind": "reading"
          },
          {
            "id": "lab-20-performance-flow",
            "name": "Lab 20: Performance Flow",
            "kind": "reading"
          }
        ]
      },
      {
        "id": "angular-server-side-rendering",
        "name": "Angular Server Side Rendering",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/11.%20Build%20Deployment%20and%20Performance/4.%20Angular%20Server%20Side%20Rendering.md",
        "docPath": "Angular/11. Build Deployment and Performance/4. Angular Server Side Rendering.md",
        "subtopics": [
          {
            "id": "lab-1-traditional-angular-flow",
            "name": "Lab 1: Traditional Angular Flow",
            "kind": "reading"
          },
          {
            "id": "lab-2-ssr-flow",
            "name": "Lab 2: SSR Flow",
            "kind": "reading"
          },
          {
            "id": "lab-3-enable-ssr",
            "name": "Lab 3: Enable SSR",
            "kind": "reading"
          },
          {
            "id": "lab-4-generated-files",
            "name": "Lab 4: Generated Files",
            "kind": "reading"
          },
          {
            "id": "lab-5-build-ssr-application",
            "name": "Lab 5: Build SSR Application",
            "kind": "reading"
          },
          {
            "id": "lab-6-run-ssr-application",
            "name": "Lab 6: Run SSR Application",
            "kind": "reading"
          },
          {
            "id": "lab-7-request-flow",
            "name": "Lab 7: Request Flow",
            "kind": "reading"
          },
          {
            "id": "lab-8-seo-example",
            "name": "Lab 8: SEO Example",
            "kind": "reading"
          },
          {
            "id": "lab-9-public-website-example",
            "name": "Lab 9: Public Website Example",
            "kind": "reading"
          },
          {
            "id": "lab-10-hydration",
            "name": "Lab 10: Hydration",
            "kind": "reading"
          },
          {
            "id": "lab-11-hydration-example",
            "name": "Lab 11: Hydration Example",
            "kind": "reading"
          },
          {
            "id": "lab-12-e-commerce-example",
            "name": "Lab 12: E-Commerce Example",
            "kind": "reading"
          },
          {
            "id": "lab-13-blog-website-example",
            "name": "Lab 13: Blog Website Example",
            "kind": "reading"
          },
          {
            "id": "lab-14-banking-portal-example",
            "name": "Lab 14: Banking Portal Example",
            "kind": "reading"
          },
          {
            "id": "lab-15-society-complaint-management-example",
            "name": "Lab 15: Society Complaint Management Example",
            "kind": "reading"
          },
          {
            "id": "lab-16-enterprise-architecture",
            "name": "Lab 16: Enterprise Architecture",
            "kind": "reading"
          },
          {
            "id": "lab-17-ssr-deployment",
            "name": "Lab 17: SSR Deployment",
            "kind": "reading"
          },
          {
            "id": "lab-18-performance-benefits",
            "name": "Lab 18: Performance Benefits",
            "kind": "reading"
          },
          {
            "id": "lab-19-challenges",
            "name": "Lab 19: Challenges",
            "kind": "reading"
          },
          {
            "id": "lab-20-ssr-flow-summary",
            "name": "Lab 20: SSR Flow Summary",
            "kind": "reading"
          }
        ]
      },
      {
        "id": "angular-best-practices",
        "name": "Angular Best Practices",
        "source": "https://github.com/techlambda-services/Angular-1/blob/main/Angular/11.%20Build%20Deployment%20and%20Performance/5.%20Angular%20Best%20Practices.md",
        "docPath": "Angular/11. Build Deployment and Performance/5. Angular Best Practices.md",
        "subtopics": [
          {
            "id": "what",
            "name": "What",
            "kind": "reading"
          }
        ]
      }
    ]
  }
];
export const COURSE_CHAPTERS: readonly CourseChapter[] = chaptersSource.map(chapter => ({
 ...chapter,
 topics:chapter.topics.map(topic => ({
  ...topic,
  subtopics:topic.subtopics.map(subtopic => {
    if (subtopic.kind === 'reading') return { ...subtopic, detailFile:topic.source + '#' + subtopic.id };
    // Chapter 04 is a distinct executable Forms module, not an LAB_TOPICS demo.
    if (chapter.id === '04' || chapter.id === '05' || chapter.id === '06' || chapter.id === '07') return subtopic;
    const demo=LAB_TOPICS.find(item=>item.id === subtopic.id && item.category === subtopic.category);
    if (!demo) throw new Error('Missing executable Angular demo: ' + subtopic.id);
    return { ...subtopic, name:demo.title, detailFile:'https://github.com/techlambda-services/Angular-1/blob/main/Angular/society-help-desk/chapters/chapter-03/executions/' + subtopic.id + '.md' };
  })
 }))
}));
export const chapterById = (id:string|null) => COURSE_CHAPTERS.find(item=>item.id===id);
export const chapterTopicById = (ch:string|null,t:string|null) => chapterById(ch)?.topics.find(item=>item.id===t);
export const courseSubtopicById = (ch:string|null,t:string|null,s:string|null) =>
 chapterTopicById(ch,t)?.subtopics.find(item=>item.id===s);
export const liveDemosForChapter=(id:string)=>chapterById(id)?.topics.reduce(
 (sum,t)=>sum+t.subtopics.filter(s=>s.kind==='live').length,0)??0;
