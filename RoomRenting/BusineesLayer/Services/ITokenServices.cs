using PersistenceLayer.Models;

namespace BusineesLayer.Services
{
    public interface  ITokenServices
    {
        string GenerateToken(User user);
    }

}
