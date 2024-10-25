namespace UserService.Dtos;

public class UserSignInResponseDto : UserResponseDto
{
    public string JsonWebToken { get; set; } = string.Empty;
}
