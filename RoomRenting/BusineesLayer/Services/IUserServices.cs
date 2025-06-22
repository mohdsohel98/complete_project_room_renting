
using PersistenceLayer.Models;
using BusineesLayer.DTOs;
namespace BusineesLayer.Services
{
    public interface  IUserServices
    {
        Task<IEnumerable<User>> GetAllUserAsync();
        Task<User> GetUserByIdAsync(int id);
        Task<User> AddUserAsync(UserRegisterDto dto);
        Task<bool> UpdateUserAsync(int id, UserRegisterDto dto);
        Task<bool> DeleteUserAsync(int id);
        Task<UserProfileDto<List<RoomBookingDto>>?> GetFullProfileAsync(int userId);
    }
}
