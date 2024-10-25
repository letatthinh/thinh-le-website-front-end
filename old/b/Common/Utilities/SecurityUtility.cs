
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Text;

namespace Common.Utilities;

public class SecurityUtility
{
    public static TokenValidationParameters CreateTokenValidationParameters(
        string[] jsonWebTokenAudiences,
        string jsonWebTokenIssuer,
        string jsonWebTokenSecretKey)
    {

        return new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidAudiences = jsonWebTokenAudiences,
            ValidIssuer = jsonWebTokenIssuer,
            IssuerSigningKey = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(jsonWebTokenSecretKey)
            ),
            // [Tip] default is set to additional 5 minutes before the token gets expired.
            ClockSkew = TimeSpan.Zero
        };
    }

    public static OpenApiSecurityScheme CreateOpenApiSecurityScheme()
    {
        return new()
        {
            Name = "Authorization",
            Description = "Standard Authorization header using the Bearer scheme. Example: \"bearer {token}\"",
            In = ParameterLocation.Header,
            Type = SecuritySchemeType.Http,
            BearerFormat = "JWT",
            Scheme = JwtBearerDefaults.AuthenticationScheme,
            Reference = new OpenApiReference
            {
                Id = JwtBearerDefaults.AuthenticationScheme,
                Type = ReferenceType.SecurityScheme
            }
        };
    }
}
