using Microsoft.AspNetCore.Mvc;

namespace RoomRenting.Models
{
    public class Room
    {
        public int ID { get; set; }
        public required string Title { get; set; }
        public required string Description { get; set; }
        public required string ImageUrl { get; set; }
        public required string Location { get; set; }
        public required decimal Price { get; set; }
    }

     

    }

