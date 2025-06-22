
using PersistenceLayer.Models;
namespace PersistenceLayer.Repository
 
{
    public interface IRoomPostRepository
    {
        Task<List<RoomPostModel>> GetAllRoomsAsync();
        Task<RoomPostModel> AddRoomAsync(RoomPostModel room);
        Task<RoomPostModel> DeleteRoomAsync(int id);

        Task<List<RoomPostModel>> GetRoomByUserIdAsync(int  userId);

        //Task<List<Room>> GetRoomsByOwnerIdAsync(int ownerId);
    }
}
