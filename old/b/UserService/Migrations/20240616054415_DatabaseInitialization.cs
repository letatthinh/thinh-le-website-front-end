using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace UserService.Migrations;

/// <inheritdoc />
public partial class DatabaseInitialization : Migration
{
    /// <inheritdoc />
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.CreateTable(
            name: "Role",
            columns: table => new
            {
                Id = table.Column<decimal>(type: "decimal(20,0)", nullable: false)
                    .Annotation("SqlServer:Identity", "1, 1"),
                Name = table.Column<string>(type: "nvarchar(450)", nullable: false)
            },
            constraints: table =>
            {
                table.PrimaryKey("PK_Role", x => x.Id);
                table.UniqueConstraint("AK_Role_Name", x => x.Name);
            });

        migrationBuilder.CreateTable(
            name: "User",
            columns: table => new
            {
                Id = table.Column<decimal>(type: "decimal(20,0)", nullable: false)
                    .Annotation("SqlServer:Identity", "1, 1"),
                Username = table.Column<string>(type: "nvarchar(450)", nullable: false),
                PasswordHash = table.Column<string>(type: "nvarchar(max)", nullable: false),
                FirstName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                LastName = table.Column<string>(type: "nvarchar(max)", nullable: false)
            },
            constraints: table =>
            {
                table.PrimaryKey("PK_User", x => x.Id);
                table.UniqueConstraint("AK_User_Username", x => x.Username);
            });

        migrationBuilder.CreateTable(
            name: "UserRoles",
            columns: table => new
            {
                UserId = table.Column<decimal>(type: "decimal(20,0)", nullable: false),
                RoleId = table.Column<decimal>(type: "decimal(20,0)", nullable: false)
            },
            constraints: table =>
            {
                table.PrimaryKey("PK_UserRoles", x => new { x.UserId, x.RoleId });
                table.ForeignKey(
                    name: "FK_UserRoles_Role_RoleId",
                    column: x => x.RoleId,
                    principalTable: "Role",
                    principalColumn: "Id",
                    onDelete: ReferentialAction.Cascade);
                table.ForeignKey(
                    name: "FK_UserRoles_User_UserId",
                    column: x => x.UserId,
                    principalTable: "User",
                    principalColumn: "Id",
                    onDelete: ReferentialAction.Cascade);
            });

        migrationBuilder.InsertData(
            table: "Role",
            columns: new[] { "Id", "Name" },
            values: new object[,]
            {
                { 1m, "Admin" },
                { 2m, "Normal user" }
            });

        migrationBuilder.InsertData(
            table: "User",
            columns: new[] { "Id", "FirstName", "LastName", "PasswordHash", "Username" },
            values: new object[,]
            {
                { 1m, "System", "Admin", "AQAAAAIAAYagAAAAEJt9NjjgjE/IFWCEo/q2keV55MsU5jsJXY8Zp5vpaDHWZIA/fCrYK5Z4JFE2l66iFA==", "systemadmin" },
                { 2m, "Normal", "User", "AQAAAAIAAYagAAAAEOzCrut9AdD8ITnTfSa+DZbe+oH+BGiAZvlLHYGWOgqAJm3mv2bVqQvxxau2xunA4A==", "normaluser" }
            });

        migrationBuilder.InsertData(
            table: "UserRoles",
            columns: new[] { "RoleId", "UserId" },
            values: new object[,]
            {
                { 1m, 1m },
                { 2m, 1m },
                { 2m, 2m }
            });

        migrationBuilder.CreateIndex(
            name: "IX_UserRoles_RoleId",
            table: "UserRoles",
            column: "RoleId");
    }

    /// <inheritdoc />
    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropTable(
            name: "UserRoles");

        migrationBuilder.DropTable(
            name: "Role");

        migrationBuilder.DropTable(
            name: "User");
    }
}
