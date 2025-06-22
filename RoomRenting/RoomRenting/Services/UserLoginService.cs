using RoomRenting.DTOs;
using RoomRenting.Models;
using RoomRenting.Repository;

namespace RoomRenting.Services
{
    public class UserLoginService:ILoginServices
    {
        private readonly IUserLoginRepository _repo;
        public UserLoginService (IUserLoginRepository repo)
        {
            _repo = repo;
        }
        public async Task<User> GetUserEmail(UserLogindto dto)
        {
            var user  = await  _repo.GetUserEmailAsync(dto.Email);
            if (user == null) return null;


            bool isPasswordValid = BCrypt.Net.BCrypt.Verify(dto.Password, user.PasswordHash);
            return isPasswordValid ? user : null;

        }


    }
}
