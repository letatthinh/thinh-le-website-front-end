using GoogleService.Dtos;
using GoogleService.Services;
using Microsoft.AspNetCore.Mvc;

namespace GoogleService.Controllers;

[Route("api/[controller]")]
[ApiController]
public class GoogleDriveController(
    IGoogleDriveService _googleDriveService
) : ControllerBase
{
    [HttpPost("fetch-images-by-folder-id")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public async Task<ActionResult<int>> CreateOrUpdateImagesByFolder(string? folderId = "1l4Wrtsr5fFsux-ogu7H0wIrU0tsNuVnM")
    {
        var numberOfWrittenRecords = await _googleDriveService.CreateOrUpdateImagesByFolderAsync(folderId!);

        return Ok(numberOfWrittenRecords);
    }

    [HttpGet("get-google-drive-images")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<IEnumerable<GoogleDriveImageResponseDto>>> GetGoogleDriveImages()
    {
        var googleDriveImages = await _googleDriveService.GetGoogleDriveImageResponseDtosAsync();

        return Ok(googleDriveImages);
    }

    [HttpDelete("remove-google-drive-images-from-database")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<bool>> RemoveGoogleDriveImagesFromDatabase()
    {
        var isSuccess = await _googleDriveService.RemoveGoogleDriveImagesFromDatabase();

        return Ok(isSuccess);
    }
}
