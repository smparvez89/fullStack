using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TestAppFullStack.Models;

namespace TestAppFullStack.BAL
{
    public interface IProcessLogic
    {
        List<Employee> GetEmpData(int empID);
    }
}
