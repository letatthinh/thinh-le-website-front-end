namespace GoogleService.Database.Repositories;

public interface IUnitOfWork
{
    IGoogleDriveImageRepository GoogleDriveImageRepository { get; }
}
