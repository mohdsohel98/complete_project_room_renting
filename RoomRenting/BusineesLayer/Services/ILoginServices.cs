using BusineesLayer.DTOs;
using PersistenceLayer.Models;

namespace BusineesLayer.Services
{
    public interface ILoginServices
    {
        Task<User> GetUserEmail(UserLogindto dto);
        Task <string> AuthenticatedAsync(UserLogindto dto);


    }

}