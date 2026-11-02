/** Curriculum-specific Chapter 06 lab notes aligned with published Markdown.
 * Eight topic-level live engines share real HttpClient/RxJS/Signals code; each
 * of the 120 syllabus labs has an individual route, explanation and guide.
 */
export interface Ch06Note {
 readonly number:number;readonly focus:string;readonly action:string;
 readonly expected:string;readonly explanation:string;readonly hook:string;
 readonly snippet:string;
}
export const CH06_NOTES: Readonly<Record<string,Readonly<Record<string,Ch06Note>>>> =
{
  "httpclient-and-api-integration": {
    "lab-1": {
      "number": 1,
      "focus": "Configure HttpClient",
      "action": "Use HttpClient to send a GET, POST, PUT or DELETE to our in-memory training backend. Compare the JSON response with the visible mock complaint list.",
      "expected": "HttpClient response/error panel changes; in-memory complaints reflect the correct CRUD method; no external request.",
      "explanation": "HttpClient and API integration — Configure HttpClient. This is the topic and Lab 1 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Component → API service → HttpClient → Interceptors → Fake backend → Observable result.",
      "snippet": "import {\n\nprovideHttpClient\n\n}\nfrom\n\n'@angular/common/http';"
    },
    "lab-2": {
      "number": 2,
      "focus": "Inject HttpClient",
      "action": "Use HttpClient to send a GET, POST, PUT or DELETE to our in-memory training backend. Compare the JSON response with the visible mock complaint list.",
      "expected": "HttpClient response/error panel changes; in-memory complaints reflect the correct CRUD method; no external request.",
      "explanation": "HttpClient and API integration — Inject HttpClient. This is the topic and Lab 2 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Component → API service → HttpClient → Interceptors → Fake backend → Observable result.",
      "snippet": "import {\n\nHttpClient\n\n}\nfrom\n\n'@angular/common/http';\n\nconstructor(\n\nprivate http:\nHttpClient\n\n){\n\n}"
    },
    "lab-3": {
      "number": 3,
      "focus": "GET Request",
      "action": "Use HttpClient to send a GET, POST, PUT or DELETE to our in-memory training backend. Compare the JSON response with the visible mock complaint list.",
      "expected": "HttpClient response/error panel changes; in-memory complaints reflect the correct CRUD method; no external request.",
      "explanation": "HttpClient and API integration — GET Request. This is the topic and Lab 3 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Component → API service → HttpClient → Interceptors → Fake backend → Observable result.",
      "snippet": "getComplaints(){\n\nreturn this.http.get(\n\n'https://api.com/complaints'\n\n);\n\n}"
    },
    "lab-4": {
      "number": 4,
      "focus": "POST Request",
      "action": "Use HttpClient to send a GET, POST, PUT or DELETE to our in-memory training backend. Compare the JSON response with the visible mock complaint list.",
      "expected": "HttpClient response/error panel changes; in-memory complaints reflect the correct CRUD method; no external request.",
      "explanation": "HttpClient and API integration — POST Request. This is the topic and Lab 4 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Component → API service → HttpClient → Interceptors → Fake backend → Observable result.",
      "snippet": "createComplaint(\ncomplaint:any\n){\n\nreturn this.http.post(\n\n'https://api.com/complaints',\n\ncomplaint\n\n);\n\n}"
    },
    "lab-5": {
      "number": 5,
      "focus": "PUT Request",
      "action": "Use HttpClient to send a GET, POST, PUT or DELETE to our in-memory training backend. Compare the JSON response with the visible mock complaint list.",
      "expected": "HttpClient response/error panel changes; in-memory complaints reflect the correct CRUD method; no external request.",
      "explanation": "HttpClient and API integration — PUT Request. This is the topic and Lab 5 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Component → API service → HttpClient → Interceptors → Fake backend → Observable result.",
      "snippet": "updateComplaint(\n\nid:number,\n\ncomplaint:any\n\n){\n\nreturn this.http.put(\n\n`https://api.com/complaints/${id}`,\n\ncomplaint\n\n);\n\n}"
    },
    "lab-6": {
      "number": 6,
      "focus": "DELETE Request",
      "action": "Use HttpClient to send a GET, POST, PUT or DELETE to our in-memory training backend. Compare the JSON response with the visible mock complaint list.",
      "expected": "HttpClient response/error panel changes; in-memory complaints reflect the correct CRUD method; no external request.",
      "explanation": "HttpClient and API integration — DELETE Request. This is the topic and Lab 6 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Component → API service → HttpClient → Interceptors → Fake backend → Observable result.",
      "snippet": "deleteComplaint(\nid:number\n){\n\nreturn this.http.delete(\n\n`https://api.com/complaints/${id}`\n\n);\n\n}"
    },
    "lab-7": {
      "number": 7,
      "focus": "Query Parameters",
      "action": "Use HttpClient to send a GET, POST, PUT or DELETE to our in-memory training backend. Compare the JSON response with the visible mock complaint list.",
      "expected": "HttpClient response/error panel changes; in-memory complaints reflect the correct CRUD method; no external request.",
      "explanation": "HttpClient and API integration — Query Parameters. This is the topic and Lab 7 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Component → API service → HttpClient → Interceptors → Fake backend → Observable result.",
      "snippet": "getComplaints(\nstatus:string\n){\n\nreturn this.http.get(\n\n`https://api.com/complaints?status=${status}`\n\n);\n\n}"
    },
    "lab-8": {
      "number": 8,
      "focus": "Request Headers",
      "action": "Use HttpClient to send a GET, POST, PUT or DELETE to our in-memory training backend. Compare the JSON response with the visible mock complaint list.",
      "expected": "HttpClient response/error panel changes; in-memory complaints reflect the correct CRUD method; no external request.",
      "explanation": "HttpClient and API integration — Request Headers. This is the topic and Lab 8 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Component → API service → HttpClient → Interceptors → Fake backend → Observable result.",
      "snippet": "const headers = {\n\nAuthorization:\n\n'Bearer token'\n\n};"
    },
    "lab-9": {
      "number": 9,
      "focus": "Request Body",
      "action": "Use HttpClient to send a GET, POST, PUT or DELETE to our in-memory training backend. Compare the JSON response with the visible mock complaint list.",
      "expected": "HttpClient response/error panel changes; in-memory complaints reflect the correct CRUD method; no external request.",
      "explanation": "HttpClient and API integration — Request Body. This is the topic and Lab 9 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Component → API service → HttpClient → Interceptors → Fake backend → Observable result.",
      "snippet": "{\n\ntitle:'Water Issue',\n\ndescription:'Leakage'\n\n}"
    },
    "lab-10": {
      "number": 10,
      "focus": "Response Handling",
      "action": "Use HttpClient to send a GET, POST, PUT or DELETE to our in-memory training backend. Compare the JSON response with the visible mock complaint list.",
      "expected": "HttpClient response/error panel changes; in-memory complaints reflect the correct CRUD method; no external request.",
      "explanation": "HttpClient and API integration — Response Handling. This is the topic and Lab 10 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Component → API service → HttpClient → Interceptors → Fake backend → Observable result.",
      "snippet": "this.http\n\n.get(url)\n\n.subscribe(\n\nresponse => {\n\nconsole.log(\n\nresponse\n\n);\n\n}\n\n);"
    },
    "lab-11": {
      "number": 11,
      "focus": "Error Handling",
      "action": "Use HttpClient to send a GET, POST, PUT or DELETE to our in-memory training backend. Compare the JSON response with the visible mock complaint list.",
      "expected": "HttpClient response/error panel changes; in-memory complaints reflect the correct CRUD method; no external request.",
      "explanation": "HttpClient and API integration — Error Handling. This is the topic and Lab 11 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Component → API service → HttpClient → Interceptors → Fake backend → Observable result.",
      "snippet": "this.http\n\n.get(url)\n\n.subscribe({\n\nnext:data => {\n\nconsole.log(data);\n\n},\n\nerror:error => {\n\nconsole.log(error);\n\n}\n\n});"
    },
    "lab-12": {
      "number": 12,
      "focus": "Society Complaint Service",
      "action": "Use HttpClient to send a GET, POST, PUT or DELETE to our in-memory training backend. Compare the JSON response with the visible mock complaint list.",
      "expected": "HttpClient response/error panel changes; in-memory complaints reflect the correct CRUD method; no external request.",
      "explanation": "HttpClient and API integration — Society Complaint Service. This is the topic and Lab 12 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Component → API service → HttpClient → Interceptors → Fake backend → Observable result.",
      "snippet": "@Injectable({\n\nprovidedIn:'root'\n\n})\n\nexport class ComplaintService{\n\nconstructor(\n\nprivate http:\nHttpClient\n\n){}\n\ngetComplaints(){\n\nreturn this.http.get(\n\n'/api/complaints'\n\n);\n\n}\n\n}"
    },
    "lab-13": {
      "number": 13,
      "focus": "Society Complaint Component",
      "action": "Use HttpClient to send a GET, POST, PUT or DELETE to our in-memory training backend. Compare the JSON response with the visible mock complaint list.",
      "expected": "HttpClient response/error panel changes; in-memory complaints reflect the correct CRUD method; no external request.",
      "explanation": "HttpClient and API integration — Society Complaint Component. This is the topic and Lab 13 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Component → API service → HttpClient → Interceptors → Fake backend → Observable result.",
      "snippet": "constructor(\n\nprivate complaintService:\nComplaintService\n\n){\n\n}\n\nloadComplaints(){\n\nthis.complaintService\n\n.getComplaints()\n\n.subscribe(\n\ndata => {\n\nconsole.log(data);\n\n}\n\n);\n\n}"
    },
    "lab-14": {
      "number": 14,
      "focus": "Employee API Example",
      "action": "Use HttpClient to send a GET, POST, PUT or DELETE to our in-memory training backend. Compare the JSON response with the visible mock complaint list.",
      "expected": "HttpClient response/error panel changes; in-memory complaints reflect the correct CRUD method; no external request.",
      "explanation": "HttpClient and API integration — Employee API Example. This is the topic and Lab 14 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Component → API service → HttpClient → Interceptors → Fake backend → Observable result.",
      "snippet": "getEmployees(){\n\nreturn this.http.get(\n\n'/api/employees'\n\n);\n\n}"
    },
    "lab-15": {
      "number": 15,
      "focus": "Banking API Example",
      "action": "Use HttpClient to send a GET, POST, PUT or DELETE to our in-memory training backend. Compare the JSON response with the visible mock complaint list.",
      "expected": "HttpClient response/error panel changes; in-memory complaints reflect the correct CRUD method; no external request.",
      "explanation": "HttpClient and API integration — Banking API Example. This is the topic and Lab 15 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Component → API service → HttpClient → Interceptors → Fake backend → Observable result.",
      "snippet": "transferMoney(\n\ndata:any\n\n){\n\nreturn this.http.post(\n\n'/api/transfer',\n\ndata\n\n);\n\n}"
    },
    "lab-16": {
      "number": 16,
      "focus": "Generic API Service Pattern",
      "action": "Use HttpClient to send a GET, POST, PUT or DELETE to our in-memory training backend. Compare the JSON response with the visible mock complaint list.",
      "expected": "HttpClient response/error panel changes; in-memory complaints reflect the correct CRUD method; no external request.",
      "explanation": "HttpClient and API integration — Generic API Service Pattern. This is the topic and Lab 16 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Component → API service → HttpClient → Interceptors → Fake backend → Observable result.",
      "snippet": "@Injectable({\n\nprovidedIn:'root'\n\n})\n\nexport class ApiService{\n\nget(url:string){\n\nreturn this.http.get(url);\n\n}\n\npost(\n\nurl:string,\n\ndata:any\n\n){\n\nreturn this.http.post(\n\nurl,\n\ndata\n\n);\n\n}\n\n}"
    }
  },
  "http-interceptors": {
    "lab-1": {
      "number": 1,
      "focus": "Create Interceptor",
      "action": "Run the request through Angular functional interceptors. Inspect auth demonstration headers, request/response logs, loading state, error handling and retries.",
      "expected": "Trace shows the configured interceptor chain; loading returns to zero, errors show 401/403/500 or retry succeeds.",
      "explanation": "HTTP Interceptors — Create Interceptor. This is the topic and Lab 1 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Interceptors are airport security gates for requests AND responses.",
      "snippet": "ng g interceptor auth"
    },
    "lab-2": {
      "number": 2,
      "focus": "Functional Interceptor",
      "action": "Run the request through Angular functional interceptors. Inspect auth demonstration headers, request/response logs, loading state, error handling and retries.",
      "expected": "Trace shows the configured interceptor chain; loading returns to zero, errors show 401/403/500 or retry succeeds.",
      "explanation": "HTTP Interceptors — Functional Interceptor. This is the topic and Lab 2 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Interceptors are airport security gates for requests AND responses.",
      "snippet": "import {\n\nHttpInterceptorFn\n\n}\nfrom\n\n'@angular/common/http';\n\nexport const\nauthInterceptor:\n\nHttpInterceptorFn =\n\n(req,next)=>{\n\nreturn next(req);\n\n};"
    },
    "lab-3": {
      "number": 3,
      "focus": "Register Interceptor",
      "action": "Run the request through Angular functional interceptors. Inspect auth demonstration headers, request/response logs, loading state, error handling and retries.",
      "expected": "Trace shows the configured interceptor chain; loading returns to zero, errors show 401/403/500 or retry succeeds.",
      "explanation": "HTTP Interceptors — Register Interceptor. This is the topic and Lab 3 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Interceptors are airport security gates for requests AND responses.",
      "snippet": "import {\n\nprovideHttpClient,\n\nwithInterceptors\n\n}\nfrom\n\n'@angular/common/http';"
    },
    "lab-4": {
      "number": 4,
      "focus": "Intercept Request",
      "action": "Run the request through Angular functional interceptors. Inspect auth demonstration headers, request/response logs, loading state, error handling and retries.",
      "expected": "Trace shows the configured interceptor chain; loading returns to zero, errors show 401/403/500 or retry succeeds.",
      "explanation": "HTTP Interceptors — Intercept Request. This is the topic and Lab 4 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Interceptors are airport security gates for requests AND responses.",
      "snippet": "export const\nauthInterceptor =\n\n(req,next)=>{\n\nconsole.log(\n\n'Request Intercepted'\n\n);\n\nreturn next(req);\n\n};"
    },
    "lab-5": {
      "number": 5,
      "focus": "Add JWT Token",
      "action": "Run the request through Angular functional interceptors. Inspect auth demonstration headers, request/response logs, loading state, error handling and retries.",
      "expected": "Trace shows the configured interceptor chain; loading returns to zero, errors show 401/403/500 or retry succeeds.",
      "explanation": "HTTP Interceptors — Add JWT Token. This is the topic and Lab 5 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Interceptors are airport security gates for requests AND responses.",
      "snippet": "export const\nauthInterceptor =\n\n(req,next)=>{\n\nconst modifiedRequest =\n\nreq.clone({\n\nsetHeaders:{\n\nAuthorization:\n\n'Bearer token'\n\n}\n\n});\n\nreturn next(\nmodifiedRequest\n);\n\n};"
    },
    "lab-6": {
      "number": 6,
      "focus": "Multiple Headers",
      "action": "Run the request through Angular functional interceptors. Inspect auth demonstration headers, request/response logs, loading state, error handling and retries.",
      "expected": "Trace shows the configured interceptor chain; loading returns to zero, errors show 401/403/500 or retry succeeds.",
      "explanation": "HTTP Interceptors — Multiple Headers. This is the topic and Lab 6 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Interceptors are airport security gates for requests AND responses.",
      "snippet": "const modifiedRequest =\n\nreq.clone({\n\nsetHeaders:{\n\nAuthorization:\n\n'Bearer token',\n\nClientId:'TechLambda'\n\n}\n\n});"
    },
    "lab-7": {
      "number": 7,
      "focus": "Response Interception",
      "action": "Run the request through Angular functional interceptors. Inspect auth demonstration headers, request/response logs, loading state, error handling and retries.",
      "expected": "Trace shows the configured interceptor chain; loading returns to zero, errors show 401/403/500 or retry succeeds.",
      "explanation": "HTTP Interceptors — Response Interception. This is the topic and Lab 7 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Interceptors are airport security gates for requests AND responses.",
      "snippet": "return next(req)\n\n.pipe(\n\ntap(\n\nresponse => {\n\nconsole.log(\n\nresponse\n\n);\n\n}\n\n)\n\n);"
    },
    "lab-8": {
      "number": 8,
      "focus": "Logging Interceptor",
      "action": "Run the request through Angular functional interceptors. Inspect auth demonstration headers, request/response logs, loading state, error handling and retries.",
      "expected": "Trace shows the configured interceptor chain; loading returns to zero, errors show 401/403/500 or retry succeeds.",
      "explanation": "HTTP Interceptors — Logging Interceptor. This is the topic and Lab 8 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Interceptors are airport security gates for requests AND responses.",
      "snippet": "export const\nloggingInterceptor =\n\n(req,next)=>{\n\nconsole.log(\n\nreq.url\n\n);\n\nreturn next(req);\n\n};"
    },
    "lab-9": {
      "number": 9,
      "focus": "Error Interceptor",
      "action": "Run the request through Angular functional interceptors. Inspect auth demonstration headers, request/response logs, loading state, error handling and retries.",
      "expected": "Trace shows the configured interceptor chain; loading returns to zero, errors show 401/403/500 or retry succeeds.",
      "explanation": "HTTP Interceptors — Error Interceptor. This is the topic and Lab 9 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Interceptors are airport security gates for requests AND responses.",
      "snippet": "return next(req)\n\n.pipe(\n\ncatchError(\n\nerror => {\n\nconsole.log(error);\n\nthrow error;\n\n}\n\n)\n\n);"
    },
    "lab-10": {
      "number": 10,
      "focus": "Global Error Handling",
      "action": "Run the request through Angular functional interceptors. Inspect auth demonstration headers, request/response logs, loading state, error handling and retries.",
      "expected": "Trace shows the configured interceptor chain; loading returns to zero, errors show 401/403/500 or retry succeeds.",
      "explanation": "HTTP Interceptors — Global Error Handling. This is the topic and Lab 10 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Interceptors are airport security gates for requests AND responses.",
      "snippet": "catchError(\n\nerror => {\n\nif(\n\nerror.status === 401\n\n){\n\nconsole.log(\n\n'Unauthorized'\n\n);\n\n}\n\nthrow error;\n\n}\n\n)"
    },
    "lab-11": {
      "number": 11,
      "focus": "Handle 403 Error",
      "action": "Run the request through Angular functional interceptors. Inspect auth demonstration headers, request/response logs, loading state, error handling and retries.",
      "expected": "Trace shows the configured interceptor chain; loading returns to zero, errors show 401/403/500 or retry succeeds.",
      "explanation": "HTTP Interceptors — Handle 403 Error. This is the topic and Lab 11 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Interceptors are airport security gates for requests AND responses.",
      "snippet": "if(\n\nerror.status === 403\n\n){\n\nconsole.log(\n\n'Forbidden'\n\n);\n\n}"
    },
    "lab-12": {
      "number": 12,
      "focus": "Handle 500 Error",
      "action": "Run the request through Angular functional interceptors. Inspect auth demonstration headers, request/response logs, loading state, error handling and retries.",
      "expected": "Trace shows the configured interceptor chain; loading returns to zero, errors show 401/403/500 or retry succeeds.",
      "explanation": "HTTP Interceptors — Handle 500 Error. This is the topic and Lab 12 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Interceptors are airport security gates for requests AND responses.",
      "snippet": "if(\n\nerror.status === 500\n\n){\n\nconsole.log(\n\n'Server Error'\n\n);\n\n}"
    },
    "lab-13": {
      "number": 13,
      "focus": "Loading Interceptor",
      "action": "Run the request through Angular functional interceptors. Inspect auth demonstration headers, request/response logs, loading state, error handling and retries.",
      "expected": "Trace shows the configured interceptor chain; loading returns to zero, errors show 401/403/500 or retry succeeds.",
      "explanation": "HTTP Interceptors — Loading Interceptor. This is the topic and Lab 13 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Interceptors are airport security gates for requests AND responses.",
      "snippet": "console.log(\n\n'Loading Started'\n\n);\n\nreturn next(req);"
    },
    "lab-14": {
      "number": 14,
      "focus": "Retry Failed Requests",
      "action": "Run the request through Angular functional interceptors. Inspect auth demonstration headers, request/response logs, loading state, error handling and retries.",
      "expected": "Trace shows the configured interceptor chain; loading returns to zero, errors show 401/403/500 or retry succeeds.",
      "explanation": "HTTP Interceptors — Retry Failed Requests. This is the topic and Lab 14 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Interceptors are airport security gates for requests AND responses.",
      "snippet": "return next(req)\n\n.pipe(\n\nretry(3)\n\n);"
    },
    "lab-15": {
      "number": 15,
      "focus": "Authentication Interceptor",
      "action": "Run the request through Angular functional interceptors. Inspect auth demonstration headers, request/response logs, loading state, error handling and retries.",
      "expected": "Trace shows the configured interceptor chain; loading returns to zero, errors show 401/403/500 or retry succeeds.",
      "explanation": "HTTP Interceptors — Authentication Interceptor. This is the topic and Lab 15 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Interceptors are airport security gates for requests AND responses.",
      "snippet": "export const\nauthInterceptor =\n\n(req,next)=>{\n\nconst token =\n\nlocalStorage.getItem(\n'token'\n);\n\nconst clonedRequest =\n\nreq.clone({\n\nsetHeaders:{\n\nAuthorization:\n\n`Bearer ${token}`\n\n}\n\n});\n\nreturn next(\nclonedRequest\n);\n\n};"
    },
    "lab-16": {
      "number": 16,
      "focus": "Society Complaint Example",
      "action": "Run the request through Angular functional interceptors. Inspect auth demonstration headers, request/response logs, loading state, error handling and retries.",
      "expected": "Trace shows the configured interceptor chain; loading returns to zero, errors show 401/403/500 or retry succeeds.",
      "explanation": "HTTP Interceptors — Society Complaint Example. This is the topic and Lab 16 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Interceptors are airport security gates for requests AND responses.",
      "snippet": "Complaint Request\n         ↓\nInterceptor\n         ↓\nToken Added\n         ↓\nBackend API\n         ↓\nResponse"
    },
    "lab-17": {
      "number": 17,
      "focus": "Banking Example",
      "action": "Run the request through Angular functional interceptors. Inspect auth demonstration headers, request/response logs, loading state, error handling and retries.",
      "expected": "Trace shows the configured interceptor chain; loading returns to zero, errors show 401/403/500 or retry succeeds.",
      "explanation": "HTTP Interceptors — Banking Example. This is the topic and Lab 17 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Interceptors are airport security gates for requests AND responses.",
      "snippet": "Money Transfer\n        ↓\nJWT Validation\n        ↓\nAPI\n        ↓\nResponse"
    },
    "lab-18": {
      "number": 18,
      "focus": "Multiple Interceptors",
      "action": "Run the request through Angular functional interceptors. Inspect auth demonstration headers, request/response logs, loading state, error handling and retries.",
      "expected": "Trace shows the configured interceptor chain; loading returns to zero, errors show 401/403/500 or retry succeeds.",
      "explanation": "HTTP Interceptors — Multiple Interceptors. This is the topic and Lab 18 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Interceptors are airport security gates for requests AND responses.",
      "snippet": "provideHttpClient(\n\nwithInterceptors([\n\nauthInterceptor,\n\nloggingInterceptor,\n\nerrorInterceptor\n\n])\n\n)"
    }
  },
  "rxjs-fundamentals": {
    "lab-1": {
      "number": 1,
      "focus": "First RxJS Example",
      "action": "Run a real RxJS source Observable with the chosen operator. Inspect each emitted value and the Completed indicator.",
      "expected": "Values emitted to the subscriber match the selected RxJS operator; the stream completes.",
      "explanation": "RxJS fundamentals — First RxJS Example. This is the topic and Lab 1 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Source → pipe/operators → subscriber → output.",
      "snippet": "import {\n\nof\n\n}\nfrom 'rxjs';"
    },
    "lab-2": {
      "number": 2,
      "focus": "First RxJS Example",
      "action": "Run a real RxJS source Observable with the chosen operator. Inspect each emitted value and the Completed indicator.",
      "expected": "Values emitted to the subscriber match the selected RxJS operator; the stream completes.",
      "explanation": "RxJS fundamentals — First RxJS Example. This is the topic and Lab 2 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Source → pipe/operators → subscriber → output.",
      "snippet": "const numbers =\n\nof(\n\n1,\n2,\n3,\n4,\n5\n\n);"
    },
    "lab-3": {
      "number": 3,
      "focus": "Subscribe",
      "action": "Run a real RxJS source Observable with the chosen operator. Inspect each emitted value and the Completed indicator.",
      "expected": "Values emitted to the subscriber match the selected RxJS operator; the stream completes.",
      "explanation": "RxJS fundamentals — Subscribe. This is the topic and Lab 3 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Source → pipe/operators → subscriber → output.",
      "snippet": "numbers\n\n.subscribe(\n\nvalue => {\n\nconsole.log(value);\n\n}\n\n);"
    },
    "lab-4": {
      "number": 4,
      "focus": "pipe()",
      "action": "Run a real RxJS source Observable with the chosen operator. Inspect each emitted value and the Completed indicator.",
      "expected": "Values emitted to the subscriber match the selected RxJS operator; the stream completes.",
      "explanation": "RxJS fundamentals — pipe(). This is the topic and Lab 4 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Source → pipe/operators → subscriber → output.",
      "snippet": "numbers\n\n.pipe(\n\n)\n\n.subscribe();"
    },
    "lab-5": {
      "number": 5,
      "focus": "map()",
      "action": "Run a real RxJS source Observable with the chosen operator. Inspect each emitted value and the Completed indicator.",
      "expected": "Values emitted to the subscriber match the selected RxJS operator; the stream completes.",
      "explanation": "RxJS fundamentals — map(). This is the topic and Lab 5 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Source → pipe/operators → subscriber → output.",
      "snippet": "numbers\n\n.pipe(\n\nmap(\n\nvalue =>\n\nvalue * 10\n\n)\n\n)\n\n.subscribe(\n\nconsole.log\n\n);"
    },
    "lab-6": {
      "number": 6,
      "focus": "filter()",
      "action": "Run a real RxJS source Observable with the chosen operator. Inspect each emitted value and the Completed indicator.",
      "expected": "Values emitted to the subscriber match the selected RxJS operator; the stream completes.",
      "explanation": "RxJS fundamentals — filter(). This is the topic and Lab 6 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Source → pipe/operators → subscriber → output.",
      "snippet": "numbers\n\n.pipe(\n\nfilter(\n\nvalue =>\n\nvalue > 3\n\n)\n\n)\n\n.subscribe(\n\nconsole.log\n\n);"
    },
    "lab-7": {
      "number": 7,
      "focus": "tap()",
      "action": "Run a real RxJS source Observable with the chosen operator. Inspect each emitted value and the Completed indicator.",
      "expected": "Values emitted to the subscriber match the selected RxJS operator; the stream completes.",
      "explanation": "RxJS fundamentals — tap(). This is the topic and Lab 7 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Source → pipe/operators → subscriber → output.",
      "snippet": "numbers\n\n.pipe(\n\ntap(\n\nvalue => {\n\nconsole.log(\n\n'Processing',\n\nvalue\n\n);\n\n}\n\n)\n\n)\n\n.subscribe();"
    },
    "lab-8": {
      "number": 8,
      "focus": "Multiple Operators",
      "action": "Run a real RxJS source Observable with the chosen operator. Inspect each emitted value and the Completed indicator.",
      "expected": "Values emitted to the subscriber match the selected RxJS operator; the stream completes.",
      "explanation": "RxJS fundamentals — Multiple Operators. This is the topic and Lab 8 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Source → pipe/operators → subscriber → output.",
      "snippet": "numbers\n\n.pipe(\n\nfilter(\n\nx => x > 2\n\n),\n\nmap(\n\nx => x * 10\n\n)\n\n)\n\n.subscribe(\n\nconsole.log\n\n);"
    },
    "lab-9": {
      "number": 9,
      "focus": "Search Box Example",
      "action": "Run a real RxJS source Observable with the chosen operator. Inspect each emitted value and the Completed indicator.",
      "expected": "Values emitted to the subscriber match the selected RxJS operator; the stream completes.",
      "explanation": "RxJS fundamentals — Search Box Example. This is the topic and Lab 9 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Source → pipe/operators → subscriber → output.",
      "snippet": "searchText$\n\n.pipe(\n\nswitchMap(\n\ntext =>\n\nthis.http.get(\n\n`/api/search?q=${text}`\n\n)\n\n)\n\n);"
    },
    "lab-10": {
      "number": 10,
      "focus": "mergeMap()",
      "action": "Run a real RxJS source Observable with the chosen operator. Inspect each emitted value and the Completed indicator.",
      "expected": "Values emitted to the subscriber match the selected RxJS operator; the stream completes.",
      "explanation": "RxJS fundamentals — mergeMap(). This is the topic and Lab 10 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Source → pipe/operators → subscriber → output.",
      "snippet": "orders$\n\n.pipe(\n\nmergeMap(\n\norder =>\n\nthis.http.post(\n\n'/api/order',\n\norder\n\n)\n\n)\n\n);"
    },
    "lab-11": {
      "number": 11,
      "focus": "Society Complaint Example",
      "action": "Run a real RxJS source Observable with the chosen operator. Inspect each emitted value and the Completed indicator.",
      "expected": "Values emitted to the subscriber match the selected RxJS operator; the stream completes.",
      "explanation": "RxJS fundamentals — Society Complaint Example. This is the topic and Lab 11 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Source → pipe/operators → subscriber → output.",
      "snippet": "search$\n\n.pipe(\n\nswitchMap(\n\nkeyword =>\n\nthis.http.get(\n\n`/api/complaints?search=${keyword}`\n\n)\n\n)\n\n);"
    },
    "lab-12": {
      "number": 12,
      "focus": "Employee Management Example",
      "action": "Run a real RxJS source Observable with the chosen operator. Inspect each emitted value and the Completed indicator.",
      "expected": "Values emitted to the subscriber match the selected RxJS operator; the stream completes.",
      "explanation": "RxJS fundamentals — Employee Management Example. This is the topic and Lab 12 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Source → pipe/operators → subscriber → output.",
      "snippet": "employee$\n\n.pipe(\n\nmap(\n\nemployee =>\n\nemployee.name\n\n)\n\n);"
    },
    "lab-13": {
      "number": 13,
      "focus": "Banking Example",
      "action": "Run a real RxJS source Observable with the chosen operator. Inspect each emitted value and the Completed indicator.",
      "expected": "Values emitted to the subscriber match the selected RxJS operator; the stream completes.",
      "explanation": "RxJS fundamentals — Banking Example. This is the topic and Lab 13 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Source → pipe/operators → subscriber → output.",
      "snippet": "transactions$\n\n.pipe(\n\nfilter(\n\nt =>\n\nt.amount > 10000\n\n)\n\n);"
    }
  },
  "observables-and-subjects": {
    "lab-1": {
      "number": 1,
      "focus": "Observable",
      "action": "Click Run to subscribe, emit or replay RxJS values. Compare cold Observable re-execution and the Subject varieties.",
      "expected": "Emissions appear, with shared subscribers or cached last/replayed/final values where applicable.",
      "explanation": "Observables and Subjects — Observable. This is the topic and Lab 1 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Observable = broadcast recipe; Subject = live microphone; BehaviorSubject = last-known value.",
      "snippet": "import {\n\nObservable\n\n}\nfrom 'rxjs';"
    },
    "lab-2": {
      "number": 2,
      "focus": "Observable",
      "action": "Click Run to subscribe, emit or replay RxJS values. Compare cold Observable re-execution and the Subject varieties.",
      "expected": "Emissions appear, with shared subscribers or cached last/replayed/final values where applicable.",
      "explanation": "Observables and Subjects — Observable. This is the topic and Lab 2 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Observable = broadcast recipe; Subject = live microphone; BehaviorSubject = last-known value.",
      "snippet": "const observable =\n\nnew Observable(\n\nsubscriber => {\n\nsubscriber.next(\n1\n);\n\nsubscriber.next(\n2\n);\n\nsubscriber.next(\n3\n);\n\nsubscriber.complete();\n\n}\n\n);"
    },
    "lab-3": {
      "number": 3,
      "focus": "Subscribe",
      "action": "Click Run to subscribe, emit or replay RxJS values. Compare cold Observable re-execution and the Subject varieties.",
      "expected": "Emissions appear, with shared subscribers or cached last/replayed/final values where applicable.",
      "explanation": "Observables and Subjects — Subscribe. This is the topic and Lab 3 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Observable = broadcast recipe; Subject = live microphone; BehaviorSubject = last-known value.",
      "snippet": "observable\n\n.subscribe(\n\nvalue => {\n\nconsole.log(\nvalue\n);\n\n}\n\n);"
    },
    "lab-4": {
      "number": 4,
      "focus": "Observer",
      "action": "Click Run to subscribe, emit or replay RxJS values. Compare cold Observable re-execution and the Subject varieties.",
      "expected": "Emissions appear, with shared subscribers or cached last/replayed/final values where applicable.",
      "explanation": "Observables and Subjects — Observer. This is the topic and Lab 4 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Observable = broadcast recipe; Subject = live microphone; BehaviorSubject = last-known value.",
      "snippet": "observable\n\n.subscribe({\n\nnext:value => {\n\nconsole.log(value);\n\n},\n\nerror:error => {\n\nconsole.log(error);\n\n},\n\ncomplete:() => {\n\nconsole.log(\n'Completed'\n);\n\n}\n\n});"
    },
    "lab-5": {
      "number": 5,
      "focus": "Subscription",
      "action": "Click Run to subscribe, emit or replay RxJS values. Compare cold Observable re-execution and the Subject varieties.",
      "expected": "Emissions appear, with shared subscribers or cached last/replayed/final values where applicable.",
      "explanation": "Observables and Subjects — Subscription. This is the topic and Lab 5 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Observable = broadcast recipe; Subject = live microphone; BehaviorSubject = last-known value.",
      "snippet": "const subscription =\n\nobservable.subscribe();"
    },
    "lab-6": {
      "number": 6,
      "focus": "Unsubscribe",
      "action": "Click Run to subscribe, emit or replay RxJS values. Compare cold Observable re-execution and the Subject varieties.",
      "expected": "Emissions appear, with shared subscribers or cached last/replayed/final values where applicable.",
      "explanation": "Observables and Subjects — Unsubscribe. This is the topic and Lab 6 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Observable = broadcast recipe; Subject = live microphone; BehaviorSubject = last-known value.",
      "snippet": "subscription.unsubscribe();"
    },
    "lab-7": {
      "number": 7,
      "focus": "Cold Observable",
      "action": "Click Run to subscribe, emit or replay RxJS values. Compare cold Observable re-execution and the Subject varieties.",
      "expected": "Emissions appear, with shared subscribers or cached last/replayed/final values where applicable.",
      "explanation": "Observables and Subjects — Cold Observable. This is the topic and Lab 7 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Observable = broadcast recipe; Subject = live microphone; BehaviorSubject = last-known value.",
      "snippet": "const users$ =\n\nthis.http.get(\n'/api/users'\n);"
    },
    "lab-8": {
      "number": 8,
      "focus": "Subject",
      "action": "Click Run to subscribe, emit or replay RxJS values. Compare cold Observable re-execution and the Subject varieties.",
      "expected": "Emissions appear, with shared subscribers or cached last/replayed/final values where applicable.",
      "explanation": "Observables and Subjects — Subject. This is the topic and Lab 8 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Observable = broadcast recipe; Subject = live microphone; BehaviorSubject = last-known value.",
      "snippet": "import {\n\nSubject\n\n}\nfrom 'rxjs';\n\nconst subject =\n\nnew Subject();"
    },
    "lab-9": {
      "number": 9,
      "focus": "Subject",
      "action": "Click Run to subscribe, emit or replay RxJS values. Compare cold Observable re-execution and the Subject varieties.",
      "expected": "Emissions appear, with shared subscribers or cached last/replayed/final values where applicable.",
      "explanation": "Observables and Subjects — Subject. This is the topic and Lab 9 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Observable = broadcast recipe; Subject = live microphone; BehaviorSubject = last-known value.",
      "snippet": "subject.subscribe(\n\nvalue => {\n\nconsole.log(\n'User A',\nvalue\n);\n\n}\n\n);\n\nsubject.subscribe(\n\nvalue => {\n\nconsole.log(\n'User B',\nvalue\n);\n\n}\n\n);"
    },
    "lab-10": {
      "number": 10,
      "focus": "Subject",
      "action": "Click Run to subscribe, emit or replay RxJS values. Compare cold Observable re-execution and the Subject varieties.",
      "expected": "Emissions appear, with shared subscribers or cached last/replayed/final values where applicable.",
      "explanation": "Observables and Subjects — Subject. This is the topic and Lab 10 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Observable = broadcast recipe; Subject = live microphone; BehaviorSubject = last-known value.",
      "snippet": "subject.next(\n'Hello'\n);"
    },
    "lab-11": {
      "number": 11,
      "focus": "BehaviorSubject",
      "action": "Click Run to subscribe, emit or replay RxJS values. Compare cold Observable re-execution and the Subject varieties.",
      "expected": "Emissions appear, with shared subscribers or cached last/replayed/final values where applicable.",
      "explanation": "Observables and Subjects — BehaviorSubject. This is the topic and Lab 11 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Observable = broadcast recipe; Subject = live microphone; BehaviorSubject = last-known value.",
      "snippet": "import {\n\nBehaviorSubject\n\n}\nfrom 'rxjs';\n\nconst user$ =\n\nnew BehaviorSubject(\n\n'Guest'\n\n);"
    },
    "lab-12": {
      "number": 12,
      "focus": "ReplaySubject",
      "action": "Click Run to subscribe, emit or replay RxJS values. Compare cold Observable re-execution and the Subject varieties.",
      "expected": "Emissions appear, with shared subscribers or cached last/replayed/final values where applicable.",
      "explanation": "Observables and Subjects — ReplaySubject. This is the topic and Lab 12 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Observable = broadcast recipe; Subject = live microphone; BehaviorSubject = last-known value.",
      "snippet": "import {\n\nReplaySubject\n\n}\nfrom 'rxjs';\n\nconst replay$ =\n\nnew ReplaySubject(3);"
    },
    "lab-13": {
      "number": 13,
      "focus": "AsyncSubject",
      "action": "Click Run to subscribe, emit or replay RxJS values. Compare cold Observable re-execution and the Subject varieties.",
      "expected": "Emissions appear, with shared subscribers or cached last/replayed/final values where applicable.",
      "explanation": "Observables and Subjects — AsyncSubject. This is the topic and Lab 13 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Observable = broadcast recipe; Subject = live microphone; BehaviorSubject = last-known value.",
      "snippet": "import {\n\nAsyncSubject\n\n}\nfrom 'rxjs';\n\nconst result$ =\n\nnew AsyncSubject();"
    },
    "lab-14": {
      "number": 14,
      "focus": "Society Complaint Example",
      "action": "Click Run to subscribe, emit or replay RxJS values. Compare cold Observable re-execution and the Subject varieties.",
      "expected": "Emissions appear, with shared subscribers or cached last/replayed/final values where applicable.",
      "explanation": "Observables and Subjects — Society Complaint Example. This is the topic and Lab 14 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Observable = broadcast recipe; Subject = live microphone; BehaviorSubject = last-known value.",
      "snippet": "private complaints$ =\n\nnew BehaviorSubject([]);\n\ngetComplaints(){\n\nreturn this.complaints$;\n\n}"
    },
    "lab-15": {
      "number": 15,
      "focus": "Employee Management Example",
      "action": "Click Run to subscribe, emit or replay RxJS values. Compare cold Observable re-execution and the Subject varieties.",
      "expected": "Emissions appear, with shared subscribers or cached last/replayed/final values where applicable.",
      "explanation": "Observables and Subjects — Employee Management Example. This is the topic and Lab 15 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Observable = broadcast recipe; Subject = live microphone; BehaviorSubject = last-known value.",
      "snippet": "private employees$ =\n\nnew BehaviorSubject([]);"
    },
    "lab-16": {
      "number": 16,
      "focus": "Notification System Example",
      "action": "Click Run to subscribe, emit or replay RxJS values. Compare cold Observable re-execution and the Subject varieties.",
      "expected": "Emissions appear, with shared subscribers or cached last/replayed/final values where applicable.",
      "explanation": "Observables and Subjects — Notification System Example. This is the topic and Lab 16 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Observable = broadcast recipe; Subject = live microphone; BehaviorSubject = last-known value.",
      "snippet": "private notification$ =\n\nnew Subject();"
    }
  },
  "signals": {
    "lab-1": {
      "number": 1,
      "focus": "What Is A Signal?",
      "action": "Run a writable signal operation and inspect the counter, object, array, employee count or demo login flag.",
      "expected": "Signal value changes immediately, and Angular updates the corresponding displayed value or list.",
      "explanation": "Signals — What Is A Signal?. This is the topic and Lab 1 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "signal() reads, set() replaces, update() transforms.",
      "snippet": "import {\n\nsignal\n\n}\nfrom '@angular/core';\n\ncount =\n\nsignal(0);"
    },
    "lab-2": {
      "number": 2,
      "focus": "Reading Signal Value",
      "action": "Run a writable signal operation and inspect the counter, object, array, employee count or demo login flag.",
      "expected": "Signal value changes immediately, and Angular updates the corresponding displayed value or list.",
      "explanation": "Signals — Reading Signal Value. This is the topic and Lab 2 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "signal() reads, set() replaces, update() transforms.",
      "snippet": "count()"
    },
    "lab-3": {
      "number": 3,
      "focus": "Display Signal",
      "action": "Run a writable signal operation and inspect the counter, object, array, employee count or demo login flag.",
      "expected": "Signal value changes immediately, and Angular updates the corresponding displayed value or list.",
      "explanation": "Signals — Display Signal. This is the topic and Lab 3 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "signal() reads, set() replaces, update() transforms.",
      "snippet": "<h2>\n\n{{count()}}\n\n</h2>"
    },
    "lab-4": {
      "number": 4,
      "focus": "Updating Signal",
      "action": "Run a writable signal operation and inspect the counter, object, array, employee count or demo login flag.",
      "expected": "Signal value changes immediately, and Angular updates the corresponding displayed value or list.",
      "explanation": "Signals — Updating Signal. This is the topic and Lab 4 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "signal() reads, set() replaces, update() transforms.",
      "snippet": "count.set(10);"
    },
    "lab-5": {
      "number": 5,
      "focus": "Increment Counter",
      "action": "Run a writable signal operation and inspect the counter, object, array, employee count or demo login flag.",
      "expected": "Signal value changes immediately, and Angular updates the corresponding displayed value or list.",
      "explanation": "Signals — Increment Counter. This is the topic and Lab 5 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "signal() reads, set() replaces, update() transforms.",
      "snippet": "increment(){\n\nthis.count.set(\n\nthis.count() + 1\n\n);\n\n}"
    },
    "lab-6": {
      "number": 6,
      "focus": "update()",
      "action": "Run a writable signal operation and inspect the counter, object, array, employee count or demo login flag.",
      "expected": "Signal value changes immediately, and Angular updates the corresponding displayed value or list.",
      "explanation": "Signals — update(). This is the topic and Lab 6 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "signal() reads, set() replaces, update() transforms.",
      "snippet": "count.update(\n\nvalue =>\n\nvalue + 1\n\n);"
    },
    "lab-7": {
      "number": 7,
      "focus": "String Signal",
      "action": "Run a writable signal operation and inspect the counter, object, array, employee count or demo login flag.",
      "expected": "Signal value changes immediately, and Angular updates the corresponding displayed value or list.",
      "explanation": "Signals — String Signal. This is the topic and Lab 7 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "signal() reads, set() replaces, update() transforms.",
      "snippet": "userName =\n\nsignal(\n'Deepak'\n);"
    },
    "lab-8": {
      "number": 8,
      "focus": "Object Signal",
      "action": "Run a writable signal operation and inspect the counter, object, array, employee count or demo login flag.",
      "expected": "Signal value changes immediately, and Angular updates the corresponding displayed value or list.",
      "explanation": "Signals — Object Signal. This is the topic and Lab 8 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "signal() reads, set() replaces, update() transforms.",
      "snippet": "user =\n\nsignal({\n\nname:'Deepak',\n\ncity:'Delhi'\n\n});"
    },
    "lab-9": {
      "number": 9,
      "focus": "Update Object",
      "action": "Run a writable signal operation and inspect the counter, object, array, employee count or demo login flag.",
      "expected": "Signal value changes immediately, and Angular updates the corresponding displayed value or list.",
      "explanation": "Signals — Update Object. This is the topic and Lab 9 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "signal() reads, set() replaces, update() transforms.",
      "snippet": "user.update(\n\ncurrent => ({\n\n...current,\n\ncity:'Mumbai'\n\n})\n\n);"
    },
    "lab-10": {
      "number": 10,
      "focus": "Array Signal",
      "action": "Run a writable signal operation and inspect the counter, object, array, employee count or demo login flag.",
      "expected": "Signal value changes immediately, and Angular updates the corresponding displayed value or list.",
      "explanation": "Signals — Array Signal. This is the topic and Lab 10 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "signal() reads, set() replaces, update() transforms.",
      "snippet": "complaints =\n\nsignal([\n\n'Water Issue',\n\n'Parking Issue'\n\n]);"
    },
    "lab-11": {
      "number": 11,
      "focus": "Add Item",
      "action": "Run a writable signal operation and inspect the counter, object, array, employee count or demo login flag.",
      "expected": "Signal value changes immediately, and Angular updates the corresponding displayed value or list.",
      "explanation": "Signals — Add Item. This is the topic and Lab 11 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "signal() reads, set() replaces, update() transforms.",
      "snippet": "complaints.update(\n\ncurrent => [\n\n...current,\n\n'Security Issue'\n\n]\n\n);"
    },
    "lab-12": {
      "number": 12,
      "focus": "Society Complaint Example",
      "action": "Run a writable signal operation and inspect the counter, object, array, employee count or demo login flag.",
      "expected": "Signal value changes immediately, and Angular updates the corresponding displayed value or list.",
      "explanation": "Signals — Society Complaint Example. This is the topic and Lab 12 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "signal() reads, set() replaces, update() transforms.",
      "snippet": "complaints =\n\nsignal([]);"
    },
    "lab-13": {
      "number": 13,
      "focus": "Employee Example",
      "action": "Run a writable signal operation and inspect the counter, object, array, employee count or demo login flag.",
      "expected": "Signal value changes immediately, and Angular updates the corresponding displayed value or list.",
      "explanation": "Signals — Employee Example. This is the topic and Lab 13 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "signal() reads, set() replaces, update() transforms.",
      "snippet": "employees =\n\nsignal([]);"
    },
    "lab-14": {
      "number": 14,
      "focus": "Login State Example",
      "action": "Run a writable signal operation and inspect the counter, object, array, employee count or demo login flag.",
      "expected": "Signal value changes immediately, and Angular updates the corresponding displayed value or list.",
      "explanation": "Signals — Login State Example. This is the topic and Lab 14 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "signal() reads, set() replaces, update() transforms.",
      "snippet": "isLoggedIn =\n\nsignal(false);"
    }
  },
  "computed-signals": {
    "lab-1": {
      "number": 1,
      "focus": "What Is Computed Signal?",
      "action": "Adjust source signal values and watch the readonly computed totals, names, counts and percentages recalculate.",
      "expected": "The computed output changes when its source signal changes, without calling set() on a computed signal.",
      "explanation": "Computed Signals — What Is Computed Signal?. This is the topic and Lab 1 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Computed = Excel formula: change inputs, result recalculates.",
      "snippet": "import {\n\nsignal,\n\ncomputed\n\n}\nfrom '@angular/core';"
    },
    "lab-2": {
      "number": 2,
      "focus": "What Is Computed Signal?",
      "action": "Adjust source signal values and watch the readonly computed totals, names, counts and percentages recalculate.",
      "expected": "The computed output changes when its source signal changes, without calling set() on a computed signal.",
      "explanation": "Computed Signals — What Is Computed Signal?. This is the topic and Lab 2 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Computed = Excel formula: change inputs, result recalculates.",
      "snippet": "price =\n\nsignal(100);\n\ntotal =\n\ncomputed(\n\n() =>\n\nprice()\n\n);"
    },
    "lab-3": {
      "number": 3,
      "focus": "Reading Computed Signal",
      "action": "Adjust source signal values and watch the readonly computed totals, names, counts and percentages recalculate.",
      "expected": "The computed output changes when its source signal changes, without calling set() on a computed signal.",
      "explanation": "Computed Signals — Reading Computed Signal. This is the topic and Lab 3 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Computed = Excel formula: change inputs, result recalculates.",
      "snippet": "total()"
    },
    "lab-4": {
      "number": 4,
      "focus": "Automatic Recalculation",
      "action": "Adjust source signal values and watch the readonly computed totals, names, counts and percentages recalculate.",
      "expected": "The computed output changes when its source signal changes, without calling set() on a computed signal.",
      "explanation": "Computed Signals — Automatic Recalculation. This is the topic and Lab 4 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Computed = Excel formula: change inputs, result recalculates.",
      "snippet": "price.set(500);"
    },
    "lab-5": {
      "number": 5,
      "focus": "Multiple Signal Dependencies",
      "action": "Adjust source signal values and watch the readonly computed totals, names, counts and percentages recalculate.",
      "expected": "The computed output changes when its source signal changes, without calling set() on a computed signal.",
      "explanation": "Computed Signals — Multiple Signal Dependencies. This is the topic and Lab 5 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Computed = Excel formula: change inputs, result recalculates.",
      "snippet": "price =\n\nsignal(100);\n\nquantity =\n\nsignal(5);"
    },
    "lab-6": {
      "number": 6,
      "focus": "Multiple Signal Dependencies",
      "action": "Adjust source signal values and watch the readonly computed totals, names, counts and percentages recalculate.",
      "expected": "The computed output changes when its source signal changes, without calling set() on a computed signal.",
      "explanation": "Computed Signals — Multiple Signal Dependencies. This is the topic and Lab 6 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Computed = Excel formula: change inputs, result recalculates.",
      "snippet": "total =\n\ncomputed(\n\n() =>\n\nprice() *\n\nquantity()\n\n);"
    },
    "lab-7": {
      "number": 7,
      "focus": "Update Dependency",
      "action": "Adjust source signal values and watch the readonly computed totals, names, counts and percentages recalculate.",
      "expected": "The computed output changes when its source signal changes, without calling set() on a computed signal.",
      "explanation": "Computed Signals — Update Dependency. This is the topic and Lab 7 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Computed = Excel formula: change inputs, result recalculates.",
      "snippet": "quantity.set(10);"
    },
    "lab-8": {
      "number": 8,
      "focus": "Shopping Cart Example",
      "action": "Adjust source signal values and watch the readonly computed totals, names, counts and percentages recalculate.",
      "expected": "The computed output changes when its source signal changes, without calling set() on a computed signal.",
      "explanation": "Computed Signals — Shopping Cart Example. This is the topic and Lab 8 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Computed = Excel formula: change inputs, result recalculates.",
      "snippet": "itemPrice =\n\nsignal(200);\n\nquantity =\n\nsignal(3);\n\ncartTotal =\n\ncomputed(\n\n() =>\n\nitemPrice() *\n\nquantity()\n\n);"
    },
    "lab-9": {
      "number": 9,
      "focus": "Full Name Example",
      "action": "Adjust source signal values and watch the readonly computed totals, names, counts and percentages recalculate.",
      "expected": "The computed output changes when its source signal changes, without calling set() on a computed signal.",
      "explanation": "Computed Signals — Full Name Example. This is the topic and Lab 9 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Computed = Excel formula: change inputs, result recalculates.",
      "snippet": "firstName =\n\nsignal('Deepak');\n\nlastName =\n\nsignal('Kumar');"
    },
    "lab-10": {
      "number": 10,
      "focus": "Full Name Example",
      "action": "Adjust source signal values and watch the readonly computed totals, names, counts and percentages recalculate.",
      "expected": "The computed output changes when its source signal changes, without calling set() on a computed signal.",
      "explanation": "Computed Signals — Full Name Example. This is the topic and Lab 10 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Computed = Excel formula: change inputs, result recalculates.",
      "snippet": "fullName =\n\ncomputed(\n\n() =>\n\n`${firstName()}\n ${lastName()}`\n\n);"
    },
    "lab-11": {
      "number": 11,
      "focus": "Dashboard KPI Example",
      "action": "Adjust source signal values and watch the readonly computed totals, names, counts and percentages recalculate.",
      "expected": "The computed output changes when its source signal changes, without calling set() on a computed signal.",
      "explanation": "Computed Signals — Dashboard KPI Example. This is the topic and Lab 11 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Computed = Excel formula: change inputs, result recalculates.",
      "snippet": "totalComplaints =\n\nsignal(100);\n\nclosedComplaints =\n\nsignal(80);"
    },
    "lab-12": {
      "number": 12,
      "focus": "Dashboard KPI Example",
      "action": "Adjust source signal values and watch the readonly computed totals, names, counts and percentages recalculate.",
      "expected": "The computed output changes when its source signal changes, without calling set() on a computed signal.",
      "explanation": "Computed Signals — Dashboard KPI Example. This is the topic and Lab 12 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Computed = Excel formula: change inputs, result recalculates.",
      "snippet": "pendingComplaints =\n\ncomputed(\n\n() =>\n\ntotalComplaints() -\n\nclosedComplaints()\n\n);"
    },
    "lab-13": {
      "number": 13,
      "focus": "Percentage Calculation",
      "action": "Adjust source signal values and watch the readonly computed totals, names, counts and percentages recalculate.",
      "expected": "The computed output changes when its source signal changes, without calling set() on a computed signal.",
      "explanation": "Computed Signals — Percentage Calculation. This is the topic and Lab 13 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Computed = Excel formula: change inputs, result recalculates.",
      "snippet": "completionPercentage =\n\ncomputed(\n\n() =>\n\n(\n\nclosedComplaints()\n\n/\n\ntotalComplaints()\n\n)\n\n* 100\n\n);"
    },
    "lab-14": {
      "number": 14,
      "focus": "Employee Dashboard Example",
      "action": "Adjust source signal values and watch the readonly computed totals, names, counts and percentages recalculate.",
      "expected": "The computed output changes when its source signal changes, without calling set() on a computed signal.",
      "explanation": "Computed Signals — Employee Dashboard Example. This is the topic and Lab 14 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Computed = Excel formula: change inputs, result recalculates.",
      "snippet": "employees =\n\nsignal(100);\n\nactiveEmployees =\n\nsignal(85);"
    },
    "lab-15": {
      "number": 15,
      "focus": "Banking Example",
      "action": "Adjust source signal values and watch the readonly computed totals, names, counts and percentages recalculate.",
      "expected": "The computed output changes when its source signal changes, without calling set() on a computed signal.",
      "explanation": "Computed Signals — Banking Example. This is the topic and Lab 15 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Computed = Excel formula: change inputs, result recalculates.",
      "snippet": "balance =\n\nsignal(50000);\n\nwithdrawal =\n\nsignal(5000);"
    },
    "lab-16": {
      "number": 16,
      "focus": "Signal Chain",
      "action": "Adjust source signal values and watch the readonly computed totals, names, counts and percentages recalculate.",
      "expected": "The computed output changes when its source signal changes, without calling set() on a computed signal.",
      "explanation": "Computed Signals — Signal Chain. This is the topic and Lab 16 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Computed = Excel formula: change inputs, result recalculates.",
      "snippet": "price =\n\nsignal(100);\n\nquantity =\n\nsignal(5);"
    },
    "lab-17": {
      "number": 17,
      "focus": "Computed Signals Are Read Only",
      "action": "Adjust source signal values and watch the readonly computed totals, names, counts and percentages recalculate.",
      "expected": "The computed output changes when its source signal changes, without calling set() on a computed signal.",
      "explanation": "Computed Signals — Computed Signals Are Read Only. This is the topic and Lab 17 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Computed = Excel formula: change inputs, result recalculates.",
      "snippet": "total.set(1000);"
    },
    "lab-18": {
      "number": 18,
      "focus": "Enterprise Dashboard Example",
      "action": "Adjust source signal values and watch the readonly computed totals, names, counts and percentages recalculate.",
      "expected": "The computed output changes when its source signal changes, without calling set() on a computed signal.",
      "explanation": "Computed Signals — Enterprise Dashboard Example. This is the topic and Lab 18 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Computed = Excel formula: change inputs, result recalculates.",
      "snippet": "openTickets =\n\nsignal(25);\n\nclosedTickets =\n\nsignal(75);"
    }
  },
  "effects": {
    "lab-1": {
      "number": 1,
      "focus": "What Is An Effect?",
      "action": "Change a tracked signal and inspect how Angular effect() runs automatically. Use fictional state only.",
      "expected": "Effect run count and observed message respond to signal changes; the demo never sends data to a real API.",
      "explanation": "Effects — What Is An Effect?. This is the topic and Lab 1 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "effect() observes signals and performs side effects; computed() derives values.",
      "snippet": "import {\n\nsignal,\n\neffect\n\n}\nfrom '@angular/core';\n\ncount =\n\nsignal(0);"
    },
    "lab-2": {
      "number": 2,
      "focus": "What Is An Effect?",
      "action": "Change a tracked signal and inspect how Angular effect() runs automatically. Use fictional state only.",
      "expected": "Effect run count and observed message respond to signal changes; the demo never sends data to a real API.",
      "explanation": "Effects — What Is An Effect?. This is the topic and Lab 2 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "effect() observes signals and performs side effects; computed() derives values.",
      "snippet": "constructor(){\n\neffect(\n\n() => {\n\nconsole.log(\n\nthis.count()\n\n);\n\n}\n\n);\n\n}"
    },
    "lab-3": {
      "number": 3,
      "focus": "Signal Update",
      "action": "Change a tracked signal and inspect how Angular effect() runs automatically. Use fictional state only.",
      "expected": "Effect run count and observed message respond to signal changes; the demo never sends data to a real API.",
      "explanation": "Effects — Signal Update. This is the topic and Lab 3 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "effect() observes signals and performs side effects; computed() derives values.",
      "snippet": "this.count.set(1);"
    },
    "lab-4": {
      "number": 4,
      "focus": "Counter Example",
      "action": "Change a tracked signal and inspect how Angular effect() runs automatically. Use fictional state only.",
      "expected": "Effect run count and observed message respond to signal changes; the demo never sends data to a real API.",
      "explanation": "Effects — Counter Example. This is the topic and Lab 4 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "effect() observes signals and performs side effects; computed() derives values.",
      "snippet": "count =\n\nsignal(0);\n\nconstructor(){\n\neffect(\n\n() => {\n\nconsole.log(\n\n'Count Changed',\n\nthis.count()\n\n);\n\n}\n\n);\n\n}"
    },
    "lab-5": {
      "number": 5,
      "focus": "Multiple Signal Dependencies",
      "action": "Change a tracked signal and inspect how Angular effect() runs automatically. Use fictional state only.",
      "expected": "Effect run count and observed message respond to signal changes; the demo never sends data to a real API.",
      "explanation": "Effects — Multiple Signal Dependencies. This is the topic and Lab 5 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "effect() observes signals and performs side effects; computed() derives values.",
      "snippet": "firstName =\n\nsignal('Deepak');\n\nlastName =\n\nsignal('Kumar');"
    },
    "lab-6": {
      "number": 6,
      "focus": "Multiple Signal Dependencies",
      "action": "Change a tracked signal and inspect how Angular effect() runs automatically. Use fictional state only.",
      "expected": "Effect run count and observed message respond to signal changes; the demo never sends data to a real API.",
      "explanation": "Effects — Multiple Signal Dependencies. This is the topic and Lab 6 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "effect() observes signals and performs side effects; computed() derives values.",
      "snippet": "constructor(){\n\neffect(\n\n() => {\n\nconsole.log(\n\nthis.firstName(),\n\nthis.lastName()\n\n);\n\n}\n\n);\n\n}"
    },
    "lab-7": {
      "number": 7,
      "focus": "Logging Example",
      "action": "Change a tracked signal and inspect how Angular effect() runs automatically. Use fictional state only.",
      "expected": "Effect run count and observed message respond to signal changes; the demo never sends data to a real API.",
      "explanation": "Effects — Logging Example. This is the topic and Lab 7 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "effect() observes signals and performs side effects; computed() derives values.",
      "snippet": "constructor(){\n\neffect(\n\n() => {\n\nconsole.log(\n\n'User State Changed',\n\nthis.user()\n\n);\n\n}\n\n);\n\n}"
    },
    "lab-8": {
      "number": 8,
      "focus": "Local Storage Example",
      "action": "Change a tracked signal and inspect how Angular effect() runs automatically. Use fictional state only.",
      "expected": "Effect run count and observed message respond to signal changes; the demo never sends data to a real API.",
      "explanation": "Effects — Local Storage Example. This is the topic and Lab 8 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "effect() observes signals and performs side effects; computed() derives values.",
      "snippet": "userName =\n\nsignal('Deepak');"
    },
    "lab-9": {
      "number": 9,
      "focus": "Theme Preference Example",
      "action": "Change a tracked signal and inspect how Angular effect() runs automatically. Use fictional state only.",
      "expected": "Effect run count and observed message respond to signal changes; the demo never sends data to a real API.",
      "explanation": "Effects — Theme Preference Example. This is the topic and Lab 9 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "effect() observes signals and performs side effects; computed() derives values.",
      "snippet": "theme =\n\nsignal('light');"
    },
    "lab-10": {
      "number": 10,
      "focus": "Society Complaint Example",
      "action": "Change a tracked signal and inspect how Angular effect() runs automatically. Use fictional state only.",
      "expected": "Effect run count and observed message respond to signal changes; the demo never sends data to a real API.",
      "explanation": "Effects — Society Complaint Example. This is the topic and Lab 10 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "effect() observes signals and performs side effects; computed() derives values.",
      "snippet": "complaints =\n\nsignal([]);"
    },
    "lab-11": {
      "number": 11,
      "focus": "Employee Dashboard Example",
      "action": "Change a tracked signal and inspect how Angular effect() runs automatically. Use fictional state only.",
      "expected": "Effect run count and observed message respond to signal changes; the demo never sends data to a real API.",
      "explanation": "Effects — Employee Dashboard Example. This is the topic and Lab 11 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "effect() observes signals and performs side effects; computed() derives values.",
      "snippet": "employees =\n\nsignal([]);"
    },
    "lab-12": {
      "number": 12,
      "focus": "Analytics Tracking",
      "action": "Change a tracked signal and inspect how Angular effect() runs automatically. Use fictional state only.",
      "expected": "Effect run count and observed message respond to signal changes; the demo never sends data to a real API.",
      "explanation": "Effects — Analytics Tracking. This is the topic and Lab 12 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "effect() observes signals and performs side effects; computed() derives values.",
      "snippet": "effect(\n\n() => {\n\nconsole.log(\n\n'User Viewed Dashboard'\n\n);\n\n}\n);"
    },
    "lab-13": {
      "number": 13,
      "focus": "API Trigger Example",
      "action": "Change a tracked signal and inspect how Angular effect() runs automatically. Use fictional state only.",
      "expected": "Effect run count and observed message respond to signal changes; the demo never sends data to a real API.",
      "explanation": "Effects — API Trigger Example. This is the topic and Lab 13 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "effect() observes signals and performs side effects; computed() derives values.",
      "snippet": "selectedDepartment =\n\nsignal('IT');"
    },
    "lab-14": {
      "number": 14,
      "focus": "Notification Example",
      "action": "Change a tracked signal and inspect how Angular effect() runs automatically. Use fictional state only.",
      "expected": "Effect run count and observed message respond to signal changes; the demo never sends data to a real API.",
      "explanation": "Effects — Notification Example. This is the topic and Lab 14 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "effect() observes signals and performs side effects; computed() derives values.",
      "snippet": "notificationCount =\n\nsignal(0);"
    },
    "lab-15": {
      "number": 15,
      "focus": "Shopping Cart Example",
      "action": "Change a tracked signal and inspect how Angular effect() runs automatically. Use fictional state only.",
      "expected": "Effect run count and observed message respond to signal changes; the demo never sends data to a real API.",
      "explanation": "Effects — Shopping Cart Example. This is the topic and Lab 15 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "effect() observes signals and performs side effects; computed() derives values.",
      "snippet": "cartItems =\n\nsignal([]);"
    }
  },
  "angular-state-management-basics": {
    "lab-1": {
      "number": 1,
      "focus": "Component State",
      "action": "Update or load the root TrainingStore and watch its computed selectors, BehaviorSubject and filter update the view.",
      "expected": "Shared store state and selectors update; the loading/error/filtered data are visible.",
      "explanation": "Angular State Management Basics — Component State. This is the topic and Lab 1 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Single source of truth: one store, many consumers.",
      "snippet": "userName =\n\nsignal(\n'Deepak'\n);"
    },
    "lab-2": {
      "number": 2,
      "focus": "Signal State",
      "action": "Update or load the root TrainingStore and watch its computed selectors, BehaviorSubject and filter update the view.",
      "expected": "Shared store state and selectors update; the loading/error/filtered data are visible.",
      "explanation": "Angular State Management Basics — Signal State. This is the topic and Lab 2 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Single source of truth: one store, many consumers.",
      "snippet": "import {\n\nsignal\n\n}\nfrom '@angular/core';\n\nexport class UserStore{\n\nuser =\n\nsignal(null);\n\n}"
    },
    "lab-3": {
      "number": 3,
      "focus": "Service Based State",
      "action": "Update or load the root TrainingStore and watch its computed selectors, BehaviorSubject and filter update the view.",
      "expected": "Shared store state and selectors update; the loading/error/filtered data are visible.",
      "explanation": "Angular State Management Basics — Service Based State. This is the topic and Lab 3 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Single source of truth: one store, many consumers.",
      "snippet": "@Injectable({\n\nprovidedIn:'root'\n\n})\n\nexport class UserStore{\n\nuser =\n\nsignal(null);\n\n}"
    },
    "lab-4": {
      "number": 4,
      "focus": "BehaviorSubject State",
      "action": "Update or load the root TrainingStore and watch its computed selectors, BehaviorSubject and filter update the view.",
      "expected": "Shared store state and selectors update; the loading/error/filtered data are visible.",
      "explanation": "Angular State Management Basics — BehaviorSubject State. This is the topic and Lab 4 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Single source of truth: one store, many consumers.",
      "snippet": "private user$ =\n\nnew BehaviorSubject(\n\nnull\n\n);"
    },
    "lab-5": {
      "number": 5,
      "focus": "Society Complaint Example",
      "action": "Update or load the root TrainingStore and watch its computed selectors, BehaviorSubject and filter update the view.",
      "expected": "Shared store state and selectors update; the loading/error/filtered data are visible.",
      "explanation": "Angular State Management Basics — Society Complaint Example. This is the topic and Lab 5 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Single source of truth: one store, many consumers.",
      "snippet": "@Injectable({\n\nprovidedIn:'root'\n\n})\n\nexport class ComplaintStore{\n\ncomplaints =\n\nsignal([]);\n\n}"
    },
    "lab-6": {
      "number": 6,
      "focus": "Employee Example",
      "action": "Update or load the root TrainingStore and watch its computed selectors, BehaviorSubject and filter update the view.",
      "expected": "Shared store state and selectors update; the loading/error/filtered data are visible.",
      "explanation": "Angular State Management Basics — Employee Example. This is the topic and Lab 6 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Single source of truth: one store, many consumers.",
      "snippet": "@Injectable({\n\nprovidedIn:'root'\n\n})\n\nexport class EmployeeStore{\n\nemployees =\n\nsignal([]);\n\n}"
    },
    "lab-7": {
      "number": 7,
      "focus": "Authentication State",
      "action": "Update or load the root TrainingStore and watch its computed selectors, BehaviorSubject and filter update the view.",
      "expected": "Shared store state and selectors update; the loading/error/filtered data are visible.",
      "explanation": "Angular State Management Basics — Authentication State. This is the topic and Lab 7 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Single source of truth: one store, many consumers.",
      "snippet": "@Injectable({\n\nprovidedIn:'root'\n\n})\n\nexport class AuthStore{\n\nisLoggedIn =\n\nsignal(false);\n\nuser =\n\nsignal(null);\n\n}"
    },
    "lab-8": {
      "number": 8,
      "focus": "Shopping Cart State",
      "action": "Update or load the root TrainingStore and watch its computed selectors, BehaviorSubject and filter update the view.",
      "expected": "Shared store state and selectors update; the loading/error/filtered data are visible.",
      "explanation": "Angular State Management Basics — Shopping Cart State. This is the topic and Lab 8 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Single source of truth: one store, many consumers.",
      "snippet": "cartItems =\n\nsignal([]);"
    },
    "lab-9": {
      "number": 9,
      "focus": "Dashboard State",
      "action": "Update or load the root TrainingStore and watch its computed selectors, BehaviorSubject and filter update the view.",
      "expected": "Shared store state and selectors update; the loading/error/filtered data are visible.",
      "explanation": "Angular State Management Basics — Dashboard State. This is the topic and Lab 9 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Single source of truth: one store, many consumers.",
      "snippet": "totalComplaints =\n\nsignal(100);\n\nclosedComplaints =\n\nsignal(80);"
    },
    "lab-10": {
      "number": 10,
      "focus": "Enterprise Store Pattern",
      "action": "Update or load the root TrainingStore and watch its computed selectors, BehaviorSubject and filter update the view.",
      "expected": "Shared store state and selectors update; the loading/error/filtered data are visible.",
      "explanation": "Angular State Management Basics — Enterprise Store Pattern. This is the topic and Lab 10 from the published Techlambda Angular syllabus. Use the corresponding live engine and inspect the output.",
      "hook": "Single source of truth: one store, many consumers.",
      "snippet": "@Injectable({\n\nprovidedIn:'root'\n\n})\n\nexport class ComplaintStore{\n\ncomplaints =\n\nsignal([]);\n\nloading =\n\nsignal(false);\n\nerror =\n\nsignal(null);\n\n}"
    }
  }
};
