namespace GoogleService.Database.Repositories;

public class UnitOfWork(
    IGoogleDriveImageRepository _userRepository
) : IUnitOfWork
{
    public IGoogleDriveImageRepository GoogleDriveImageRepository { get; } = _userRepository;
}
