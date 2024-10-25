using Common;
using GoogleService.Database.Models;

namespace GoogleService.Database.Repositories;

public class GoogleDriveImageRepository(
    DatabaseContext databaseContext
) : BaseRepository<GoogleDriveImageModel>(databaseContext), IGoogleDriveImageRepository
{
}
