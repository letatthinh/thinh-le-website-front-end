using Microsoft.Extensions.DependencyInjection;
using Microsoft.Net.Http.Headers;

namespace Common.Utilities;

public class HttpUtility
{
    public static HttpClient CreateHttpClient(
        IServiceProvider serviceProvider,
        string baseAddress,
        int timeout)
    {
        HttpClient httpClient = serviceProvider.GetRequiredService<HttpClient>();

        httpClient.BaseAddress = new Uri(baseAddress);
        httpClient.DefaultRequestHeaders.Add(HeaderNames.Accept, "application/json");
        httpClient.Timeout = TimeSpan.FromSeconds(timeout);

        return httpClient;
    }
}
