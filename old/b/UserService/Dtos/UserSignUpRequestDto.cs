namespace UserService.Dtos;

public class UserSignUpRequestDto : UserRequestDto
{
    public required string FirstName { get; set; }

    public required string LastName { get; set; }

    public ICollection<RoleDto> Roles { get; set; } = [];
}
