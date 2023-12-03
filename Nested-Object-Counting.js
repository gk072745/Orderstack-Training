const company = {
  id: 1,
  name: "John Doe",
  role: "CEO",
  subordinates: [
    {
      id: 2,
      name: "Alice Johnson",
      role: "Manager",
      subordinates: [
        {
          id: 3,
          name: "Bob Smith",
          role: "Team Lead",
          subordinates: [
            {
              id: 4,
              name: "Charlie Brown",
              role: "Developer",
              subordinates: [],
            },
            {
              id: 5,
              name: "David Lee",
              role: "Developer",
              subordinates: [],
            },
          ],
        },
        {
          id: 6,
          name: "Eve Taylor",
          role: "Team Lead",
          subordinates: [],
        },
      ],
    },
  ],
};
const countedEmp = {};

const countEmployeesByRole = ({ role, subordinates }) => {
  if (subordinates.length === 0) {
    return;
  }

  countedEmp[role] = (countedEmp[role] || 0) + 1;

  subordinates.forEach((subords) => {
    countEmployeesByRole(subords);
  });

  return countedEmp;
};

console.log(countEmployeesByRole(company));
