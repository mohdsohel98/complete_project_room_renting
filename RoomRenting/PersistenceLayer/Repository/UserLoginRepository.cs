using PersistenceLayer.Repository;
using Microsoft.EntityFrameworkCore;
using PersistenceLayer.Data;
using PersistenceLayer.Models;



namespace PersistenceLayer.Repository
{
    public class UserLoginRepository : IUserLoginRepository
    {
        private readonly AppDbContext _context;
        public UserLoginRepository(AppDbContext context)
        {
            _context = context;
        }
        public async Task<User> GetUserEmailAsync(string email)
        {
            return await _context.Users.FirstOrDefaultAsync(u => u.Email == email);
        }

    }
}
