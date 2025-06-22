
using BusineesLayer.DTOs;
using BusineesLayer.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace ControllerLayer.Controllers
{
    [ApiController]
    [Route("api/[Controller]")]
    public class RoomBookingController :ControllerBase
    {
        private readonly IRoomBookingServices _bookingService;
        public RoomBookingController (IRoomBookingServices bookingServices)
        {
            _bookingService = bookingServices;
        }


        [Authorize]
        [HttpPost("CreateBooking")]
        public async Task<IActionResult> Create (RoomBookingDto bookingDto)
        { 
             if (bookingDto == null)
            {
                return BadRequest("data is empty");
            }

            var idClaim = User.FindFirst(ClaimTypes.NameIdentifier);

            if (idClaim == null || !int.TryParse(idClaim.Value, out int userId))
                return Unauthorized("User ID claim missing or invalid");


            var booking = await _bookingService.AddRoomBookingAsync(bookingDto, userId);


             return  Ok(booking);
        }


        [HttpGet("GetAllBooking")]
        public async  Task<IActionResult> GetAllBooking()
        {
            var booking = await _bookingService.GetAllBookingAsync();
            if (booking == null)
            {
                return NotFound("booking not found");
            }
            return Ok(booking);
        }


    }
}
