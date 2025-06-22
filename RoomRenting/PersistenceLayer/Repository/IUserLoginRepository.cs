
using PersistenceLayer.Models;
namespace PersistenceLayer.Repository

{
    public interface IUserLoginRepository
    {
        Task<User> GetUserEmailAsync(string email);
    }
}
