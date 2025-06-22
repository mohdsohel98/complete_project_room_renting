

using BusineesLayer.DTOs;
using BusineesLayer.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace ControllerLayer.Controllers
{
    
    [ApiController]
    [Route("api/[controller]")]
    public class RoomController : ControllerBase
    {
        private readonly IRoomPostService _roomServices;

        public RoomController(IRoomPostService roomServices)
        {
            _roomServices = roomServices;
        }



        [HttpPost]
        [Authorize(Roles = "lister")]


        [Consumes("multipart/form-data")]
        public async Task<IActionResult> AddRoom([FromForm] RoomPostDto dto)
        {
            if (dto == null || dto.Image == null)
                return BadRequest("Invalid room data");
           

            int userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)!.Value);
            var result = await _roomServices.AddRoomAsync(dto, userId);
            return Ok(result);

        }




        [HttpGet]
        public async Task<IActionResult> GetAllRooms()
        {
            var rooms = await _roomServices.GetAllRoomsAsync();
            if (rooms == null || !rooms.Any())
                return NotFound("No rooms found");

            return Ok(rooms);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRoom(int id)
        {
            var deletedRoom = await _roomServices.DeleteRoomAsync(id);
            if (deletedRoom == null)
            {
                return NotFound();
            }

            return Ok(deletedRoom);
        }
    }
}
