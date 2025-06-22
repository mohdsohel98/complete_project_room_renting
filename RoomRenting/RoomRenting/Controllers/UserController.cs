using Microsoft.AspNetCore.Mvc;
using RoomRenting.DTOs;
using RoomRenting.Services;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    private readonly IUserService _service;
    public UserController(IUserService service)
    {
        _service = service;
    }

    [HttpGet]
   public async Task<IActionResult> GetAll()
    {
        var users = await _service.GetAllUserAsync();
        return Ok(users);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id)
    {
        var user = await _service.GetUserByIdAsync(id);
        if (user == null) return NotFound();
        return Ok(user);
    }

    [HttpPost]
    public async Task<IActionResult> Create(UserRegisterDto dto)
    {
        if (dto == null) return BadRequest("User data is null");

        var user = await _service.AddUserAsync(dto);
        return CreatedAtAction(nameof(GetById), new { id = user.Id }, user);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, UserRegisterDto dto)
    {
        if (dto == null) return BadRequest("User data is null");

        var result = await _service.UpdateUserAsync(id, dto);
        if (!result) return NotFound();
        return Ok(new { message = "User updated successfully" });
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var result = await _service.DeleteUserAsync(id);
        if (!result) return NotFound();
        return Ok(new { message = "User deleted successfully" });
    }
}

