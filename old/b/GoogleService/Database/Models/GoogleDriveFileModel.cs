using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GoogleService.Database.Models;

[Table("File")]
public class GoogleDriveFileModel : Common.BaseDatabaseModel
{
    [Required]
    public required string FileId { get; set; }

    [Required]
    public required string FileName { get; set; }
}
