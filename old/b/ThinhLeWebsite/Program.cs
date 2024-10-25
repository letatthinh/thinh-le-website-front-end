using Common.Utilities;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.OpenApi.Models;
using ThinhLeWebsite.ExternalServices;

var webApplicationBuilder = WebApplication.CreateBuilder(args);

// Add services to the container.

webApplicationBuilder.Services.AddControllers();

// Add Authentication and Authorization services
AddAuthenticationServices(webApplicationBuilder);
webApplicationBuilder.Services.AddAuthorization();

webApplicationBuilder.Services.AddHttpClient();
webApplicationBuilder.Services.AddHttpContextAccessor();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
webApplicationBuilder.Services.AddEndpointsApiExplorer();
AddSwaggerGeneratorService(webApplicationBuilder);

AddDatabaseContextService(webApplicationBuilder);
AddServicesForDenpendencyInjection(webApplicationBuilder);

var app = webApplicationBuilder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    _ = app.UseSwagger();
    _ = app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();

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
            options.SaveToken = true;
            options.RequireHttpsMetadata = true;

            var jsonWebTokenAudiences = webApplicationBuilder.Configuration.GetSection("JsonWebToken:Audiences")!.Get<string[]>()!;
            var jsonWebTokenIssuer = webApplicationBuilder.Configuration["JsonWebToken:Issuer"]!;
            var jsonWebTokenSecretKey = webApplicationBuilder.Configuration["JsonWebToken:SecretKey"]!;

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
            Title = "Thinh Le Website API",
            Version = "v1"
        });

        var openApiSecurityScheme = SecurityUtility.CreateOpenApiSecurityScheme();

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
    /*_ = webApplicationBuilder.Services.AddDbContext<DatabaseContext>(databaseContextOptionswebApplicationBuilder =>
    {
        string connectionString = webApplicationBuilder.Configuration.GetConnectionString("users")!;
        _ = databaseContextOptionswebApplicationBuilder.UseSqlServer(connectionString);
    });*/
}

static void AddServicesForDenpendencyInjection(WebApplicationBuilder webApplicationBuilder)
{
    // Libraries

    // Repositories

    // Services

    // External services
    _ = webApplicationBuilder.Services.AddScoped<IUserServiceApiClient>(serviceProvider =>
    {
        var userServiceApiUri = webApplicationBuilder.Configuration["UserServiceApiClient:Uri"]!;
        var userServiceApiTimeout = webApplicationBuilder.Configuration["UserServiceApiClient:Timeout"]!;
        var httpContextAccessor = serviceProvider.GetRequiredService<IHttpContextAccessor>();

        var httpClient = HttpUtility.CreateHttpClient(
            serviceProvider,
            userServiceApiUri,
            Convert.ToInt32(userServiceApiTimeout));

        return new UserServiceApiClient(
            httpClient,
            httpContextAccessor);
    });

    // External services
    //_ = webApplicationBuilder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
}

