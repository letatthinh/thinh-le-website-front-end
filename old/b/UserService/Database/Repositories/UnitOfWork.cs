namespace UserService.Database.Repositories;

public class UnitOfWork(
    IUserRepository _userRepository,
    IRoleRepository _roleRepository
) : IUnitOfWork
{
    public IUserRepository UserRepository { get; } = _userRepository;
    public IRoleRepository RoleRepository { get; } = _roleRepository;
}
