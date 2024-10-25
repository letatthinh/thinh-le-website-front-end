using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Data;
using UserService.Database.Models;
using UserService.Database.Repositories;
using UserService.Dtos;

namespace UserService.Services;

public class UserService(
    ISecurityService _securityService,
    IUnitOfWork _unitOfWork,
    IMapper _mapper
) : IUserService
{
    public async Task<bool> IsUserExistByUsername(string username)
    {
        return await _unitOfWork.UserRepository
            .GetModelsAsQueryableWithoutTracking()
            .AnyAsync(userModel => userModel.Username == username);
    }

    public async Task<UserModel?> GetUserModelByUsernameAsNoTracking(string username)
    {
        return await _unitOfWork.UserRepository
            .GetUsersAsNoTracking()
            .SingleOrDefaultAsync(userModel => Equals(userModel.Username, username));
    }

    public string HashUserPassword(string password)
    {
        return _securityService.HashPassword(password);
    }

    public PasswordVerificationResult VerifyUserPassword(string hashedPassword, string password)
    {
        return _securityService.VerifyPassword(hashedPassword, password);
    }

    public async Task CreateUserModel(UserSignUpRequestDto userSignUpRequestDto, string hashedPassword)
    {
        List<RoleModel> combinedRoleModels = await CombineNewAndExistingRoleModels(userSignUpRequestDto.Roles);

        UserModel userModel = _mapper.Map<UserModel>(userSignUpRequestDto, mappingOptions =>
            // [Tip] Additional mapping operations
            mappingOptions.AfterMap((source, userModel) =>
            {
                userModel.PasswordHash = hashedPassword;
                userModel.Roles = combinedRoleModels;
            })
        );

        _unitOfWork.UserRepository.CreateAsync(userModel);
        _ = await _unitOfWork.UserRepository.SaveChangesAsync();
    }

    public async Task<IEnumerable<UserResponseDto>> GetUserResponseDto()
    {
        return await _unitOfWork.UserRepository
            .GetUsersAsNoTracking()
            .Select(userModel => _mapper.Map<UserResponseDto>(userModel))
            .ToListAsync();
    }

    private async Task<List<RoleModel>> CombineNewAndExistingRoleModels(IEnumerable<RoleDto> roleDtos)
    {
        List<RoleModel> existingRoleModels = await _unitOfWork.RoleRepository
            // [Tip] Must not use AsNoTracking
            // because we have insert operation below from the user repository.
            .GetModelsAsQueryable()
            .ToListAsync();

        List<RoleModel> combinedRoleModels = roleDtos.Select((roleDto) =>
        {
            RoleModel? existingRole = existingRoleModels
                .Where(roleModel => Equals(roleModel.Name, roleDto.Name))
                .SingleOrDefault();

            return existingRole ?? _mapper.Map<RoleModel>(roleDto);
        }).ToList();

        return combinedRoleModels;
    }

    public UserSignInResponseDto CreateUserSignInResponseDto(UserModel userModel)
    {
        return _mapper.Map<UserSignInResponseDto>(userModel, mappingOptions =>
            mappingOptions.AfterMap((source, userResponseDto) =>
            {
                userResponseDto.JsonWebToken = _securityService.CreateJsonWebToken(userModel);
            }));
    }
}
