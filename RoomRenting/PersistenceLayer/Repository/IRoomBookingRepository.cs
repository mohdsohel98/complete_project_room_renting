using PersistenceLayer.Models;

namespace PersistenceLayer.Repository
{
    public interface  IRoomBookingRepository
    {
        Task<RoomBookingModel> AddRoomBookingAsync(RoomBookingModel Booking);
        Task<List<RoomBookingModel>> GetAllBookingAsync();

         Task<List<RoomBookingModel>>GetBookingByUserIdAsync(int userId);
    }
}