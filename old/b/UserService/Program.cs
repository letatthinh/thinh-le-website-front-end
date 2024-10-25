using Common.Utilities;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using UserService.Database;
using UserService.Database.Repositories;
using UserService.Dtos;
using UserService.Services;

WebApplicationBuilder webApplicationBuilder = WebApplication.CreateBuilder(args);

// Add services to the container.

webApplicationBuilder.Services.AddControllers();

// [Tip] Config cors
var myAllowSpecificOrigins = "_myAllowSpecificOrigins";
webApplicationBuilder.Services.AddCors(options =>
{
    options.AddPolicy(
        myAllowSpecificOrigins,
        policy =>
        {
            policy
                .WithOrigins("https://localhost:3000") // [Tip] Must not have "/" at the end
                .AllowAnyHeader()
                .WithMethods("GET", "POST");
        });
});

// Add Authentication and Authorization services
AddAuthenticationServices(webApplicationBuilder);
webApplicationBuilder.Services.AddAuthorization();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
webApplicationBuilder.Services.AddEndpointsApiExplorer(); // [Tip] required only for minimal APIs
AddSwaggerGeneratorService(webApplicationBuilder);

AddDatabaseContextService(webApplicationBuilder);
AddServicesForDenpendencyInjection(webApplicationBuilder);

WebApplication app = webApplicationBuilder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    _ = app.UseSwagger();
    _ = app.UseSwaggerUI();
}

app.UseHttpsRedirection();
// [Tip] Add cors configuration
app.UseCors(myAllowSpecificOrigins);

// [Tip] Order matters
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();
app.Run();

// [Tip] Authorize with JWT
static void AddAuthenticationServices(WebApplicationBuilder webApplicationBuilder)
{
    _ = webApplicationBuilder.Services
        .AddAuthentication(authenticationOptions =>
        {
            authenticationOptions.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            authenticationOptions.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            authenticationOptions.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
        })
        .AddJwtBearer(options =>
        {
            // [Tip] May need to install Microsoft.IdentityModel.Tokens package
            options.SaveToken = true;
            options.RequireHttpsMetadata = true;

            string[] jsonWebTokenAudiences = webApplicationBuilder.Configuration.GetSection("JsonWebToken:Audiences")!.Get<string[]>()!;
            string jsonWebTokenIssuer = webApplicationBuilder.Configuration["JsonWebToken:Issuer"]!;
            string jsonWebTokenSecretKey = webApplicationBuilder.Configuration["JsonWebToken:SecretKey"]!;

            options.TokenValidationParameters = SecurityUtility.CreateTokenValidationParameters(
                jsonWebTokenAudiences,
                jsonWebTokenIssuer,
                jsonWebTokenSecretKey);
        });
}

static void AddSwaggerGeneratorService(WebApplicationBuilder webApplicationBuilder)
{
    _ = webApplicationBuilder.Services.AddSwaggerGen(swaggerGeneratorOptions =>
    {
        swaggerGeneratorOptions.SwaggerDoc("v1", new OpenApiInfo
        {
            Title = "User service API",
            Version = "v1"
        });

        OpenApiSecurityScheme openApiSecurityScheme = SecurityUtility.CreateOpenApiSecurityScheme();

        swaggerGeneratorOptions.AddSecurityDefinition(
            JwtBearerDefaults.AuthenticationScheme,
            openApiSecurityScheme
        );

        // [Tip] Allow input the JWT on the Swagger UI
        swaggerGeneratorOptions.AddSecurityRequirement(new OpenApiSecurityRequirement
        {
            {openApiSecurityScheme, Array.Empty<string>()}
        });
    });
}

static void AddDatabaseContextService(WebApplicationBuilder webApplicationBuilder)
{
    _ = webApplicationBuilder.Services.AddDbContext<DatabaseContext>(databaseContextOptionswebApplicationBuilder =>
    {
        string connectionString = webApplicationBuilder.Configuration.GetConnectionString("users")!;
        _ = databaseContextOptionswebApplicationBuilder.UseSqlServer(connectionString);
    });
}

static void AddServicesForDenpendencyInjection(WebApplicationBuilder webApplicationBuilder)
{
    // Libraries
    _ = webApplicationBuilder.Services.AddScoped<IPasswordHasher<UserRequestDto>, PasswordHasher<UserRequestDto>>();

    // Repositories
    _ = webApplicationBuilder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
    _ = webApplicationBuilder.Services.AddScoped<IUserRepository, UserRepository>();
    _ = webApplicationBuilder.Services.AddScoped<IRoleRepository, RoleRepository>();

    // Services
    _ = webApplicationBuilder.Services.AddScoped<IUserService, UserService.Services.UserService>();
    _ = webApplicationBuilder.Services.AddScoped<ISecurityService, SecurityService>();

    // External services
    _ = webApplicationBuilder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
}

