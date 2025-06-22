using Microsoft.EntityFrameworkCore;
using PersistenceLayer.Data;
using PersistenceLayer.Models;

namespace PersistenceLayer.Repository
{
    public class AdminRepo: IAdminRepo
    {
        private readonly AppDbContext _context;
        public AdminRepo (AppDbContext context)
        {
            _context = context;
        }
        public Task<AdminModel> GetAdminByEmailAsync(string email)
        {

            var admin = _context.Admin
                .FirstOrDefaultAsync(a => a.Email == email);
            return admin;
        }
         
    }

}
