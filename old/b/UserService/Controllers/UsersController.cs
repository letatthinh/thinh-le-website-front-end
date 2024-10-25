using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using UserService.Dtos;
using UserService.Services;

namespace UserService.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UsersController(
    IUserService _userService
) : ControllerBase
{
    // POST: api/Users
    [HttpPost("sign-up")]
    [AllowAnonymous]
    [ProducesResponseType(StatusCodes.Status201Created)] // [Tip] For generating response codes on the swagger UI
    [ProducesResponseType(StatusCodes.Status409Conflict)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public async Task<ActionResult<string>> SignUp(UserSignUpRequestDto userSignUpDto)
    {
        try
        {
            bool isUserExist = await _userService.IsUserExistByUsername(userSignUpDto.Username);

            if (isUserExist)
            {
                return Conflict("Username already exists");
            }

            string hashedPassword = _userService.HashUserPassword(userSignUpDto.Password);
            await _userService.CreateUserModel(userSignUpDto, hashedPassword);

            return Created();
        }
        catch (Exception exception)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, exception.Message);
        };
    }

    // POST: api/Users
    [HttpPost("sign-in")]
    [AllowAnonymous]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public async Task<ActionResult<UserSignInResponseDto>> SignIn(UserRequestDto userRequestDto)
    {
        try
        {
            Database.Models.UserModel? existingUserModel = await _userService.GetUserModelByUsernameAsNoTracking(userRequestDto.Username);

            if (existingUserModel == null)
            {
                return NotFound();
            }

            PasswordVerificationResult userPasswordVerificationResult = _userService.VerifyUserPassword(
                existingUserModel.PasswordHash,
                userRequestDto.Password);

            return userPasswordVerificationResult == PasswordVerificationResult.Success
                ? Ok(_userService.CreateUserSignInResponseDto(existingUserModel))
                : NotFound();
        }
        catch (Exception exception)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, exception.Message);
        };
    }

    // GET: api/Users
    [HttpGet("user-response-dtos")]
    [Authorize(Roles = "Admin")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    [ProducesResponseType(StatusCodes.Status403Forbidden)]
    [ProducesResponseType(StatusCodes.Status500InternalServerError)]
    public async Task<ActionResult<IEnumerable<UserResponseDto>>> GetUserResponseDto()
    {
        return Ok(await _userService.GetUserResponseDto());
    }
}
