using GoogleService.Database;
using GoogleService.Database.Repositories;
using GoogleService.Services;
using Microsoft.EntityFrameworkCore;

var webApplicationBuilder = WebApplication.CreateBuilder(args);

// Add services to the container.

webApplicationBuilder.Services.AddControllers();

var frontEndApplicationOrigin = "frontEndApplicationOrigin";
webApplicationBuilder.Services.AddCors(options =>
{
    options.AddPolicy(
        name: frontEndApplicationOrigin,
        policy =>
        {
            policy
                .WithOrigins("https://localhost:3000")
                .AllowAnyHeader()
                .WithMethods("GET", "POST");
        });
});

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
webApplicationBuilder.Services.AddEndpointsApiExplorer();
webApplicationBuilder.Services.AddSwaggerGen();

AddDatabaseContextService(webApplicationBuilder);
AddServicesForDenpendencyInjection(webApplicationBuilder);

var app = webApplicationBuilder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors(frontEndApplicationOrigin);

app.UseAuthorization();

app.MapControllers();

app.Run();

static void AddDatabaseContextService(WebApplicationBuilder webApplicationBuilder)
{
    _ = webApplicationBuilder.Services.AddDbContext<DatabaseContext>(databaseContextOptionswebApplicationBuilder =>
    {
        string connectionString = webApplicationBuilder.Configuration.GetConnectionString("google")!;
        _ = databaseContextOptionswebApplicationBuilder.UseSqlServer(connectionString);
    });
}

static void AddServicesForDenpendencyInjection(WebApplicationBuilder webApplicationBuilder)
{
    // Repositories
    _ = webApplicationBuilder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
    _ = webApplicationBuilder.Services.AddScoped<IGoogleDriveImageRepository, GoogleDriveImageRepository>();

    // Services
    _ = webApplicationBuilder.Services.AddScoped<IGoogleDriveService, GoogleDriveService>();

    // External services
    _ = webApplicationBuilder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
}
