using Microsoft.AspNetCore.Mvc;
using RoomRenting.DTOs;
using RoomRenting.Models;
using RoomRenting.Services;

namespace RoomRenting.Controllers

{
    [ApiController]
    [Route("api/[controller]")]
    public class LoginController: ControllerBase
    {
        private readonly ILoginServices _login;

        public LoginController(ILoginServices login)
        {
            _login = login;
        }

        [HttpPost("login")]

        public async Task<IActionResult> Login (UserLogindto dto)
        {
             var user  = await _login.GetUserEmail(dto);
            if (user == null)
            {
                return Unauthorized(new { message = "Invalid email or password" });
            }
            return Ok (new {Message = "Login successful", User = new { user.Id, user.FullName, user.Email, user.Role } });
        }
    }
}
