using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TestAppFullStack.Models;

namespace TestAppFullStack.DAL
{
    public class ProcessRepository: IProcessRepository
    {
        public List<Employee> GetEmpData(int empID)
        {
            List<Employee> lstEmployee = new List<Employee>();
            lstEmployee.Add(new Employee { EmpID = 1, FirstName = "Sayed", LastName = "Parvez", Contact = 989115222 });
            lstEmployee.Add(new Employee { EmpID = 2, FirstName = "Pankaj", LastName = "Kumar", Contact = 779115222 });
            lstEmployee.Add(new Employee { EmpID = 3, FirstName = "Rashmi", LastName = "Johari", Contact = 779115222 });
            return lstEmployee;
        }
    }
}