//using RoomRenting.DTOs;
//using RoomRenting.Models;
//using RoomRenting.Repository;

//namespace RoomRenting.Services
//{
//    public class RoomPostServices:IRoomPostServices
//    {
//      private readonly IRoomPostRepository  _roomPostRepository;
//    public RoomPostServices (IRoomPostRepository roomPostRepository)
//    {
//         _roomPostRepository = roomPostRepository;
//        }

//        public async Task<List<RoomPostModel>> GetAllRoomsAsync()
//        {
//            return await _roomPostRepository.GetAllRoomsAsync();
//        }


//        public async Task<RoomPostModel> AddRoomAsync(RoomPostDto roomDto)
//        {
//            // Upload image to wwwroot/images folder
//            var imageFile = roomDto.Image;
//            string imageUrl = null;

//            if (imageFile != null && imageFile.Length > 0)
//            {
//                var folderPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "images");
//                if (!Directory.Exists(folderPath))
//                {
//                    Directory.CreateDirectory(folderPath);
//                }

//                var uniqueFileName = Guid.NewGuid().ToString() + Path.GetExtension(imageFile.FileName);
//                var filePath = Path.Combine(folderPath, uniqueFileName);

//                using (var stream = new FileStream(filePath, FileMode.Create))
//                {
//                    await imageFile.CopyToAsync(stream);
//                }

//                imageUrl = "/images/" + uniqueFileName; // This is the path you’ll save in DB
//            }

//            var room = new RoomPostModel
//            {
//                Title = roomDto.Title,
//                Description = roomDto.Description,
//                Location = roomDto.Location,
//                Price = roomDto.Price,
//                ImageUrl = imageUrl, // ✅ Correct now
//                Contact = roomDto.Contact,

//                 RoomType = roomDto.RoomType,
//                GenderPreference = roomDto.GenderPreference,
//                Amenities = string.Join(",", roomDto.Amenities),
//            };

//            return await _roomPostRepository.AddRoomAsync(room);
//        }

//    }
//}

using RoomRenting.DTOs;
using RoomRenting.Models;
using RoomRenting.Repository;
using System.IO;
using System.Threading.Tasks;

namespace RoomRenting.Services
{
    public class RoomPostServices : IRoomPostServices
    {
        private readonly IRoomPostRepository _roomPostRepository;

        public RoomPostServices(IRoomPostRepository roomPostRepository)
        {
            _roomPostRepository = roomPostRepository;
        }

        public async Task<List<RoomPostModel>> GetAllRoomsAsync()
        {
            return await _roomPostRepository.GetAllRoomsAsync();
        }

        public async Task<RoomPostModel> AddRoomAsync(RoomPostDto roomDto)
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
            };

            // Save to database through repository
            return await _roomPostRepository.AddRoomAsync(room);
        }

         public async Task<RoomPostModel> DeleteRoomAsync (int id )
        {
            return await _roomPostRepository.DeleteRoomAsync(id);
        }
    }
}
