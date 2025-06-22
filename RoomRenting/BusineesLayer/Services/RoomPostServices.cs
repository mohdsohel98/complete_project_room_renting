
using BusineesLayer.DTOs;
using PersistenceLayer.Models;
using PersistenceLayer.Repository;


namespace BusineesLayer.Services
{
        public class RoomPostServices : IRoomPostService
        {
            private readonly IRoomPostRepository _roomPostRepository;

            public RoomPostServices(IRoomPostRepository roomPostRepository)
            {
                _roomPostRepository = roomPostRepository;
            }

                  //getall rooms 
        public async Task<List<RoomPostModel>> GetAllRoomsAsync()
            {
                return await _roomPostRepository.GetAllRoomsAsync();
            }

        public async Task<RoomPostModel> AddRoomAsync(RoomPostDto roomDto, int userId)
            {
                string imageUrl = null;

                // Image upload logic
                var imageFile = roomDto.Image;
                if (imageFile != null && imageFile.Length > 0)
                {
                    var imagesFolder = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "images");

                    if (!Directory.Exists(imagesFolder))
                        Directory.CreateDirectory(imagesFolder);

                    var uniqueFileName = Guid.NewGuid().ToString() + Path.GetExtension(imageFile.FileName);
                    var filePath = Path.Combine(imagesFolder, uniqueFileName);

                    using (var stream = new FileStream(filePath, FileMode.Create))
                    {
                        await imageFile.CopyToAsync(stream);
                    }


                    imageUrl = "/images/" + uniqueFileName;
                }

            // Map DTO to Model
            var room = new RoomPostModel
            {
                Title = roomDto.Title,
                Description = roomDto.Description,
                Location = roomDto.Location,
                Price = roomDto.Price,
                ImageUrl = imageUrl,
                Contact = roomDto.Contact,
                RoomType = roomDto.RoomType,
                GenderPreference = roomDto.GenderPreference,
                Amenities = roomDto.Amenities != null ? string.Join(",", roomDto.Amenities) : null,
                UserId = userId
            };

                // Save to database through repository
                return await _roomPostRepository.AddRoomAsync(room);
            }

            public async Task<RoomPostModel> DeleteRoomAsync(int id)
            {
                return await _roomPostRepository.DeleteRoomAsync(id);
            }


        //   public async Task<List<RoomSummaryDto>> GetRoomByUserIdAsync(int userId)
        //{
        //    var rooms = await _roomPostRepository.GetRoomByUserIdAsync(userId);

        //    return rooms.Select(r => new RoomSummaryDto
        //    {
        //        RoomId = r.id,
        //        Title = r.Title,
        //        Location = r.Location
        //    }).ToList();
        //}
        }
    }