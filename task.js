----------------
   Ng - Zorro - antd
----------------
   npm i ng - zorro - antd


Add in Style array:
"styles": [
   "node_modules/ng-zorro-antd/src/ng-zorro-antd.min.css",
   "node_modules/ng-zorro-antd/resizable/style/index.min.css",
   "node_modules/ng-zorro-antd/code-editor/style/index.min.css",
   "node_modules/ng-zorro-antd/graph/style/index.min.css"
]

// ---- moment.js DATE Difference

// Get the current date
var currentDate = moment();

// Get the created date (replace "2023-07-28T12:20:29.587" with your actual created date)
var createdDate = moment("2023-07-28T12:20:29.587");

// Calculate the difference between the current date and the created date in days
var differenceInDays = currentDate.diff(createdDate, 'days');

// Define the thresholds for grouping
var thresholds = [
    { threshold: 365, label: 'year' },
    { threshold: 30, label: 'month' }
];

// Find the appropriate group
var group = thresholds.find(t => differenceInDays >= t.threshold);

// Format the difference
var formattedDifference = group ? Math.floor(differenceInDays / group.threshold) + ' ' + group.label + (Math.floor(differenceInDays / group.threshold) > 1 ? 's' : '') : differenceInDays + ' days';

// Output the formatted difference
console.log(formattedDifference);

// ---- moment.js DATE Difference end

//#  12-Jun-24
 // Get Input field value using SweetAlert2
 const { value: newMenuName } = await Swal.fire({
     title: "Enter new Menu",
     input: "text",
     inputLabel: "Menu Name",
     inputValue: "",
     showCancelButton: true,
     inputValidator: (value) => {
         if (!value) {
             return "You need to write something!";
         }
     }
 });
