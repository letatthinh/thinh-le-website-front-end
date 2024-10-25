using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GoogleService.Database.Models;

[Table("Image")]
public class GoogleDriveImageModel : GoogleDriveFileModel
{
    [Required]
    public required string Name { get; set; }

    [Required]
    public required int Width { get; set; }

    [Required]
    public required int Height { get; set; }

    public string Tags { get; set; } = string.Empty;
}
