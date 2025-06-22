
//using BusineesLayer.Services;
using BusineesLayer.DTOs;
using PersistenceLayer.Repository;
using PersistenceLayer.Models;



namespace BusineesLayer.Services
{
        public class UserLoginService : ILoginServices
        {
            private readonly IUserLoginRepository _repo;
             
            private readonly ITokenServices _tokenService;
        public UserLoginService(IUserLoginRepository repo , ITokenServices TokenServices)  
            {
                _repo = repo; 
                _tokenService = TokenServices;
        }
            public async Task<User> GetUserEmail(UserLogindto dto)
            {
                var user = await _repo.GetUserEmailAsync(dto.Email);
                if (user == null) return null;


                bool isPasswordValid = BCrypt.Net.BCrypt.Verify(dto.Password, user.PasswordHash);
                return isPasswordValid ? user : null;

            }

           
         public  async Task <string> AuthenticatedAsync(UserLogindto dto)
            {
            var user = await _repo.GetUserEmailAsync(dto.Email);
            if( user == null  || !BCrypt.Net.BCrypt.Verify(dto.Password, user.PasswordHash)){

                return null;
            }
             return _tokenService.GenerateToken(user);
        }



    }
    }