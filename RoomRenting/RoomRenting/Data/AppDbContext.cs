using Microsoft.EntityFrameworkCore;
using RoomRenting.Models;

namespace RoomRenting.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> option) : base(option) {}
        public DbSet<User> Users { get; set; }
        public DbSet<RoomPostModel> Rooms { get; set; }

    }
}
