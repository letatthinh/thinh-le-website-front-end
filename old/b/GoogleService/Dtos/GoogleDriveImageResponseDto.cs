namespace GoogleService.Dtos;

public class GoogleDriveImageResponseDto
{
    public required string FileId { get; set; }

    public required string Name { get; set; }

    public required string Source { get; set; }

    public required int Width { get; set; }

    public required int Height { get; set; }
}
