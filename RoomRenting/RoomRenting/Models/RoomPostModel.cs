namespace RoomRenting.Models
{
    public class RoomPostModel
    {
        public int id { get; set; }
        public  string Title { get; set; }
        public string  Description { get; set; }
        public string Location { get; set; }
        public  decimal Price { get; set; }
        public string ImageUrl { get; set; }
        public  string Contact { get; set; }

        public string RoomType { get; set; }
        public string GenderPreference { get; set; }

        // Store amenities as a JSON string (or comma-separated)
        public string Amenities { get; set; }
    }
}