namespace UserService.Dtos;

public class UserRequestDto
{
    public required string Username { get; set; }

    public required string Password { get; set; }

    public static UserRequestDto CreateEmptyObject()
    {
        return new()
        {
            Username = string.Empty,
            Password = string.Empty
        };
    }
}
