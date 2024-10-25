using AutoMapper;
using UserService.Database.Models;
using UserService.Dtos;

namespace UserService.Services.Mappers;

public class UserMappingService : Profile
{
    public UserMappingService()
    {
        _ = CreateMap<UserSignUpRequestDto, UserModel>();
        _ = CreateMap<UserModel, UserResponseDto>();
        _ = CreateMap<UserModel, UserSignInResponseDto>();
    }
}
