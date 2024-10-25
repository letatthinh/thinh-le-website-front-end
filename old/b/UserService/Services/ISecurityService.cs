using Microsoft.AspNetCore.Identity;
using UserService.Database.Models;

namespace UserService.Services;

public interface ISecurityService
{
    string HashPassword(string password);
    PasswordVerificationResult VerifyPassword(string hashedPassword, string password);
    string CreateJsonWebToken(UserModel userModel);
    string CreateRefreshJsonWebToken();
}
