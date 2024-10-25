using Common;
using UserService.Database.Models;

namespace UserService.Database.Repositories;

public class RoleRepository(
    DatabaseContext databaseContext
) : BaseRepository<RoleModel>(databaseContext), IRoleRepository
{
}
