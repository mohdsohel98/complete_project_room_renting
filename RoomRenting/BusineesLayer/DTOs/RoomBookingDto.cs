namespace BusineesLayer.DTOs
{
    public class RoomBookingDto
    {
        //public int Id { get; set; }
        public int RoomId { get; set; }
        public int UserId { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Preference { get; set; }
        public string Description { get; set; }

        //public string RoomTitle { get; set; }
        //public string Location { get; set; }

    }
}
