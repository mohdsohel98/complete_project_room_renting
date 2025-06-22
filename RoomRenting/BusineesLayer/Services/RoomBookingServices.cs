using BusineesLayer.DTOs;
using PersistenceLayer.Models;
using PersistenceLayer.Repository;

namespace BusineesLayer.Services
{
    public class RoomBookingServices: IRoomBookingServices
    {
        private readonly IRoomBookingRepository _roomBookingRepo;

        public  RoomBookingServices( IRoomBookingRepository roomBookingRepository )
        {
            _roomBookingRepo = roomBookingRepository;
        }
        public async Task<RoomBookingDto> AddRoomBookingAsync(RoomBookingDto BookingDto , int userId)

        {
              var RoomBooking = new RoomBookingModel
              {
                   RoomId = BookingDto.RoomId,
                  UserId = userId,
                  name =  BookingDto.Name,
                   Email = BookingDto.Email,
                   Phone = BookingDto.Phone,
                   Preference = BookingDto.Preference,
                   Description = BookingDto.Description,
              };

            var RoomBooking2 = new RoomBookingDto
            {
                RoomId = BookingDto.RoomId,
                UserId = userId,
                Name = BookingDto.Name,
                Email = BookingDto.Email,
                Phone = BookingDto.Phone,
                Preference = BookingDto.Preference,
                
                Description = BookingDto.Description,
            };

           await   _roomBookingRepo.AddRoomBookingAsync(RoomBooking);
             return RoomBooking2;
        }


        public async Task<List<RoomBookingDto>> GetAllBookingAsync()
        {
            var allBooking = await _roomBookingRepo.GetAllBookingAsync();

            return allBooking.Select(b => new RoomBookingDto
            {
                RoomId = b.RoomId,
                Name = b.name,
                UserId = b.UserId,
                Email = b.Email,
                Phone = b.Phone,
                Preference = b.Preference,
                Description = b.Description
            }).ToList();
        }


    }
}
