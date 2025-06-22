

using RoomRenting.DTOs;
using RoomRenting.Models;
using RoomRenting.Repository;

namespace RoomRenting.Services;

public  class UserServices :IUserService
{
    private readonly IUserRepository _repo;

     public  UserServices (IUserRepository repo)
    {
        _repo = repo;
    }
    public async Task<IEnumerable<User>> GetAllUserAsync()
    {
        return await _repo.GetAllAsync();
    }
     public async Task <User>  GetUserByIdAsync(int id)
    {
         return  await _repo.GetByIdAsync(id);
    }
    public async Task<User> AddUserAsync(UserRegisterDto dto)
    {
        var user = new User
        {
            FullName = dto.FullName,
            Email = dto.Email,
            PasswordHash = BCrypt.Net.BCrypt.HashPassword(dto.Password),

            Role = dto.Role,
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

        await _repo.UpdateAsync(user);
        return true;

        
    }
     public async Task <bool> DeleteUserAsync  (int id)
    {
        var user = await _repo.DeleteAsync(id);
        return user != null;
    }
}