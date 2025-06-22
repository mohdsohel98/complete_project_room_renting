using PersistenceLayer.Models;

namespace BusineesLayer.Services
{
    public  interface IAdminServices
    {

        public Task<List<AdminModel>> GetAdminData();
         
          
    }
}
