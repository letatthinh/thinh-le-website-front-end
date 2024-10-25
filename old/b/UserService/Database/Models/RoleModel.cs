using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace UserService.Database.Models;

[Table("Role")] // [Tip] Define table name
public class RoleModel : Common.BaseDatabaseModel
{
    [Required]
    public required string Name { get; set; }

    public ICollection<UserModel>? Users { get; set; }
}
