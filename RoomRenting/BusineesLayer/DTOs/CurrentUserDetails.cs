namespace BusineesLayer.DTOs
{
    public class BookingSummaryDto
    {
        public int BookingId { get; set;}
        public int UserId { get; set; }
        public DateTime BookingDate { get; set; }
        public string RoomTitle { get; set; }
        public string Location { get; set; }
    }

    public class RoomSummaryDto
    {
        public int RoomId { get; set; }
        public string Title { get; set; }
        public string Location { get; set; }
    }

    public class UserProfileDto<T>
    {
        public string FullName { get; set; }
        public string Email { get; set; }
        public int TotalBookings { get; set; }
        public T  Bookings { get; set; }
        public List<RoomSummaryDto> ListedRooms { get; set; }

        
    }
}
