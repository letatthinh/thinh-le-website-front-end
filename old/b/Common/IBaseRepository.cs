using Microsoft.EntityFrameworkCore;

namespace Common;

public interface IBaseRepository<DatabaseModel> where DatabaseModel : class
{
    /// <summary>
    /// Get models
    /// This method will not include relationship tables.
    /// </summary>
    /// <returns>A dbset of the model. Changes are tracked.</returns>
    DbSet<DatabaseModel> GetModels();

    /// <summary>
    /// Get models as query with change tracking.
    /// This method will not include relationship tables.
    /// </summary>
    /// <returns>A new query to get all records. Changes are tracked.</returns>
    IQueryable<DatabaseModel> GetModelsAsQueryable();

    /// <summary>
    /// Get models as query without change tracking.
    /// This method will not include relationship tables.
    /// </summary>
    /// <returns>A new query to get all records. Changes are not tracked.</returns>
    IQueryable<DatabaseModel> GetModelsAsQueryableWithoutTracking();

    /// <summary>
    /// Create a new data model record in the database (remember to save the change).
    /// </summary>
    /// <param name="databaseModel">The database model to add.</param>
    Task CreateAsync(DatabaseModel databaseModel);

    /// <summary>
    /// Create multiple data model records in the database (remember to save the change).
    /// </summary>
    /// <param name="databaseModels">The database model to add.</param>
    Task CreateRangeAsync(List<DatabaseModel> databaseModels);

    /// <summary>
    /// Update a new data model record in the database (remember to save the change).
    /// </summary>
    /// <param name="databaseModel">The database model to add.</param>
    void Update(DatabaseModel databaseModel);

    /// <summary>
    /// Update multiple data model records in the database (remember to save the change).
    /// </summary>
    /// <param name="databaseModels">The database model to add.</param>
    void UpdateRange(List<DatabaseModel> databaseModels);

    // [Tip] Multiple actions (e.g. add/update/delete) can be combined before saving changes to the database.
    /// <summary>
    /// Save all the changes to the database.
    /// </summary>
    /// <returns>The number of records written to the database.</returns>
    Task<int> SaveChangesAsync();
}
