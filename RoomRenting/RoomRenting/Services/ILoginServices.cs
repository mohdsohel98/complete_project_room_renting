using RoomRenting.DTOs;
using RoomRenting.Models;

namespace RoomRenting.Services
{
    public interface ILoginServices
    {
        Task<User> GetUserEmail(UserLogindto dto);
    }
}