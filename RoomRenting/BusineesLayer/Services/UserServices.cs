
using BusineesLayer.DTOs;
using PersistenceLayer.Repository;
using PersistenceLayer.Models;


namespace BusineesLayer.Services
{
    public class UserServices : IUserServices
    {
        private readonly IUserRepository _repo;
        private readonly IRoomPostRepository _roomPostRepo;
        private readonly IRoomBookingRepository _roomBookingRepo;

        public UserServices(IUserRepository repo,IRoomPostRepository roomPostRepo, IRoomBookingRepository roomBookingRepo)
        {
            _repo = repo;
            _roomPostRepo = roomPostRepo;
            _roomBookingRepo = roomBookingRepo;
        }
        public async Task<IEnumerable<User>> GetAllUserAsync()
        {
            return await _repo.GetAllAsync();
        }
        public async Task<User> GetUserByIdAsync(int id)
        {
            return await _repo.GetByIdAsync(id);
        }
        public async Task<User> AddUserAsync(UserRegisterDto dto)
        {
            var user = new User
            {
                FullName = dto.FullName,
                Email = dto.Email,
                PasswordHash = BCrypt.Net.BCrypt.HashPassword(dto.Password),

                Role = dto.Role,
                phone = dto.Phone,
                CreatedAt = DateTime.UtcNow

            };
            return await _repo.AddAsync(user);
        }

        public async Task<bool> UpdateUserAsync(int id, UserRegisterDto dto)
        {
            var user = await _repo.GetByIdAsync(id);
            if (user == null)
            {
                return false;
            }
            user.FullName = dto.FullName;
            user.Email = dto.Email;
            if (!string.IsNullOrEmpty(dto.Password))
            {
                user.PasswordHash = BCrypt.Net.BCrypt.HashPassword(dto.Password);
            }
            user.Role = dto.Role;
            user.phone = dto.Phone;

            await _repo.UpdateAsync(user);
            return true;


        }
        public async Task<bool> DeleteUserAsync(int id)
        {
            var user = await _repo.DeleteAsync(id);
            return user != null;
        }

          public async Task<UserProfileDto<List<RoomBookingDto>>?> GetFullProfileAsync (int UserId)
        {


            var user = await _repo.GetByIdAsync(UserId);
            if (user == null) return null;

            var dto = new UserProfileDto<List<RoomBookingDto>>
            {
                FullName = user.FullName,
                 Email = user.Email,
            };


            if (user.Role == "lister")
            {
                var rooms = await _roomPostRepo.GetRoomByUserIdAsync(UserId);
                dto.ListedRooms = rooms.Select(r => new RoomSummaryDto
                {
                    RoomId = r.id,
                    Title = r.Title,
                    Location = r.Location
                }).ToList();
            }
            else
            {
                var bookings = await _roomBookingRepo.GetBookingByUserIdAsync(UserId);
                dto.TotalBookings = bookings.Count();
                var booked = bookings.Select(b => new RoomBookingDto
                {
                    RoomId = b.RoomId,
                    UserId = b.UserId,
                    Name = b.name,
                    Email = b.Email,
                    Phone = b.Phone,
                    Preference = b.Preference,
                    Description = b.Description,
                    
                    
                }).ToList();

                dto.Bookings = booked;


            }
               return dto;
        }
    }
}