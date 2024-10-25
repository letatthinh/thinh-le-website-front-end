using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GoogleService.Migrations;

/// <inheritdoc />
public partial class Initialization : Migration
{
    /// <inheritdoc />
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.CreateTable(
            name: "File",
            columns: table => new
            {
                Id = table.Column<decimal>(type: "decimal(20,0)", nullable: false)
                    .Annotation("SqlServer:Identity", "1, 1"),
                FileId = table.Column<string>(type: "nvarchar(max)", nullable: false),
                FileName = table.Column<string>(type: "nvarchar(max)", nullable: false)
            },
            constraints: table =>
            {
                table.PrimaryKey("PK_File", x => x.Id);
            });

        migrationBuilder.CreateTable(
            name: "Image",
            columns: table => new
            {
                Id = table.Column<decimal>(type: "decimal(20,0)", nullable: false),
                Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                Width = table.Column<int>(type: "int", nullable: false),
                Height = table.Column<int>(type: "int", nullable: false),
                Tags = table.Column<string>(type: "nvarchar(max)", nullable: false)
            },
            constraints: table =>
            {
                table.PrimaryKey("PK_Image", x => x.Id);
                table.ForeignKey(
                    name: "FK_Image_File_Id",
                    column: x => x.Id,
                    principalTable: "File",
                    principalColumn: "Id",
                    onDelete: ReferentialAction.Cascade);
            });
    }

    /// <inheritdoc />
    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropTable(
            name: "Image");

        migrationBuilder.DropTable(
            name: "File");
    }
}
