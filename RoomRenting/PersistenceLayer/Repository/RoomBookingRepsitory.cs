using Microsoft.EntityFrameworkCore;
using PersistenceLayer.Data;
using PersistenceLayer.Models;

namespace PersistenceLayer.Repository
{
    public class RoomBookingRepository: IRoomBookingRepository
    {
        private   readonly AppDbContext _Context;

        public RoomBookingRepository(AppDbContext context)
        {
            _Context = context;
        }

         
        public async Task<RoomBookingModel> AddRoomBookingAsync(RoomBookingModel Booking)
        {
            _Context.Bookings.Add(Booking);
            await _Context.SaveChangesAsync();
            return Booking;
        }

        public async Task<List<RoomBookingModel>> GetAllBookingAsync()
        {
            return await _Context.Bookings.ToListAsync();
        }

        public async Task<List<RoomBookingModel>> GetBookingByUserIdAsync(int userId)
        {
            return await _Context.Bookings
                //.Include(b=>b.Room)
               .Where(b => b.UserId == userId)
               .ToListAsync();
        } 

       
    }
}
