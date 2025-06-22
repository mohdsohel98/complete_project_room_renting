using RoomRenting.DTOs;
using RoomRenting.Models;

namespace RoomRenting.Services
{
    public interface IRoomPostServices
    {
        Task<List<RoomPostModel>> GetAllRoomsAsync();
        Task<RoomPostModel> AddRoomAsync(RoomPostDto roomDto);
        Task<RoomPostModel> DeleteRoomAsync(int id);
    }
}
