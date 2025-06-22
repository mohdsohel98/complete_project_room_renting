
    using PersistenceLayer.Models;
namespace PersistenceLayer.Repository
{
    public interface IUserRepository
    {
        Task<IEnumerable<User>> GetAllAsync();
        Task<User> GetByIdAsync(int id);

        Task<User> AddAsync(User user);

        Task<User> UpdateAsync(User user);

        Task<User> DeleteAsync(int id);

        Task<User?> GetFullProfileAsync(int userId);

    }
}
