using Microsoft.EntityFrameworkCore;
using RoomRenting.Data;
using RoomRenting.Models;

namespace RoomRenting.Repository
{
    public class RoomPostRepository: IRoomPostRepository
    {
        public readonly AppDbContext _context;

        public RoomPostRepository(AppDbContext context)
        {
            _context = context;
        }
       public async Task<List<RoomPostModel>> GetAllRoomsAsync()
        {
            return await _context.Rooms.ToListAsync();
        }

         public async Task<RoomPostModel> AddRoomAsync(RoomPostModel room)
        {
            _context.Rooms.Add(room);
            await _context.SaveChangesAsync();
            return room;
        }

         public async Task<RoomPostModel> DeleteRoomAsync(int id)
        {
            var room = await _context.Rooms.FindAsync(id);
            if (room == null) return null;
        
            _context.Rooms.Remove(room);
            await _context.SaveChangesAsync();
            return room;
        }
     }
}
