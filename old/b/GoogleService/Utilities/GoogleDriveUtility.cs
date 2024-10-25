using Google.Apis.Auth.OAuth2;
using Google.Apis.Drive.v3;
using Google.Apis.Services;
using GoogleService.Constants;

namespace GoogleService.Utilities;

public static class GoogleDriveUtility
{
    public static DriveService CreateApiService(UserCredential userCredential)
    {
        var baseGoogleApiClientService = new BaseClientService.Initializer
        {
            HttpClientInitializer = userCredential,
            ApplicationName = "Google API project"
        };

        var googleDriveApiService = new DriveService(baseGoogleApiClientService);

        return googleDriveApiService;
    }

    public static FilesResource.ListRequest CreateListRequestToGetImagesByFolder(
        string folderId,
        DriveService googleDriveApiService)
    {
        // Prepare the request.
        var listRequest = googleDriveApiService.Files.List();

        listRequest.Q = $"'{folderId}' in parents and mimeType contains 'image/'";
        listRequest.PageSize = 1000;
        // https://developers.google.com/drive/api/reference/rest/v3/files
        listRequest.Fields = "nextPageToken, files(id, name, imageMediaMetadata(width, height))";

        return listRequest;
    }

    // The "uc" in the URL https://drive.google.com/uc?id={fileId}
    // stands for "upload content"
    // This is a special endpoint provided by Google Drive to serve file content directly,
    // bypassing the Google Drive viewer.
    public static string CreateUploadContentUri(
        string fileId)
    {
        return $"{GoogleDriveConstant.UploadContentUri}?id={fileId}";
    }
}
