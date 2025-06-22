namespace BusineesLayer.DTOs
{
    public class RoomPostDto
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string Location { get; set; }
        public decimal Price { get; set; }

        public int UserId { get; set; }
        public IFormFile Image { get; set; }

        public string Contact { get; set; }
        public string RoomType { get; set; }
        public string GenderPreference { get; set; }
        public List<string> Amenities { get; set; }
    }
}
