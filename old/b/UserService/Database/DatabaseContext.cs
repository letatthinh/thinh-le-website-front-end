using Microsoft.EntityFrameworkCore;
using UserService.Database.Models;
using UserService.Services;

namespace UserService.Database;

public class DatabaseContext(
    ISecurityService _securityService,
    DbContextOptions databaseContextOptions
) : DbContext(databaseContextOptions)
{
    public DbSet<UserModel> Users { get; set; }
    public DbSet<RoleModel> Roles { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        base.OnConfiguring(optionsBuilder);
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        BuildModels(modelBuilder);
        SeedData(modelBuilder);
    }

    public static void BuildModels(ModelBuilder modelBuilder)
    {
        // [Tip] Add "unique" constraint
        _ = modelBuilder
            .Entity<UserModel>()
            //.ToTable("User") // [Tip] Second way to define table name
            .HasAlternateKey(user => user.Username);

        _ = modelBuilder
            .Entity<RoleModel>()
            .HasAlternateKey(role => role.Name);

        // [Tip] Build the join table
        _ = modelBuilder.Entity<UserModel>()
            .HasMany(user => user.Roles)
            .WithMany(role => role.Users)
            .UsingEntity(
                "UserRoles",
                userBuilder => userBuilder
                    .HasOne(typeof(RoleModel))
                    .WithMany()
                    .HasForeignKey("RoleId")
                    .HasPrincipalKey(nameof(RoleModel.Id)),
                roleBuilder => roleBuilder
                    .HasOne(typeof(UserModel))
                    .WithMany()
                    .HasForeignKey("UserId")
                    .HasPrincipalKey(nameof(UserModel.Id)),
                userRolesBuilder => userRolesBuilder.HasKey("UserId", "RoleId")
            );
    }

    // [Tip] Seed data
    public void SeedData(ModelBuilder modelBuilder)
    {
        // Roles
        List<string> roleNames = ["Admin", "Normal user"];

        _ = modelBuilder
            .Entity<RoleModel>()
            .HasData(roleNames.Select((roleName, roleIndex) => new RoleModel()
            {
                Id = Convert.ToUInt64(roleIndex + 1),
                Name = roleName
            }));

        // Users
        _ = modelBuilder
            .Entity<UserModel>()
            .HasData(
                new
                {
                    Id = Convert.ToUInt64(1),
                    Username = "systemadmin",
                    FirstName = "System",
                    LastName = "Admin",
                    PasswordHash = _securityService.HashPassword("T@eath1nh")
                },
                new
                {
                    Id = Convert.ToUInt64(2),
                    Username = "normaluser",
                    FirstName = "Normal",
                    LastName = "User",
                    PasswordHash = _securityService.HashPassword("123456")
                }
            );

        // UserRoles
        _ = modelBuilder
            .Entity("UserRoles")
            .HasData(
                new
                {
                    UserId = Convert.ToUInt64(1),
                    RoleId = Convert.ToUInt64(1)
                },
                new
                {
                    UserId = Convert.ToUInt64(1),
                    RoleId = Convert.ToUInt64(2)
                },
                new
                {
                    UserId = Convert.ToUInt64(2),
                    RoleId = Convert.ToUInt64(2)
                }
            );
    }
}
