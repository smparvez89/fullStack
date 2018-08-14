using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TestAppFullStack.BAL;
using TestAppFullStack.Models;

namespace WebApplication1.Controllers
{
    public class HomeController : Controller
    {
        private readonly IProcessLogic processLogic;
        public HomeController(IProcessLogic processLogic)
        {
            this.processLogic = processLogic;
        }
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        [HttpPost]
        public string GetSecuredData(string userName, string password)
        {
            string securedInfo = "";
            if ((userName == "admin") && (password == "admin"))
                securedInfo = "Hello admin, your secured information is .......";
            else
                securedInfo = "Wrong username or password, please retry.";
            return securedInfo;

        }

        [HttpPost]
        public ActionResult GetEmpData(int empID)
        {
            var empList = processLogic.GetEmpData(empID);
            return Json(empList, JsonRequestBehavior.AllowGet);
        }
    }
}