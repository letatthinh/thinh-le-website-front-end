namespace UserService.Dtos;

public class UserResponseDto
{
    public string Username { get; set; } = string.Empty;

    public string FirstName { get; set; } = string.Empty;

    public string LastName { get; set; } = string.Empty;

    public ICollection<RoleDto> Roles { get; set; } = [];
}
