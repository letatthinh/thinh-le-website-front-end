using GoogleService.Dtos;

namespace GoogleService.Services;

public interface IGoogleDriveService
{
    Task<int> CreateOrUpdateImagesByFolderAsync(string folderId);
    Task<IEnumerable<GoogleDriveImageResponseDto>> GetGoogleDriveImageResponseDtosAsync();
    Task<bool> RemoveGoogleDriveImagesFromDatabase();
}
