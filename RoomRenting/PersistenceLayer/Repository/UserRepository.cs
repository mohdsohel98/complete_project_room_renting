using PersistenceLayer.Repository;
using Microsoft.EntityFrameworkCore;
using PersistenceLayer.Data;
using PersistenceLayer.Models;


namespace PersistenceLayer.Repository
{

    public class UserRepository : IUserRepository
        
    {
        private readonly AppDbContext _context;
        public UserRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<User>> GetAllAsync()
        {
            return await _context.Users.ToListAsync();
        }

        public async Task<User> GetByIdAsync(int id)
        {
            return await _context.Users.FindAsync(id);

        }
        public async Task<User> AddAsync(User user)
        {
            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();
            return user;
        }

        public async Task<User> UpdateAsync(User user)
        {
            _context.Users.Update(user);
            await _context.SaveChangesAsync();
            return user;
        }
        public async Task<User> DeleteAsync(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null) return null;

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();
            return user;
        }

        public async Task<User?> GetFullProfileAsync(int userId)
        {
            return await _context.Users
                .Include(u => u.Bookings)
                .ThenInclude(b => b.Room)          
        .Include(u => u.Rooms)                 
        .FirstOrDefaultAsync(u => u.Id == userId);
        }

        //public async Task<User?> GetByIdAsync(int id)
        //{
        //    return await _context.Users.FirstOrDefaultAsync(u => u.Id == id);
        //}


    }
}