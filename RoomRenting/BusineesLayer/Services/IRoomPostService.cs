
using PersistenceLayer.Models;
using BusineesLayer.DTOs;
namespace BusineesLayer.Services

   
{
    public  interface  IRoomPostService
    {
        Task<List<RoomPostModel>> GetAllRoomsAsync();
        Task<RoomPostModel> AddRoomAsync(RoomPostDto dto, int userId);
          //Task<List<RoomSummaryDto>> GetRoomByUserIdAsync(int userId);
        Task<RoomPostModel> DeleteRoomAsync(int id);
    }
}