using AutoMapper;
using Google.Apis.Drive.v3;
using GoogleService.Constants;
using GoogleService.Database.Models;
using GoogleService.Database.Repositories;
using GoogleService.Dtos;
using GoogleService.Utilities;
using Microsoft.EntityFrameworkCore;

namespace GoogleService.Services;

public class GoogleDriveService(
    IUnitOfWork _unitOfWork,
    IMapper _mapper
) : IGoogleDriveService
{
    public async Task<int> CreateOrUpdateImagesByFolderAsync(
        string folderId)
    {
        var listRequest = await CreateListRequestToGetImagesByFolderAsync(folderId);
        // Get files from google drive.
        var googleDriveFiles = (await listRequest.ExecuteAsync()).Files;
        // Get all google drive images from database
        var googleDriveImages = await _unitOfWork.GoogleDriveImageRepository
            .GetModelsAsQueryable()
            .ToListAsync();
        var newGoogleDriveImages = new List<GoogleDriveImageModel>();
        var updatedGoogleDriveImages = new List<GoogleDriveImageModel>();

        foreach (var googleDriveFile in googleDriveFiles)
        {
            var existingGoogleDriveImage = googleDriveImages.SingleOrDefault(
                googleDriveImage => googleDriveImage.FileId.Equals(googleDriveFile.Id));

            if (existingGoogleDriveImage == null)
            {
                // Create
                var newGoogleDriveImage = _mapper.Map<GoogleDriveImageModel>(googleDriveFile);
                newGoogleDriveImages.Add(newGoogleDriveImage);
            }
            else
            {
                // Update
                var updatedGoogleDriveImage = _mapper.Map(googleDriveFile, existingGoogleDriveImage);
                updatedGoogleDriveImages.Add(updatedGoogleDriveImage);
            }
        }

        await _unitOfWork.GoogleDriveImageRepository.CreateRangeAsync(newGoogleDriveImages);
        _unitOfWork.GoogleDriveImageRepository.UpdateRange(updatedGoogleDriveImages);

        return await _unitOfWork.GoogleDriveImageRepository.SaveChangesAsync();
    }

    public async Task<IEnumerable<GoogleDriveImageResponseDto>> GetGoogleDriveImageResponseDtosAsync()
    {
        return await _unitOfWork.GoogleDriveImageRepository
            .GetModelsAsQueryable()
            .Select(googleDriveImage => _mapper.Map<GoogleDriveImageResponseDto>(googleDriveImage))
            .ToListAsync();
    }

    private static async Task<FilesResource.ListRequest> CreateListRequestToGetImagesByFolderAsync(string folderId)
    {
        var userCredential = await GoogleAuthorizationUtility.GetUserCredentialsAsync(
            PathConstant.GoogleApiProjectCredentialsPath,
            GoogleDriveConstant.ApiScopes,
            PathConstant.GoogleAuthorizationTokenPath);
        var googleDriveApiService = GoogleDriveUtility.CreateApiService(userCredential);
        var listRequest = GoogleDriveUtility.CreateListRequestToGetImagesByFolder(folderId, googleDriveApiService);
        return listRequest;
    }

    public async Task<bool> RemoveGoogleDriveImagesFromDatabase()
    {
        try
        {
            var allModels = _unitOfWork.GoogleDriveImageRepository
            .GetModelsAsQueryable();

            _unitOfWork.GoogleDriveImageRepository
                .GetModels()
                .RemoveRange(allModels);

            await _unitOfWork.GoogleDriveImageRepository.SaveChangesAsync();

            return true;
        }
        catch
        {
            return false;
        }
    }
}
