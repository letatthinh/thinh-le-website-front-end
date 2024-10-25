using Microsoft.Net.Http.Headers;
using System.Net.Http.Headers;

namespace ThinhLeWebsite.ExternalServices;

public partial class UserServiceApiClient : ApiClient, IUserServiceApiClient
{
    public UserServiceApiClient(
        HttpClient httpClient,
        IHttpContextAccessor httpContextAccessor)
    {
        _httpClient = httpClient;
        HttpContextAccessor = httpContextAccessor;
    }

    partial void PrepareRequest(HttpClient client, HttpRequestMessage request, string url)
    {
        if (HttpContextAccessor == null)
        {
            throw new NullReferenceException("HttpContextAccessor is null.");
        }

        string? jsonWebToken = HttpContextAccessor.HttpContext?.Request
            .Headers[HeaderNames.Authorization];

        request.Headers.Authorization = new AuthenticationHeaderValue(
            "Bearer",
            jsonWebToken?.ToString().Replace("Bearer ", string.Empty)
        );
    }
}
