namespace PersistenceLayer.Models
{
    public class User
    {
        public int Id { get; set; }

        
        public string FullName { get; set; }
        public string Email { get; set; }
        public string PasswordHash { get; set; }
         public string phone { get; set; }
        public string Role { get; set; }
        public DateTime CreatedAt { get; set; }


        public ICollection<Room> Rooms { get; set; } = new List<Room>();
        public ICollection<RoomBookingModel> Bookings { get; set; } = new List<RoomBookingModel>();

    }
}
