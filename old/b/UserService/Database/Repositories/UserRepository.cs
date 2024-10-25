using Common;
using Microsoft.EntityFrameworkCore;
using UserService.Database.Models;

namespace UserService.Database.Repositories;

public class UserRepository(
    DatabaseContext databaseContext
) : BaseRepository<UserModel>(databaseContext), IUserRepository
{
    /// <inheritdoc/>
    public async Task<UserModel?> GetByUsername(string username)
    {
        return await databaseContext.Users
            .SingleOrDefaultAsync(userModel => userModel.Username == username);
    }

    /// <inheritdoc/>
    public IQueryable<UserModel> GetUsers()
    {
        return GetModelsAsQueryable()
            .Include(user => user.Roles)
            // [Tip] Improve performance when joining tables
            // Reference: https://learn.microsoft.com/en-us/ef/core/querying/single-split-queries
            .AsSplitQuery();
    }

    /// <inheritdoc/>
    public IQueryable<UserModel> GetUsersAsNoTracking()
    {
        return GetModelsAsQueryableWithoutTracking()
            .Include(user => user.Roles)
            .AsSplitQuery();
    }
}
