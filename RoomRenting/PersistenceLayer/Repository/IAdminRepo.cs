using PersistenceLayer.Models;

namespace PersistenceLayer.Repository
{
    public  interface IAdminRepo
    {
        public Task<AdminModel> GetAdminByEmailAsync(string  email);
    }
}
