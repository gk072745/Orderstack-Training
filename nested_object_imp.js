const company = [
    {
        id: 1,
        name: "John Doe",
        role: "CEO",
    },
    {
        id: 2,
        name: "Alice Johnson",
        role: "Manager",
        parent: 1
    },
    {
        id: 3,
        name: "Bob Smith",
        role: "Team Lead",
        parent: 2
    },
    {
        id: 4,
        name: "Charlie Brown",
        role: "Developer",
        parent: 3
    },
    {
        id: 5,
        name: "David Lee",
        role: "Developer",
        parent: 3
    },
    {
        id: 6,
        name: "Charlie Brown",
        role: "Jr. Developer",
        parent: 5
    },
    {
        id: 7,
        name: "David Lee",
        role: "Jr. Developer",
        parent: 5
    },
];



const rootEmployee = company.find(({ parent }) => parent === undefined)

const createEmpHierarchy = (company, id) => {

    const subordinates =
        company
            .filter(({ parent }) => parent === id)
            .map((emp) => {
                return { ...emp, subordinates: createEmpHierarchy(company, emp.id) }
            })

    return subordinates

}

const employeeHierarchy = { ...rootEmployee, subordinates: createEmpHierarchy(company, rootEmployee.id) }


console.log(employeeHierarchy)