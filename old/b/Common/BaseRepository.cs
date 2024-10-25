using Microsoft.EntityFrameworkCore;

namespace Common;

public abstract class BaseRepository<DatabaseModel>(DbContext databaseContext) : IBaseRepository<DatabaseModel>
    where DatabaseModel : class
{
    private DbSet<DatabaseModel> _models => databaseContext.Set<DatabaseModel>();

    public DbSet<DatabaseModel> GetModels()
    {
        return _models;
    }

    /// <inheritdoc/>
    public IQueryable<DatabaseModel> GetModelsAsQueryable()
    {
        return _models;
    }

    /// <inheritdoc/>
    public IQueryable<DatabaseModel> GetModelsAsQueryableWithoutTracking()
    {
        return _models.AsNoTracking();
    }

    /// <inheritdoc/>
    public async Task CreateAsync(DatabaseModel databaseModel)
    {
        _ = await _models.AddAsync(databaseModel);
    }

    /// <inheritdoc/>
    public async Task CreateRangeAsync(List<DatabaseModel> databaseModel)
    {
        await _models.AddRangeAsync(databaseModel);
    }

    /// <inheritdoc/>
    public void Update(DatabaseModel databaseModel)
    {
        _ = _models.Update(databaseModel);
    }

    /// <inheritdoc/>
    public void UpdateRange(List<DatabaseModel> databaseModel)
    {
        _models.UpdateRange(databaseModel);
    }

    /// <inheritdoc/>
    public async Task<int> SaveChangesAsync()
    {
        return await databaseContext.SaveChangesAsync();
    }
}
