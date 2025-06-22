namespace PersistenceLayer.Models
{
    public class RoomBookingModel
    {
        public int Id { get; set; }
        public int RoomId { get; set; }
        public Room  Room { get; set; }


         public int UserId { get; set; }
        public User User { get; set; }


        public string name { get; set; }
        public string Email { get; set; }
        public  string Phone { get; set; }
        public string  Preference { get; set; }
        public string Description { get; set; }


        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    }
}
