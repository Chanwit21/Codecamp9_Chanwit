// ให้รับข้อมูลเป็นชื่อพนักงาน
// หากมีพนักงานที่ชื่อตรงกับ object ด้านล่างให้ log ข้อความ เช่น “Name: john, salary: 1000, address: Ratchathewi, Bangkok” หากไม่มีชื่อให้ log ข้อความ Not Found

const employees = {
  john: {
    salary: 1000,
    address: { district: "Ratchathewi", province: "Bangkok" },
  },
  peter: {
    salary: 1500,
    address: { district: "Pathumwan", province: "Bangkok" },
  },
  mike: {
    salary: 800,
    address: { district: "Pakkret", province: "Nonthaburi" },
  },
  sarah: {
    salary: 2200,
    address: { district: "Sriraja", province: "Chonburi" },
  },
};

const staffName = prompt("Enter Name");

if (staffName in employees) {
    console.log(
        `Name : ${staffName},  salary : ${employees[staffName].salary}, address: ${employees[staffName].address.district}, ${employees[staffName].address.province} `
    );
} else {
    console.log(`Your Staffname Not in Employees`);
}