using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TestAppFullStack.DAL;
using TestAppFullStack.Models;

namespace TestAppFullStack.BAL
{
    public class ProcessLogic : IProcessLogic
    {
        private readonly IProcessRepository processRepository;

        public ProcessLogic(IProcessRepository processRepository)
        {
            this.processRepository = processRepository;
        }

        public List<Employee> GetEmpData(int empID)
        {
            return processRepository.GetEmpData(empID);
        }
    }
}