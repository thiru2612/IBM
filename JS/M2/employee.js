const employees=[
    {id:"1",name:"john",Salary:"100000",Role:"HR"},
    {id:"2",name:"wick",Salary:"300000",Role:"CEO"}
]
const displayemp=()=>{
    // Function to display all employees
const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.Role} - $${employee.Salary}</p>`).join('');
document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

function Hremp(){
    const HR=employees.filter((employee)=> employee.Role==="HR");
    const eHR=HR.map((employee,ind)=>`<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.Role} - $${employee.Salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML =eHR;

}