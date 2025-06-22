using BusineesLayer.DTOs;

namespace BusineesLayer.Services
{
    public interface IRoomBookingServices
    {
        Task<RoomBookingDto> AddRoomBookingAsync(RoomBookingDto BookingDto , int userId);
        Task<List<RoomBookingDto>>  GetAllBookingAsync();
    }
}
