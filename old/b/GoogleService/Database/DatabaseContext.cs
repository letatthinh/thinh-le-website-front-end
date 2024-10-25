using GoogleService.Database.Models;
using Microsoft.EntityFrameworkCore;

namespace GoogleService.Database;

public class DatabaseContext(
    DbContextOptions databaseContextOptions
) : DbContext(databaseContextOptions)
{
    public DbSet<GoogleDriveFileModel> GoogleDriveFiles { get; set; }
    public DbSet<GoogleDriveImageModel> GoogleDriveImages { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        base.OnConfiguring(optionsBuilder);
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
    }
}
