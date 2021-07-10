
let employees=getAllEmployees()
console.log(employees)

let displayEmployees=(employees)=>
{
	document.querySelector('#count').innerText=employees.length;
	let tableBody=document.querySelector('#table-body')

	let tableRows='';
	for(let employee of employees)
	{
		tableRows+=`<tr>
						<td>${employee.id}</td>
						<td>${employee.first_name}</td>
						<td>${employee.last_name}</td>
						<td>${employee.email}</td>
						<td>${employee.gender}</td>
						<td>${employee.country}</td>
					</tr> \n`
	}

	tableBody.innerHTML=tableRows
}

let allEmpButton=document.querySelector('#all-emp-btn')
allEmpButton.addEventListener('click',function()
{
	displayEmployees(employees);
})


let maleEmpButton=document.querySelector('#male-emp-btn')
maleEmpButton.addEventListener('click',function()
{
	let maleEmps=employees.filter((employee)=>
	{
		return employee.gender==='Male';
	})
	displayEmployees(maleEmps)
})

let femaleEmpButton=document.querySelector('#female-emp-btn')
femaleEmpButton.addEventListener('click',function()
{
	let femaleEmps=employees.filter((employee)=>
	{
		return employee.gender==='Female';
	})
	displayEmployees(femaleEmps)
})

//search box

let searchBox=document.querySelector('#emp-search');

searchBox.addEventListener('keyup',function()
{
	let textEntered=searchBox.value;

	if(textEntered!='')
	{
		let filteredEmps=employees.filter((employee)=>
		{
			return employee.first_name.toLowerCase().trim().startsWith(textEntered.toLowerCase());
		});
		displayEmployees(filteredEmps);
	}
	else
	{
		displayEmployees([]);
	}
})