using RoomRenting.DTOs;
using RoomRenting.Models;

namespace RoomRenting.Services
{
    public interface IUserService
    {
        Task<IEnumerable<User>> GetAllUserAsync();
        Task<User> GetUserByIdAsync(int id); 
        Task<User> AddUserAsync(UserRegisterDto dto); 
        Task<bool> UpdateUserAsync(int id, UserRegisterDto dto);
        Task<bool> DeleteUserAsync(int id);
    }
}
