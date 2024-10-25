using AutoMapper;
using UserService.Database.Models;
using UserService.Dtos;

namespace UserService.Services.Mappers;

public class RoleMappingService : Profile
{
    public RoleMappingService()
    {
        _ = CreateMap<RoleDto, RoleModel>().ReverseMap();
    }
}
