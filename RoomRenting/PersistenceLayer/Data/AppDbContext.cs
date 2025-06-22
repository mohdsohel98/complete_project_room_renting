using System.Collections.Generic;

using Microsoft.EntityFrameworkCore;
 using PersistenceLayer.Models;

namespace PersistenceLayer.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> option) : base(option) { }
        public DbSet<User> Users { get; set; }
        public DbSet<RoomPostModel> Rooms { get; set; }

        public DbSet<RoomBookingModel> Bookings { get; set; }
        public DbSet<AdminModel> Admin { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Room>()
                .HasOne(r=> r.User)
                .WithMany( u => u.Rooms)
                .HasForeignKey(r => r.UserId)
            .OnDelete(DeleteBehavior.Cascade);


            modelBuilder.Entity<Room>()
           .HasOne(r => r.User)
           .WithMany(u => u.Rooms)
           .HasForeignKey(r => r.UserId)
           .OnDelete(DeleteBehavior.Cascade);

            /* Room 1 ──< Booking */
            modelBuilder.Entity<RoomBookingModel>()
                .HasOne(b => b.Room)
                .WithMany(r=> r.Booking)
                .HasForeignKey(b => b.RoomId)
                .OnDelete(DeleteBehavior.Cascade);

            /* User 1 ──< Booking (who booked)  */
            modelBuilder.Entity<RoomBookingModel>()
                .HasOne(b => b.User)
                .WithMany(u => u.Bookings)
                .HasForeignKey(b => b.UserId)
                .OnDelete(DeleteBehavior.Restrict);   

            base.OnModelCreating(modelBuilder);
        }
    }
}
