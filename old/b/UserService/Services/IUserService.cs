using Microsoft.AspNetCore.Identity;
using UserService.Database.Models;
using UserService.Dtos;

namespace UserService.Services;

public interface IUserService
{
    Task<bool> IsUserExistByUsername(string username);
    Task<UserModel?> GetUserModelByUsernameAsNoTracking(string username);
    string HashUserPassword(string password);
    PasswordVerificationResult VerifyUserPassword(string hashedPassword, string password);

    Task CreateUserModel(UserSignUpRequestDto userSignUpRequestDto, string hashedPassword);
    Task<IEnumerable<UserResponseDto>> GetUserResponseDto();
    UserSignInResponseDto CreateUserSignInResponseDto(UserModel userModel);
}
