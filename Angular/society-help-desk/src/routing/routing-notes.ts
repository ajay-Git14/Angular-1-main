/** Chapter 07 published syllabus lab notes. Live engine uses actual Angular Router APIs. */
export interface Ch07Note {readonly number:number;readonly focus:string;readonly action:string;readonly expected:string;readonly hook:string;readonly snippet:string;readonly explanation:string;}
export const CH07_NOTES:Readonly<Record<string,Readonly<Record<string,Ch07Note>>>> =
{
  "routing-and-navigation": {
    "lab-1": {
      "number": 1,
      "focus": "Create Routes",
      "action": "Use the Run Router.navigate button or the routerLink navigation menu; confirm that the URL and rendered component change.",
      "expected": "The browser URL changes and Angular renders the matched component without manually reloading the page.",
      "hook": "URL → route match → component → router-outlet.",
      "snippet": "import {\n\nRoutes\n\n}\nfrom '@angular/router';\n\nexport const routes:\nRoutes = [];",
      "explanation": "Chapter 07 · Routing & Navigation · Create Routes. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-2": {
      "number": 2,
      "focus": "First Route",
      "action": "Use the Run Router.navigate button or the routerLink navigation menu; confirm that the URL and rendered component change.",
      "expected": "The browser URL changes and Angular renders the matched component without manually reloading the page.",
      "hook": "URL → route match → component → router-outlet.",
      "snippet": "ng g c home\n\nng g c login",
      "explanation": "Chapter 07 · Routing & Navigation · First Route. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-3": {
      "number": 3,
      "focus": "Router Outlet",
      "action": "Use the Run Router.navigate button or the routerLink navigation menu; confirm that the URL and rendered component change.",
      "expected": "The browser URL changes and Angular renders the matched component without manually reloading the page.",
      "hook": "URL → route match → component → router-outlet.",
      "snippet": "<router-outlet>\n\n</router-outlet>",
      "explanation": "Chapter 07 · Routing & Navigation · Router Outlet. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-4": {
      "number": 4,
      "focus": "RouterLink",
      "action": "Use the Run Router.navigate button or the routerLink navigation menu; confirm that the URL and rendered component change.",
      "expected": "The browser URL changes and Angular renders the matched component without manually reloading the page.",
      "hook": "URL → route match → component → router-outlet.",
      "snippet": "<a\n\nrouterLink=\"/home\">\n\nHome\n\n</a>",
      "explanation": "Chapter 07 · Routing & Navigation · RouterLink. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-5": {
      "number": 5,
      "focus": "RouterLink",
      "action": "Use the Run Router.navigate button or the routerLink navigation menu; confirm that the URL and rendered component change.",
      "expected": "The browser URL changes and Angular renders the matched component without manually reloading the page.",
      "hook": "URL → route match → component → router-outlet.",
      "snippet": "<a\n\nrouterLink=\"/login\">\n\nLogin\n\n</a>",
      "explanation": "Chapter 07 · Routing & Navigation · RouterLink. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-6": {
      "number": 6,
      "focus": "Navigation Menu",
      "action": "Use the Run Router.navigate button or the routerLink navigation menu; confirm that the URL and rendered component change.",
      "expected": "The browser URL changes and Angular renders the matched component without manually reloading the page.",
      "hook": "URL → route match → component → router-outlet.",
      "snippet": "<nav>\n\n<a\n\nrouterLink=\"/home\">\n\nHome\n\n</a>\n\n<a\n\nrouterLink=\"/login\">\n\nLogin\n\n</a>\n\n</nav>",
      "explanation": "Chapter 07 · Routing & Navigation · Navigation Menu. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-7": {
      "number": 7,
      "focus": "Default Route",
      "action": "Use the Run Router.navigate button or the routerLink navigation menu; confirm that the URL and rendered component change.",
      "expected": "The browser URL changes and Angular renders the matched component without manually reloading the page.",
      "hook": "URL → route match → component → router-outlet.",
      "snippet": "{\n\npath:'',\n\nredirectTo:'home',\n\npathMatch:'full'\n\n}",
      "explanation": "Chapter 07 · Routing & Navigation · Default Route. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-8": {
      "number": 8,
      "focus": "Wildcard Route",
      "action": "Use the Run Router.navigate button or the routerLink navigation menu; confirm that the URL and rendered component change.",
      "expected": "The browser URL changes and Angular renders the matched component without manually reloading the page.",
      "hook": "URL → route match → component → router-outlet.",
      "snippet": "ng g c not-found",
      "explanation": "Chapter 07 · Routing & Navigation · Wildcard Route. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-9": {
      "number": 9,
      "focus": "Programmatic Navigation",
      "action": "Use the Run Router.navigate button or the routerLink navigation menu; confirm that the URL and rendered component change.",
      "expected": "The browser URL changes and Angular renders the matched component without manually reloading the page.",
      "hook": "URL → route match → component → router-outlet.",
      "snippet": "import {\n\nRouter\n\n}\nfrom '@angular/router';\n\nconstructor(\n\nprivate router:\nRouter\n\n){}",
      "explanation": "Chapter 07 · Routing & Navigation · Programmatic Navigation. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-10": {
      "number": 10,
      "focus": "Programmatic Navigation",
      "action": "Use the Run Router.navigate button or the routerLink navigation menu; confirm that the URL and rendered component change.",
      "expected": "The browser URL changes and Angular renders the matched component without manually reloading the page.",
      "hook": "URL → route match → component → router-outlet.",
      "snippet": "login(){\n\nthis.router.navigate(\n\n['/dashboard']\n\n);\n\n}",
      "explanation": "Chapter 07 · Routing & Navigation · Programmatic Navigation. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-11": {
      "number": 11,
      "focus": "Passing Data During Navigation",
      "action": "Use the Run Router.navigate button or the routerLink navigation menu; confirm that the URL and rendered component change.",
      "expected": "The browser URL changes and Angular renders the matched component without manually reloading the page.",
      "hook": "URL → route match → component → router-outlet.",
      "snippet": "this.router.navigate(\n\n['/dashboard'],\n\n{\n\nqueryParams:{\n\nuserId:1\n\n}\n\n}\n\n);",
      "explanation": "Chapter 07 · Routing & Navigation · Passing Data During Navigation. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-12": {
      "number": 12,
      "focus": "Active Route Styling",
      "action": "Use the Run Router.navigate button or the routerLink navigation menu; confirm that the URL and rendered component change.",
      "expected": "The browser URL changes and Angular renders the matched component without manually reloading the page.",
      "hook": "URL → route match → component → router-outlet.",
      "snippet": "<a\n\nrouterLink=\"/home\"\n\nrouterLinkActive=\"active\">\n\nHome\n\n</a>",
      "explanation": "Chapter 07 · Routing & Navigation · Active Route Styling. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-13": {
      "number": 13,
      "focus": "Society Complaint Project Example",
      "action": "Use the Run Router.navigate button or the routerLink navigation menu; confirm that the URL and rendered component change.",
      "expected": "The browser URL changes and Angular renders the matched component without manually reloading the page.",
      "hook": "URL → route match → component → router-outlet.",
      "snippet": "{\n\npath:'dashboard',\n\ncomponent:\nDashboardComponent\n\n},\n\n{\n\npath:'complaints',\n\ncomponent:\nComplaintsComponent\n\n},\n\n{\n\npath:'residents',\n\ncomponent:\nResidentsComponent\n\n}",
      "explanation": "Chapter 07 · Routing & Navigation · Society Complaint Project Example. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-14": {
      "number": 14,
      "focus": "Employee Portal Example",
      "action": "Use the Run Router.navigate button or the routerLink navigation menu; confirm that the URL and rendered component change.",
      "expected": "The browser URL changes and Angular renders the matched component without manually reloading the page.",
      "hook": "URL → route match → component → router-outlet.",
      "snippet": "{\n\npath:'employees',\n\ncomponent:\nEmployeesComponent\n\n},\n\n{\n\npath:'attendance',\n\ncomponent:\nAttendanceComponent\n\n},\n\n{\n\npath:'salary',\n\ncomponent:\nSalaryComponent\n\n}",
      "explanation": "Chapter 07 · Routing & Navigation · Employee Portal Example. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-15": {
      "number": 15,
      "focus": "Admin Panel Navigation",
      "action": "Use the Run Router.navigate button or the routerLink navigation menu; confirm that the URL and rendered component change.",
      "expected": "The browser URL changes and Angular renders the matched component without manually reloading the page.",
      "hook": "URL → route match → component → router-outlet.",
      "snippet": "<nav>\n\n<a routerLink=\"/users\">\n\nUsers\n\n</a>\n\n<a routerLink=\"/roles\">\n\nRoles\n\n</a>\n\n<a routerLink=\"/reports\">\n\nReports\n\n</a>\n\n</nav>",
      "explanation": "Chapter 07 · Routing & Navigation · Admin Panel Navigation. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    }
  },
  "route-parameters": {
    "lab-1": {
      "number": 1,
      "focus": "Create Parameterized Route",
      "action": "Select a parameter or query value and navigate; compare the snapshot with reactive paramMap and queryParamMap on the destination page.",
      "expected": "The destination component reads real route parameters and query parameters; changing :id updates the reactive paramMap.",
      "hook": ":id is a path placeholder; queryParamMap reads optional URL filters.",
      "snippet": "{\n\npath:'employee/:id',\n\ncomponent:\nEmployeeComponent\n\n}",
      "explanation": "Chapter 07 · Route Parameters · Create Parameterized Route. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-2": {
      "number": 2,
      "focus": "Understanding :id",
      "action": "Select a parameter or query value and navigate; compare the snapshot with reactive paramMap and queryParamMap on the destination page.",
      "expected": "The destination component reads real route parameters and query parameters; changing :id updates the reactive paramMap.",
      "hook": ":id is a path placeholder; queryParamMap reads optional URL filters.",
      "snippet": "employee/:id",
      "explanation": "Chapter 07 · Route Parameters · Understanding :id. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-3": {
      "number": 3,
      "focus": "Reading Route Parameter",
      "action": "Select a parameter or query value and navigate; compare the snapshot with reactive paramMap and queryParamMap on the destination page.",
      "expected": "The destination component reads real route parameters and query parameters; changing :id updates the reactive paramMap.",
      "hook": ":id is a path placeholder; queryParamMap reads optional URL filters.",
      "snippet": "import {\n\nActivatedRoute\n\n}\nfrom '@angular/router';\n\nconstructor(\n\nprivate route:\nActivatedRoute\n\n){}",
      "explanation": "Chapter 07 · Route Parameters · Reading Route Parameter. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-4": {
      "number": 4,
      "focus": "Snapshot",
      "action": "Select a parameter or query value and navigate; compare the snapshot with reactive paramMap and queryParamMap on the destination page.",
      "expected": "The destination component reads real route parameters and query parameters; changing :id updates the reactive paramMap.",
      "hook": ":id is a path placeholder; queryParamMap reads optional URL filters.",
      "snippet": "employeeId =\n\nthis.route\n.snapshot\n.paramMap\n.get('id');",
      "explanation": "Chapter 07 · Route Parameters · Snapshot. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-5": {
      "number": 5,
      "focus": "Display Parameter",
      "action": "Select a parameter or query value and navigate; compare the snapshot with reactive paramMap and queryParamMap on the destination page.",
      "expected": "The destination component reads real route parameters and query parameters; changing :id updates the reactive paramMap.",
      "hook": ":id is a path placeholder; queryParamMap reads optional URL filters.",
      "snippet": "<h2>\n\nEmployee Id:\n\n{{employeeId}}\n\n</h2>",
      "explanation": "Chapter 07 · Route Parameters · Display Parameter. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-6": {
      "number": 6,
      "focus": "Navigate With Parameter",
      "action": "Select a parameter or query value and navigate; compare the snapshot with reactive paramMap and queryParamMap on the destination page.",
      "expected": "The destination component reads real route parameters and query parameters; changing :id updates the reactive paramMap.",
      "hook": ":id is a path placeholder; queryParamMap reads optional URL filters.",
      "snippet": "this.router.navigate(\n\n['employee',101]\n\n);",
      "explanation": "Chapter 07 · Route Parameters · Navigate With Parameter. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-7": {
      "number": 7,
      "focus": "Society Complaint Example",
      "action": "Select a parameter or query value and navigate; compare the snapshot with reactive paramMap and queryParamMap on the destination page.",
      "expected": "The destination component reads real route parameters and query parameters; changing :id updates the reactive paramMap.",
      "hook": ":id is a path placeholder; queryParamMap reads optional URL filters.",
      "snippet": "{\n\npath:'complaint/:id',\n\ncomponent:\nComplaintDetailsComponent\n\n}",
      "explanation": "Chapter 07 · Route Parameters · Society Complaint Example. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-8": {
      "number": 8,
      "focus": "Read Complaint ID",
      "action": "Select a parameter or query value and navigate; compare the snapshot with reactive paramMap and queryParamMap on the destination page.",
      "expected": "The destination component reads real route parameters and query parameters; changing :id updates the reactive paramMap.",
      "hook": ":id is a path placeholder; queryParamMap reads optional URL filters.",
      "snippet": "complaintId =\n\nthis.route\n.snapshot\n.paramMap\n.get('id');",
      "explanation": "Chapter 07 · Route Parameters · Read Complaint ID. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-9": {
      "number": 9,
      "focus": "Employee Profile Example",
      "action": "Select a parameter or query value and navigate; compare the snapshot with reactive paramMap and queryParamMap on the destination page.",
      "expected": "The destination component reads real route parameters and query parameters; changing :id updates the reactive paramMap.",
      "hook": ":id is a path placeholder; queryParamMap reads optional URL filters.",
      "snippet": "{\n\npath:'profile/:employeeId',\n\ncomponent:\nProfileComponent\n\n}",
      "explanation": "Chapter 07 · Route Parameters · Employee Profile Example. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-10": {
      "number": 10,
      "focus": "Product Details Example",
      "action": "Select a parameter or query value and navigate; compare the snapshot with reactive paramMap and queryParamMap on the destination page.",
      "expected": "The destination component reads real route parameters and query parameters; changing :id updates the reactive paramMap.",
      "hook": ":id is a path placeholder; queryParamMap reads optional URL filters.",
      "snippet": "{\n\npath:'product/:id',\n\ncomponent:\nProductDetailsComponent\n\n}",
      "explanation": "Chapter 07 · Route Parameters · Product Details Example. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-11": {
      "number": 11,
      "focus": "Multiple Route Parameters",
      "action": "Select a parameter or query value and navigate; compare the snapshot with reactive paramMap and queryParamMap on the destination page.",
      "expected": "The destination component reads real route parameters and query parameters; changing :id updates the reactive paramMap.",
      "hook": ":id is a path placeholder; queryParamMap reads optional URL filters.",
      "snippet": "{\n\npath:\n'department/:deptId/employee/:empId',\n\ncomponent:\nEmployeeComponent\n\n}",
      "explanation": "Chapter 07 · Route Parameters · Multiple Route Parameters. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-12": {
      "number": 12,
      "focus": "Read Multiple Parameters",
      "action": "Select a parameter or query value and navigate; compare the snapshot with reactive paramMap and queryParamMap on the destination page.",
      "expected": "The destination component reads real route parameters and query parameters; changing :id updates the reactive paramMap.",
      "hook": ":id is a path placeholder; queryParamMap reads optional URL filters.",
      "snippet": "const deptId =\n\nthis.route\n.snapshot\n.paramMap\n.get('deptId');\n\nconst empId =\n\nthis.route\n.snapshot\n.paramMap\n.get('empId');",
      "explanation": "Chapter 07 · Route Parameters · Read Multiple Parameters. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-13": {
      "number": 13,
      "focus": "Observable Route Parameters",
      "action": "Open employee 101 then click employee 102 without exiting the component; compare snapshot and reactive paramMap.",
      "expected": "The destination component reads real route parameters and query parameters; changing :id updates the reactive paramMap.",
      "hook": ":id is a path placeholder; queryParamMap reads optional URL filters.",
      "snippet": "this.route\n.paramMap\n.subscribe(\n\nparams => {\n\nthis.employeeId =\n\nparams.get('id');\n\n}\n\n);",
      "explanation": "Chapter 07 · Route Parameters · Observable Route Parameters. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-14": {
      "number": 14,
      "focus": "Query Parameters",
      "action": "Change page/status query values, open the parameter viewer, and switch page 1/page 2 links.",
      "expected": "The destination component reads real route parameters and query parameters; changing :id updates the reactive paramMap.",
      "hook": ":id is a path placeholder; queryParamMap reads optional URL filters.",
      "snippet": "this.router.navigate(\n\n['employees'],\n\n{\n\nqueryParams:{\n\npage:1,\n\nsort:'name'\n\n}\n\n}\n\n);",
      "explanation": "Chapter 07 · Route Parameters · Query Parameters. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-15": {
      "number": 15,
      "focus": "Read Query Parameters",
      "action": "Change page/status query values, open the parameter viewer, and switch page 1/page 2 links.",
      "expected": "The destination component reads real route parameters and query parameters; changing :id updates the reactive paramMap.",
      "hook": ":id is a path placeholder; queryParamMap reads optional URL filters.",
      "snippet": "this.route\n.queryParamMap\n.subscribe(\n\nparams => {\n\nconst page =\n\nparams.get('page');\n\n}\n\n);",
      "explanation": "Chapter 07 · Route Parameters · Read Query Parameters. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-16": {
      "number": 16,
      "focus": "Society Complaint Search Example",
      "action": "Change page/status query values, open the parameter viewer, and switch page 1/page 2 links.",
      "expected": "The destination component reads real route parameters and query parameters; changing :id updates the reactive paramMap.",
      "hook": ":id is a path placeholder; queryParamMap reads optional URL filters.",
      "snippet": "/complaints?page=1&status=open",
      "explanation": "Chapter 07 · Route Parameters · Society Complaint Search Example. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-17": {
      "number": 17,
      "focus": "Employee Search Example",
      "action": "Change page/status query values, open the parameter viewer, and switch page 1/page 2 links.",
      "expected": "The destination component reads real route parameters and query parameters; changing :id updates the reactive paramMap.",
      "hook": ":id is a path placeholder; queryParamMap reads optional URL filters.",
      "snippet": "/employees?department=IT",
      "explanation": "Chapter 07 · Route Parameters · Employee Search Example. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-18": {
      "number": 18,
      "focus": "Banking Transaction Example",
      "action": "Select a parameter or query value and navigate; compare the snapshot with reactive paramMap and queryParamMap on the destination page.",
      "expected": "The destination component reads real route parameters and query parameters; changing :id updates the reactive paramMap.",
      "hook": ":id is a path placeholder; queryParamMap reads optional URL filters.",
      "snippet": "/transaction/50001",
      "explanation": "Chapter 07 · Route Parameters · Banking Transaction Example. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    }
  },
  "child-routes": {
    "lab-1": {
      "number": 1,
      "focus": "Parent Route Example",
      "action": "Open the portal and switch children; watch the same parent remain visible while the child router-outlet changes.",
      "expected": "The parent portal remains on screen and a child renders in the inner router-outlet. Nested reports add another outlet.",
      "hook": "Parent stays; child swaps inside a nested router-outlet.",
      "snippet": "{\n\npath:'dashboard',\n\ncomponent:\nDashboardComponent\n\n}",
      "explanation": "Chapter 07 · Child Routes · Parent Route Example. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-2": {
      "number": 2,
      "focus": "Child Routes",
      "action": "Open the portal and switch children; watch the same parent remain visible while the child router-outlet changes.",
      "expected": "The parent portal remains on screen and a child renders in the inner router-outlet. Nested reports add another outlet.",
      "hook": "Parent stays; child swaps inside a nested router-outlet.",
      "snippet": "{\n\npath:'dashboard',\n\ncomponent:\nDashboardComponent,\n\nchildren:[\n\n{\n\npath:'complaints',\n\ncomponent:\nComplaintsComponent\n\n},\n\n{\n\npath:'reports',\n\ncomponent:\nReportsComponent\n\n}\n\n]\n\n}",
      "explanation": "Chapter 07 · Child Routes · Child Routes. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-3": {
      "number": 3,
      "focus": "Child Route Structure",
      "action": "Open the portal and switch children; watch the same parent remain visible while the child router-outlet changes.",
      "expected": "The parent portal remains on screen and a child renders in the inner router-outlet. Nested reports add another outlet.",
      "hook": "Parent stays; child swaps inside a nested router-outlet.",
      "snippet": "Dashboard\n    ├── Complaints\n    ├── Reports",
      "explanation": "Chapter 07 · Child Routes · Child Route Structure. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-4": {
      "number": 4,
      "focus": "Nested Router Outlet",
      "action": "Open the portal and switch children; watch the same parent remain visible while the child router-outlet changes.",
      "expected": "The parent portal remains on screen and a child renders in the inner router-outlet. Nested reports add another outlet.",
      "hook": "Parent stays; child swaps inside a nested router-outlet.",
      "snippet": "<h1>\n\nDashboard\n\n</h1>\n\n<router-outlet>\n\n</router-outlet>",
      "explanation": "Chapter 07 · Child Routes · Nested Router Outlet. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-5": {
      "number": 5,
      "focus": "Navigation To Child Routes",
      "action": "Open the portal and switch children; watch the same parent remain visible while the child router-outlet changes.",
      "expected": "The parent portal remains on screen and a child renders in the inner router-outlet. Nested reports add another outlet.",
      "hook": "Parent stays; child swaps inside a nested router-outlet.",
      "snippet": "<a\n\nrouterLink=\"complaints\">\n\nComplaints\n\n</a>\n\n<a\n\nrouterLink=\"reports\">\n\nReports\n\n</a>",
      "explanation": "Chapter 07 · Child Routes · Navigation To Child Routes. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-6": {
      "number": 6,
      "focus": "Society Project Example",
      "action": "Open the portal and switch children; watch the same parent remain visible while the child router-outlet changes.",
      "expected": "The parent portal remains on screen and a child renders in the inner router-outlet. Nested reports add another outlet.",
      "hook": "Parent stays; child swaps inside a nested router-outlet.",
      "snippet": "{\n\npath:'dashboard',\n\ncomponent:\nDashboardComponent,\n\nchildren:[\n\n{\n\npath:'complaints',\n\ncomponent:\nComplaintsComponent\n\n},\n\n{\n\npath:'residents',\n\ncomponent:\nResidentsComponent\n\n},\n\n{\n\npath:'reports',\n\ncomponent:\nReportsComponent\n\n},\n\n{\n\npath:'settings',\n\ncomponent:\nSettingsComponent\n\n}\n\n]\n\n}",
      "explanation": "Chapter 07 · Child Routes · Society Project Example. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-7": {
      "number": 7,
      "focus": "Dashboard Layout",
      "action": "Open the portal and switch children; watch the same parent remain visible while the child router-outlet changes.",
      "expected": "The parent portal remains on screen and a child renders in the inner router-outlet. Nested reports add another outlet.",
      "hook": "Parent stays; child swaps inside a nested router-outlet.",
      "snippet": "Dashboard\n     ├── Complaints\n     ├── Residents\n     ├── Reports\n     └── Settings",
      "explanation": "Chapter 07 · Child Routes · Dashboard Layout. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-8": {
      "number": 8,
      "focus": "Employee Portal Example",
      "action": "Open the portal and switch children; watch the same parent remain visible while the child router-outlet changes.",
      "expected": "The parent portal remains on screen and a child renders in the inner router-outlet. Nested reports add another outlet.",
      "hook": "Parent stays; child swaps inside a nested router-outlet.",
      "snippet": "{\n\npath:'employee',\n\ncomponent:\nEmployeeComponent,\n\nchildren:[\n\n{\n\npath:'profile',\n\ncomponent:\nProfileComponent\n\n},\n\n{\n\npath:'attendance',\n\ncomponent:\nAttendanceComponent\n\n},\n\n{\n\npath:'salary',\n\ncomponent:\nSalaryComponent\n\n}\n\n]\n\n}",
      "explanation": "Chapter 07 · Child Routes · Employee Portal Example. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-9": {
      "number": 9,
      "focus": "Admin Portal Example",
      "action": "Open the portal and switch children; watch the same parent remain visible while the child router-outlet changes.",
      "expected": "The parent portal remains on screen and a child renders in the inner router-outlet. Nested reports add another outlet.",
      "hook": "Parent stays; child swaps inside a nested router-outlet.",
      "snippet": "{\n\npath:'admin',\n\ncomponent:\nAdminComponent,\n\nchildren:[\n\n{\n\npath:'users',\n\ncomponent:\nUsersComponent\n\n},\n\n{\n\npath:'roles',\n\ncomponent:\nRolesComponent\n\n},\n\n{\n\npath:'audit',\n\ncomponent:\nAuditComponent\n\n}\n\n]\n\n}",
      "explanation": "Chapter 07 · Child Routes · Admin Portal Example. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-10": {
      "number": 10,
      "focus": "Multiple Level Child Routes",
      "action": "Open the portal and switch children; watch the same parent remain visible while the child router-outlet changes.",
      "expected": "The parent portal remains on screen and a child renders in the inner router-outlet. Nested reports add another outlet.",
      "hook": "Parent stays; child swaps inside a nested router-outlet.",
      "snippet": "{\n\npath:'dashboard',\n\ncomponent:\nDashboardComponent,\n\nchildren:[\n\n{\n\npath:'reports',\n\ncomponent:\nReportsComponent,\n\nchildren:[\n\n{\n\npath:'monthly',\n\ncomponent:\nMonthlyReportComponent\n\n},\n\n{\n\npath:'yearly',\n\ncomponent:\nYearlyReportComponent\n\n}\n\n]\n\n}\n\n]\n\n}",
      "explanation": "Chapter 07 · Child Routes · Multiple Level Child Routes. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-11": {
      "number": 11,
      "focus": "Default Child Route",
      "action": "Open the portal and switch children; watch the same parent remain visible while the child router-outlet changes.",
      "expected": "The parent portal remains on screen and a child renders in the inner router-outlet. Nested reports add another outlet.",
      "hook": "Parent stays; child swaps inside a nested router-outlet.",
      "snippet": "{\n\npath:'',\n\nredirectTo:'complaints',\n\npathMatch:'full'\n\n}",
      "explanation": "Chapter 07 · Child Routes · Default Child Route. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-12": {
      "number": 12,
      "focus": "Child Route Navigation",
      "action": "Open the portal and switch children; watch the same parent remain visible while the child router-outlet changes.",
      "expected": "The parent portal remains on screen and a child renders in the inner router-outlet. Nested reports add another outlet.",
      "hook": "Parent stays; child swaps inside a nested router-outlet.",
      "snippet": "this.router.navigate(\n\n['dashboard',\n\n'complaints']\n\n);",
      "explanation": "Chapter 07 · Child Routes · Child Route Navigation. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-13": {
      "number": 13,
      "focus": "Child Route With Parameters",
      "action": "Open the portal and switch children; watch the same parent remain visible while the child router-outlet changes.",
      "expected": "The parent portal remains on screen and a child renders in the inner router-outlet. Nested reports add another outlet.",
      "hook": "Parent stays; child swaps inside a nested router-outlet.",
      "snippet": "{\n\npath:'complaints/:id',\n\ncomponent:\nComplaintDetailsComponent\n\n}",
      "explanation": "Chapter 07 · Child Routes · Child Route With Parameters. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-14": {
      "number": 14,
      "focus": "Route Hierarchy",
      "action": "Open the portal and switch children; watch the same parent remain visible while the child router-outlet changes.",
      "expected": "The parent portal remains on screen and a child renders in the inner router-outlet. Nested reports add another outlet.",
      "hook": "Parent stays; child swaps inside a nested router-outlet.",
      "snippet": "App\n ├── Dashboard\n │     ├── Complaints\n │     ├── Residents\n │     └── Reports\n │\n ├── Admin\n │     ├── Users\n │     ├── Roles\n │     └── Audit\n │\n └── Login",
      "explanation": "Chapter 07 · Child Routes · Route Hierarchy. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-15": {
      "number": 15,
      "focus": "Enterprise Architecture Example",
      "action": "Open the portal and switch children; watch the same parent remain visible while the child router-outlet changes.",
      "expected": "The parent portal remains on screen and a child renders in the inner router-outlet. Nested reports add another outlet.",
      "hook": "Parent stays; child swaps inside a nested router-outlet.",
      "snippet": "Application\n     ↓\nDashboard\n     ↓\nModules\n     ├── Users\n     ├── Roles\n     ├── Reports\n     ├── Settings\n     └── Audit",
      "explanation": "Chapter 07 · Child Routes · Enterprise Architecture Example. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    }
  },
  "route-guards": {
    "lab-1-generate-guard": {
      "number": 1,
      "focus": "CanActivate",
      "action": "Set the fake sign-in flag and role, then attempt navigation; compare permitted and denied routes and the unsaved-form prompt.",
      "expected": "CanActivate/CanMatch/CanActivateChild use real Angular guard functions. Unsaved edits trigger CanDeactivate confirmation.",
      "hook": "Guard = a navigation checkpoint, never server authorization.",
      "snippet": "ng g guard auth",
      "explanation": "Chapter 07 · Route Guards · CanActivate. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-2-first-guard": {
      "number": 2,
      "focus": "CanActivate",
      "action": "Set the fake sign-in flag and role, then attempt navigation; compare permitted and denied routes and the unsaved-form prompt.",
      "expected": "CanActivate/CanMatch/CanActivateChild use real Angular guard functions. Unsaved edits trigger CanDeactivate confirmation.",
      "hook": "Guard = a navigation checkpoint, never server authorization.",
      "snippet": "import {\n\nCanActivateFn\n\n}\nfrom '@angular/router';\n\nexport const authGuard:\n\nCanActivateFn = () => {\n\nreturn true;\n\n};",
      "explanation": "Chapter 07 · Route Guards · CanActivate. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-3": {
      "number": 3,
      "focus": "Apply Guard",
      "action": "Set the fake sign-in flag and role, then attempt navigation; compare permitted and denied routes and the unsaved-form prompt.",
      "expected": "CanActivate/CanMatch/CanActivateChild use real Angular guard functions. Unsaved edits trigger CanDeactivate confirmation.",
      "hook": "Guard = a navigation checkpoint, never server authorization.",
      "snippet": "{\n\npath:'dashboard',\n\ncomponent:\nDashboardComponent,\n\ncanActivate:[\nauthGuard\n]\n\n}",
      "explanation": "Chapter 07 · Route Guards · Apply Guard. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-4": {
      "number": 4,
      "focus": "Authentication Example",
      "action": "Set the fake sign-in flag and role, then attempt navigation; compare permitted and denied routes and the unsaved-form prompt.",
      "expected": "CanActivate/CanMatch/CanActivateChild use real Angular guard functions. Unsaved edits trigger CanDeactivate confirmation.",
      "hook": "Guard = a navigation checkpoint, never server authorization.",
      "snippet": "export const authGuard:\n\nCanActivateFn = () => {\n\nconst loggedIn = true;\n\nreturn loggedIn;\n\n};",
      "explanation": "Chapter 07 · Route Guards · Authentication Example. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-5": {
      "number": 5,
      "focus": "Redirect User",
      "action": "Set the fake sign-in flag and role, then attempt navigation; compare permitted and denied routes and the unsaved-form prompt.",
      "expected": "CanActivate/CanMatch/CanActivateChild use real Angular guard functions. Unsaved edits trigger CanDeactivate confirmation.",
      "hook": "Guard = a navigation checkpoint, never server authorization.",
      "snippet": "export const authGuard:\n\nCanActivateFn = () => {\n\nconst router =\ninject(Router);\n\nconst loggedIn =\nfalse;\n\nif(!loggedIn){\n\nrouter.navigate(\n['/login']\n);\n\nreturn false;\n\n}\n\nreturn true;\n\n};",
      "explanation": "Chapter 07 · Route Guards · Redirect User. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-6": {
      "number": 6,
      "focus": "Society Project Example",
      "action": "Set the fake sign-in flag and role, then attempt navigation; compare permitted and denied routes and the unsaved-form prompt.",
      "expected": "CanActivate/CanMatch/CanActivateChild use real Angular guard functions. Unsaved edits trigger CanDeactivate confirmation.",
      "hook": "Guard = a navigation checkpoint, never server authorization.",
      "snippet": "Resident\n     ↓\nLogin\n     ↓\nDashboard",
      "explanation": "Chapter 07 · Route Guards · Society Project Example. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-7": {
      "number": 7,
      "focus": "Role-Based Authorization",
      "action": "Try the admin route while signed out, then sign in and assign the admin demo role. Try again.",
      "expected": "CanMatch denies non-admin navigation with a reason and accepts the permitted demonstration role.",
      "hook": "Guard = a navigation checkpoint, never server authorization.",
      "snippet": "export const adminGuard:\n\nCanActivateFn = () => {\n\nconst role =\n'Admin';\n\nreturn role ===\n'Admin';\n\n};",
      "explanation": "Chapter 07 · Route Guards · Role-Based Authorization. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-8": {
      "number": 8,
      "focus": "Admin Route",
      "action": "Try the admin route while signed out, then sign in and assign the admin demo role. Try again.",
      "expected": "CanMatch denies non-admin navigation with a reason and accepts the permitted demonstration role.",
      "hook": "Guard = a navigation checkpoint, never server authorization.",
      "snippet": "{\n\npath:'admin',\n\ncomponent:\nAdminComponent,\n\ncanActivate:[\nadminGuard\n]\n\n}",
      "explanation": "Chapter 07 · Route Guards · Admin Route. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-9": {
      "number": 9,
      "focus": "CanDeactivate",
      "action": "Open the editable form, change its text, and click Back. Cancel the CanDeactivate confirmation, then save and navigate again.",
      "expected": "An actual CanDeactivate guard prevents navigation when Cancel is chosen and allows it when saved or confirmed.",
      "hook": "Guard = a navigation checkpoint, never server authorization.",
      "snippet": "User Editing Form\n       ↓\nClicks Back\n       ↓\nWarning\n       ↓\nLeave?",
      "explanation": "Chapter 07 · Route Guards · CanDeactivate. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-10": {
      "number": 10,
      "focus": "CanDeactivate",
      "action": "Open the editable form, change its text, and click Back. Cancel the CanDeactivate confirmation, then save and navigate again.",
      "expected": "An actual CanDeactivate guard prevents navigation when Cancel is chosen and allows it when saved or confirmed.",
      "hook": "Guard = a navigation checkpoint, never server authorization.",
      "snippet": "export const\ncanDeactivateGuard = () => {\n\nreturn confirm(\n\n'Leave Page?'\n\n);\n\n};",
      "explanation": "Chapter 07 · Route Guards · CanDeactivate. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-11": {
      "number": 11,
      "focus": "CanActivateChild",
      "action": "Try a guarded nested child while signed out, then sign in and open it again.",
      "expected": "CanActivateChild blocks the child until the fake sign-in state is enabled.",
      "hook": "Guard = a navigation checkpoint, never server authorization.",
      "snippet": "{\n\npath:'dashboard',\n\ncomponent:\nDashboardComponent,\n\ncanActivateChild:[\n\nauthGuard\n\n],\n\nchildren:[\n\n{\n path:'reports',\n component:\n ReportsComponent\n}\n\n]\n\n}",
      "explanation": "Chapter 07 · Route Guards · CanActivateChild. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-12": {
      "number": 12,
      "focus": "CanMatch",
      "action": "Try the admin route while signed out, then sign in and assign the admin demo role. Try again.",
      "expected": "CanMatch denies non-admin navigation with a reason and accepts the permitted demonstration role.",
      "hook": "Guard = a navigation checkpoint, never server authorization.",
      "snippet": "{\n\npath:'admin',\n\ncomponent:\nAdminComponent,\n\ncanMatch:[\n\nadminGuard\n\n]\n\n}",
      "explanation": "Chapter 07 · Route Guards · CanMatch. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-13": {
      "number": 13,
      "focus": "Banking Example",
      "action": "Set the fake sign-in flag and role, then attempt navigation; compare permitted and denied routes and the unsaved-form prompt.",
      "expected": "CanActivate/CanMatch/CanActivateChild use real Angular guard functions. Unsaved edits trigger CanDeactivate confirmation.",
      "hook": "Guard = a navigation checkpoint, never server authorization.",
      "snippet": "Account Summary\n\nTransactions\n\nFund Transfer\n\nProfile",
      "explanation": "Chapter 07 · Route Guards · Banking Example. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-14": {
      "number": 14,
      "focus": "Employee Portal Example",
      "action": "Try the admin route while signed out, then sign in and assign the admin demo role. Try again.",
      "expected": "CanMatch denies non-admin navigation with a reason and accepts the permitted demonstration role.",
      "hook": "Guard = a navigation checkpoint, never server authorization.",
      "snippet": "Admin\n  ↓\nUser Management\n\nRole Management\n\nReports",
      "explanation": "Chapter 07 · Route Guards · Employee Portal Example. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-15": {
      "number": 15,
      "focus": "Society Dashboard Example",
      "action": "Set the fake sign-in flag and role, then attempt navigation; compare permitted and denied routes and the unsaved-form prompt.",
      "expected": "CanActivate/CanMatch/CanActivateChild use real Angular guard functions. Unsaved edits trigger CanDeactivate confirmation.",
      "hook": "Guard = a navigation checkpoint, never server authorization.",
      "snippet": "Resident Login\n       ↓\nDashboard\n       ├── Complaints\n       ├── Notices\n       └── Payments",
      "explanation": "Chapter 07 · Route Guards · Society Dashboard Example. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    }
  },
  "lazy-loading": {
    "lab-1": {
      "number": 1,
      "focus": "Traditional Loading",
      "action": "Open the loadChildren feature route, then navigate to its nested lazily imported detail component.",
      "expected": "Router dynamically imports a component or routes file and renders it. Inspect JS Network requests rather than assuming bundle sizes.",
      "hook": "Load later, not at initial startup; verify by inspecting the JS chunk.",
      "snippet": "{\n\npath:'reports',\n\ncomponent:\nReportsComponent\n\n}",
      "explanation": "Chapter 07 · Lazy loading · Traditional Loading. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-2": {
      "number": 2,
      "focus": "Lazy Loaded Route",
      "action": "Open the loadComponent report route and inspect the JS Network tab for a loaded chunk.",
      "expected": "Router dynamically imports a component or routes file and renders it. Inspect JS Network requests rather than assuming bundle sizes.",
      "hook": "Load later, not at initial startup; verify by inspecting the JS chunk.",
      "snippet": "{\n\npath:'reports',\n\nloadComponent:() =>\n\nimport(\n\n'./reports/reports.component'\n\n)\n\n.then(\n\nm => m.ReportsComponent\n\n)\n\n}",
      "explanation": "Chapter 07 · Lazy loading · Lazy Loaded Route. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-3": {
      "number": 3,
      "focus": "Feature Module Example",
      "action": "Open the loadChildren feature route, then navigate to its nested lazily imported detail component.",
      "expected": "Router dynamically imports a component or routes file and renders it. Inspect JS Network requests rather than assuming bundle sizes.",
      "hook": "Load later, not at initial startup; verify by inspecting the JS chunk.",
      "snippet": "ng g module reports",
      "explanation": "Chapter 07 · Lazy loading · Feature Module Example. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-4": {
      "number": 4,
      "focus": "Reports Routing Module",
      "action": "Open the loadChildren feature route, then navigate to its nested lazily imported detail component.",
      "expected": "Router dynamically imports a component or routes file and renders it. Inspect JS Network requests rather than assuming bundle sizes.",
      "hook": "Load later, not at initial startup; verify by inspecting the JS chunk.",
      "snippet": "ng g module reports-routing",
      "explanation": "Chapter 07 · Lazy loading · Reports Routing Module. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-5": {
      "number": 5,
      "focus": "Configure Child Routes",
      "action": "Open the loadChildren feature route, then navigate to its nested lazily imported detail component.",
      "expected": "Router dynamically imports a component or routes file and renders it. Inspect JS Network requests rather than assuming bundle sizes.",
      "hook": "Load later, not at initial startup; verify by inspecting the JS chunk.",
      "snippet": "import {\n\nRoutes\n\n}\nfrom '@angular/router';\n\nexport const routes:\nRoutes = [\n\n{\n\npath:'',\n\ncomponent:\nReportsComponent\n\n}\n\n];",
      "explanation": "Chapter 07 · Lazy loading · Configure Child Routes. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-6": {
      "number": 6,
      "focus": "Lazy Load Feature",
      "action": "Open the loadChildren feature route, then navigate to its nested lazily imported detail component.",
      "expected": "Router dynamically imports a component or routes file and renders it. Inspect JS Network requests rather than assuming bundle sizes.",
      "hook": "Load later, not at initial startup; verify by inspecting the JS chunk.",
      "snippet": "{\n\npath:'reports',\n\nloadChildren:() =>\n\nimport(\n\n'./reports/reports.routes'\n\n)\n\n.then(\n\nm => m.routes\n\n)\n\n}",
      "explanation": "Chapter 07 · Lazy loading · Lazy Load Feature. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-7": {
      "number": 7,
      "focus": "Society Project Example",
      "action": "Open the loadChildren feature route, then navigate to its nested lazily imported detail component.",
      "expected": "Router dynamically imports a component or routes file and renders it. Inspect JS Network requests rather than assuming bundle sizes.",
      "hook": "Load later, not at initial startup; verify by inspecting the JS chunk.",
      "snippet": "Login Module\n\nDashboard Module\n\nComplaint Module\n\nResident Module\n\nReports Module\n\nSettings Module",
      "explanation": "Chapter 07 · Lazy loading · Society Project Example. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-8": {
      "number": 8,
      "focus": "Lazy Loading Flow",
      "action": "Open the loadChildren feature route, then navigate to its nested lazily imported detail component.",
      "expected": "Router dynamically imports a component or routes file and renders it. Inspect JS Network requests rather than assuming bundle sizes.",
      "hook": "Load later, not at initial startup; verify by inspecting the JS chunk.",
      "snippet": "Application Starts\n         ↓\nLogin Module Loaded\n         ↓\nUser Opens Dashboard\n         ↓\nDashboard Module Loaded\n         ↓\nUser Opens Reports\n         ↓\nReports Module Loaded",
      "explanation": "Chapter 07 · Lazy loading · Lazy Loading Flow. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-9": {
      "number": 9,
      "focus": "Employee Portal Example",
      "action": "Open the loadChildren feature route, then navigate to its nested lazily imported detail component.",
      "expected": "Router dynamically imports a component or routes file and renders it. Inspect JS Network requests rather than assuming bundle sizes.",
      "hook": "Load later, not at initial startup; verify by inspecting the JS chunk.",
      "snippet": "{\n\npath:'employees',\n\nloadChildren:() =>\n\nimport(\n\n'./employees/employees.routes'\n\n)\n\n.then(\n\nm => m.routes\n\n)\n\n}",
      "explanation": "Chapter 07 · Lazy loading · Employee Portal Example. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-10": {
      "number": 10,
      "focus": "Admin Module Example",
      "action": "Open the loadChildren feature route, then navigate to its nested lazily imported detail component.",
      "expected": "Router dynamically imports a component or routes file and renders it. Inspect JS Network requests rather than assuming bundle sizes.",
      "hook": "Load later, not at initial startup; verify by inspecting the JS chunk.",
      "snippet": "{\n\npath:'admin',\n\nloadChildren:() =>\n\nimport(\n\n'./admin/admin.routes'\n\n)\n\n.then(\n\nm => m.routes\n\n)\n\n}",
      "explanation": "Chapter 07 · Lazy loading · Admin Module Example. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-11": {
      "number": 11,
      "focus": "Banking Application Example",
      "action": "Open the loadChildren feature route, then navigate to its nested lazily imported detail component.",
      "expected": "Router dynamically imports a component or routes file and renders it. Inspect JS Network requests rather than assuming bundle sizes.",
      "hook": "Load later, not at initial startup; verify by inspecting the JS chunk.",
      "snippet": "Login\n\nAccounts\n\nTransactions\n\nFund Transfer\n\nProfile\n\nReports",
      "explanation": "Chapter 07 · Lazy loading · Banking Application Example. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-12": {
      "number": 12,
      "focus": "Verify Lazy Loading",
      "action": "Open the loadComponent report route and inspect the JS Network tab for a loaded chunk.",
      "expected": "Router dynamically imports a component or routes file and renders it. Inspect JS Network requests rather than assuming bundle sizes.",
      "hook": "Load later, not at initial startup; verify by inspecting the JS chunk.",
      "snippet": "Network Tab",
      "explanation": "Chapter 07 · Lazy loading · Verify Lazy Loading. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-13": {
      "number": 13,
      "focus": "Bundle Splitting",
      "action": "Open the loadComponent report route and inspect the JS Network tab for a loaded chunk.",
      "expected": "Router dynamically imports a component or routes file and renders it. Inspect JS Network requests rather than assuming bundle sizes.",
      "hook": "Load later, not at initial startup; verify by inspecting the JS chunk.",
      "snippet": "main.js\n\n20 MB",
      "explanation": "Chapter 07 · Lazy loading · Bundle Splitting. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-14": {
      "number": 14,
      "focus": "Nested Lazy Loading",
      "action": "Open the loadChildren feature route, then navigate to its nested lazily imported detail component.",
      "expected": "Router dynamically imports a component or routes file and renders it. Inspect JS Network requests rather than assuming bundle sizes.",
      "hook": "Load later, not at initial startup; verify by inspecting the JS chunk.",
      "snippet": "{\n\npath:'dashboard',\n\nloadChildren:() =>\n\nimport(\n\n'./dashboard/dashboard.routes'\n\n)\n\n.then(\n\nm => m.routes\n\n)\n\n}",
      "explanation": "Chapter 07 · Lazy loading · Nested Lazy Loading. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    },
    "lab-15": {
      "number": 15,
      "focus": "Enterprise Architecture",
      "action": "Open the loadChildren feature route, then navigate to its nested lazily imported detail component.",
      "expected": "Router dynamically imports a component or routes file and renders it. Inspect JS Network requests rather than assuming bundle sizes.",
      "hook": "Load later, not at initial startup; verify by inspecting the JS chunk.",
      "snippet": "Application\n\n├── Login Module\n├── Dashboard Module\n├── Users Module\n├── Reports Module\n├── Audit Module\n├── Settings Module\n└── Notification Module",
      "explanation": "Chapter 07 · Lazy loading · Enterprise Architecture. This is a real Angular routing demonstration connected to the numbered syllabus exercise."
    }
  }
};
