using AutoMapper;
using GoogleService.Database.Models;
using GoogleService.Dtos;
using GoogleService.Utilities;

namespace GoogleService.Services.Mappers;

public class GoogleDriveImageMappingService : Profile
{
    public GoogleDriveImageMappingService()
    {
        _ = CreateMap<Google.Apis.Drive.v3.Data.File, GoogleDriveImageModel>()
            .ForMember(
                googleDriveImage => googleDriveImage.Id,
                memberConfigurationExpression => memberConfigurationExpression
                    .Ignore()
            )
            .ForMember(
                googleDriveImage => googleDriveImage.FileId,
                memberConfigurationExpression => memberConfigurationExpression
                    .MapFrom(googleDriveFile => googleDriveFile.Id)
            )
            .ForMember(
                googleDriveImage => googleDriveImage.FileName,
                memberConfigurationExpression => memberConfigurationExpression
                    .MapFrom(googleDriveFile => googleDriveFile.Name)
            )
            .ForMember(
                googleDriveImage => googleDriveImage.Name,
                memberConfigurationExpression => memberConfigurationExpression
                    .MapFrom(googleDriveFile => GoogleDriveFileUtility.GetNameFromFileName(googleDriveFile.Name))
            )
            .ForMember(
                googleDriveImage => googleDriveImage.Width,
                memberConfigurationExpression => memberConfigurationExpression
                    .MapFrom(googleDriveFile => googleDriveFile.ImageMediaMetadata.Width ?? 0)
            )
            .ForMember(
                googleDriveImage => googleDriveImage.Height,
                memberConfigurationExpression => memberConfigurationExpression
                    .MapFrom(googleDriveFile => googleDriveFile.ImageMediaMetadata.Height ?? 0)
            )
            .ForMember(
                googleDriveImage => googleDriveImage.Tags,
                memberConfigurationExpression => memberConfigurationExpression
                    .MapFrom(googleDriveFile => GoogleDriveFileUtility.GetTagsFromFileName(googleDriveFile.Name))
            );
        _ = CreateMap<GoogleDriveImageModel, GoogleDriveImageResponseDto>()
            .ForMember(
                googleDriveImageResponse => googleDriveImageResponse.Source,
                memberConfigurationExpression => memberConfigurationExpression
                    .MapFrom(googleDriveImage => GoogleDriveUtility.CreateUploadContentUri(googleDriveImage.FileId))
            );
    }
}
