using RoomRenting.Models;

namespace RoomRenting.Repository
{
    public interface IUserLoginRepository
    {
        Task<User> GetUserEmailAsync(string email);
        
    }
}
