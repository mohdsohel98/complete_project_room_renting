using RoomRenting.Models;

namespace RoomRenting.Services
{
    public class RoomServices : IRoomServices
    {
        public List<Room> GetAllRooms()
        {
            return new List<Room>
            {
                new Room 
                { 
                    ID = 1, 
                    Title = "Sunny PG Room in Indore", 
                    Description = "Spacious room with balcony, natural light, and Wi-Fi included.", 
                    Price = 3500, 
                    ImageUrl = "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800", 
                    Location = "Vijay Nagar, Indore" 
                },
                new Room 
                { 
                    ID = 2, 
                    Title = "Private Room near University", 
                    Description = "Fully furnished room with AC, wardrobe, and study desk.", 
                    Price = 5000, 
                    ImageUrl = "https://images.unsplash.com/photo-1505691938895-1758d7feb511", 
                    Location = "Bhawarkuan, Indore" 
                },
                new Room 
                { 
                    ID = 3, 
                    Title = "Shared Room for Girls", 
                    Description = "Safe locality, 24x7 security, and homely food service available.", 
                    Price = 3000, 
                    ImageUrl = "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2", 
                    Location = "Rajwada, Indore" 
                },
                new Room 
                { 
                    ID = 4, 
                    Title = "Budget Room with Common Kitchen", 
                    Description = "Ideal for students, includes kitchen access and common hall.", 
                    Price = 2500, 
                    ImageUrl = "https://images.unsplash.com/photo-1494526585095-c41746248156", 
                    Location = "Palasia, Indore" 
                },
                new Room 
                { 
                    ID = 5, 
                    Title = "Luxury Room with Balcony View", 
                    Description = "Modern interior, beautiful balcony view, and all facilities.", 
                    Price = 6000, 
                    ImageUrl = "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800", 
                    Location = "New Palasia, Indore" 
                },
                new Room
                {
                    ID = 5,
                    Title = "Luxury Room with Balcony View",
                    Description = "Modern interior, beautiful balcony view, and all facilities.",
                    Price = 6000,
                    ImageUrl = "https://images.unsplash.com/photo-1560448204-e02f11c3d0e",
                    Location = "New Palasia, Indore"
                },
                new Room
                {
                    ID = 5,
                    Title = "Luxury Room with Balcony View",
                    Description = "Modern interior, beautiful balcony view, and all facilities.",
                    Price = 6000,
                    ImageUrl = "https://images.unsplash.com/photo-1560448204-e02f11c3d0e",
                    Location = "New Palasia, Indore"
                }


            };
        }
    }
}
