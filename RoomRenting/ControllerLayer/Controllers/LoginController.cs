


using Microsoft.AspNetCore.Mvc;

using BusineesLayer.DTOs;
using BusineesLayer.Services;

namespace ControllerLayer.Controllers

{
    [ApiController]
    [Route("api/[controller]")]
    public class LoginController : ControllerBase
    {
        private readonly BusineesLayer.Services.ILoginServices _login;
        private readonly ITokenServices _tokenServices;

        public LoginController(ILoginServices login, ITokenServices tokenServices)
        {
            _login = login;
            _tokenServices = tokenServices;
        }

        [HttpPost("login")]

        public async Task<IActionResult> Login(UserLogindto dto)
        {
            var user = await _login.GetUserEmail(dto);
            if (user == null)
            {
                return Unauthorized(new { message = "Invalid email or password" });
            }
            Console.WriteLine(DateTime.Now);
            Console.WriteLine(DateTime.UtcNow);
            var Token = _tokenServices.GenerateToken(user);

            return Ok(new { message = "Login successful", token= Token,

                User = new { user.Id, user.FullName, user.Email, user.Role, user.phone } });
        }
    }
}
