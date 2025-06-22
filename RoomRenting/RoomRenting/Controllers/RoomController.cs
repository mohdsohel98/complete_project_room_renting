using Microsoft.AspNetCore.Mvc;
using RoomRenting.DTOs;
using RoomRenting.Services;

namespace RoomRenting.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RoomController : ControllerBase
    {
        private readonly IRoomPostServices _roomServices;

        public RoomController(IRoomPostServices roomServices)
        {
            _roomServices = roomServices;
        }

        [HttpPost]
        [Consumes("multipart/form-data")]
        public async Task<IActionResult> AddRoom([FromForm] RoomPostDto dto)
        {
            if (dto == null || dto.Image == null)
                return BadRequest("Invalid room data");

            var result = await _roomServices.AddRoomAsync(dto);
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
