using Microsoft.IdentityModel.Tokens;
using PersistenceLayer.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace BusineesLayer.Services
{
    public class TokenServices : ITokenServices
    {
        private readonly IConfiguration _configure;
        public TokenServices  (IConfiguration configure)
        {
            _configure = configure;
        }

         public string GenerateToken(User user )
        {
            var claims = new[]
            {
                new  Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Email, user.Email),
                new Claim (ClaimTypes.Role, user.Role),
                new Claim (ClaimTypes.Name, user.FullName)
            };
             var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configure["JWT:Key"]));
            var creds  = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(

                issuer: _configure["JWT:Issuer"],
                audience: _configure["JWT:Audience"],
                claims: claims,
                //expires: DateTime.UtcNow.AddMinutes(double.Parse(_configure["JWT:ExpiresInMinutes"])),
                //expires: DateTime.UtcNow.AddHours(12),
                expires: DateTime.Now.AddHours(1),

               signingCredentials: creds

                ); 
   
            return new JwtSecurityTokenHandler().WriteToken(token);

        }


    }
}
