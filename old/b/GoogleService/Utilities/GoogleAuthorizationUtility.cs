using Google.Apis.Auth.OAuth2;
using Google.Apis.Util.Store;

namespace GoogleService.Utilities;

public static class GoogleAuthorizationUtility
{
    public static async Task<UserCredential> GetUserCredentialsAsync(
        string credetialsJsonPath,
        List<string> apiScopes,
        string tokenPath)
    {
        using var stream = new FileStream(
            credetialsJsonPath,
            FileMode.Open,
            FileAccess.Read);

        /* The file token.json stores the user's access and refresh tokens, and is created
         automatically when the authorization flow completes for the first time. */
        return await GoogleWebAuthorizationBroker
            .AuthorizeAsync(
                GoogleClientSecrets.FromStream(stream).Secrets,
                apiScopes,
                "user",
                CancellationToken.None,
                new FileDataStore(tokenPath, true)
            );
    }
}
