using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using UserService.Database.Models;
using UserService.Dtos;

namespace UserService.Services;

public class SecurityService(
    IConfiguration _configuration,
    IPasswordHasher<UserRequestDto> _passwordHasher
) : ISecurityService
{
    public string HashPassword(string password)
    {
        return _passwordHasher.HashPassword(
            UserRequestDto.CreateEmptyObject(),
            password);
    }

    public PasswordVerificationResult VerifyPassword(string hashedPassword, string password)
    {
        return _passwordHasher.VerifyHashedPassword(
            UserRequestDto.CreateEmptyObject(),
            hashedPassword,
            password);
    }

    public string CreateJsonWebToken(UserModel userModel)
    {
        List<Claim> userClaims = AddUserClaims(userModel);

        string jsonWebTokenIssuer = _configuration["JsonWebToken:Issuer"]!;
        string jsonWebTokenSecretKey = _configuration["JsonWebToken:SecretKey"]!;

        SymmetricSecurityKey symmetricSecurityKey = new(
            Encoding.UTF8.GetBytes(jsonWebTokenSecretKey));
        SigningCredentials signingCredentials = new(
            symmetricSecurityKey,
            SecurityAlgorithms.HmacSha256);

        JwtSecurityToken jsonWebToken = new(
            issuer: jsonWebTokenIssuer,
            claims: userClaims,
            notBefore: DateTime.UtcNow,
            expires: DateTime.UtcNow.AddDays(7), // [Tip] Set the expiration date of the token.
            signingCredentials: signingCredentials
        );

        return new JwtSecurityTokenHandler().WriteToken(jsonWebToken);
    }

    public string CreateRefreshJsonWebToken()
    {
        byte[] a32bytesNumber = new byte[32];

        using RandomNumberGenerator randomNumber = RandomNumberGenerator.Create();
        randomNumber.GetBytes(a32bytesNumber);

        return Convert.ToBase64String(a32bytesNumber);
    }

    private List<Claim> AddUserClaims(UserModel existingUserModel)
    {
        string[] jsonWebTokenAudiences = _configuration.GetSection("JsonWebToken:Audiences")!.Get<string[]>()!;

        List<Claim> userClaims =
        [
            new(JwtRegisteredClaimNames.Sub, existingUserModel.Username),
            // [Tip] this guarantees the token is unique
            new(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            new("username", existingUserModel.Username),
            new(JwtRegisteredClaimNames.GivenName, existingUserModel.FirstName),
            new(JwtRegisteredClaimNames.FamilyName, existingUserModel.LastName)
        ];

        foreach (RoleModel userRole in existingUserModel.Roles!)
        {
            userClaims.Add(new(ClaimTypes.Role, userRole.Name));
        }

        foreach (string audience in jsonWebTokenAudiences)
        {
            userClaims.Add(new("aud", audience));
        }

        return userClaims;
    }
}
