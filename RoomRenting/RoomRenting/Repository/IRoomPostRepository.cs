using RoomRenting.Models;

namespace RoomRenting.Repository
{
    public  interface  IRoomPostRepository
    {
        Task <List<RoomPostModel>> GetAllRoomsAsync();
        Task<RoomPostModel> AddRoomAsync(RoomPostModel room);
        Task<RoomPostModel> DeleteRoomAsync(int id);
    }
}
