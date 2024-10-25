using Google.Apis.Drive.v3;

namespace GoogleService.Constants;

public static class GoogleDriveConstant
{
    public static List<string> ApiScopes =
    [
        DriveService.Scope.Drive,
        DriveService.Scope.DriveAppdata,
        DriveService.Scope.DriveAppsReadonly,
        DriveService.Scope.DriveFile,
        DriveService.Scope.DriveMetadata,
        DriveService.Scope.DriveMetadataReadonly,
        DriveService.Scope.DrivePhotosReadonly,
        DriveService.Scope.DriveReadonly,
    ];

    public static string UploadContentUri = "https://drive.google.com/uc";
}
