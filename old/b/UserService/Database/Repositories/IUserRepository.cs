using Common;
using UserService.Database.Models;

namespace UserService.Database.Repositories;

public interface IUserRepository : IBaseRepository<UserModel>
{
    /// <summary>
    /// Find user by username.
    /// </summary>
    /// <param name="username">User's username.</param>
    /// <returns>A <see cref="UserModel" /> if exists.</returns>
    Task<UserModel?> GetByUsername(string username);

    /// <summary>
    /// Get users with change tracking including relationship tables.
    /// </summary>
    /// <returns>A new query to get all records. Changes are tracked.</returns>
    IQueryable<UserModel> GetUsers();

    /// <summary>
    /// Get users without change tracking including relationship tables.
    /// </summary>
    /// <returns>A new query to get all records. Changes are not tracked.</returns>
    IQueryable<UserModel> GetUsersAsNoTracking();
}
