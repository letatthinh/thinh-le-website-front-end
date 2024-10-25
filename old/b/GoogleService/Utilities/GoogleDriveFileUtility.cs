namespace GoogleService.Utilities;

public static class GoogleDriveFileUtility
{
    public static string GetNameFromFileName(string fileName)
    {
        if (string.IsNullOrEmpty(fileName))
        {
            return string.Empty;
        }

        try
        {
            return fileName.Contains('_')
                ? fileName.Split('_')[0]
                : string.Empty;
        }
        catch (Exception exception)
        {
            throw new Exception($"Error while get name from file name '{fileName}', exception: {exception.Message}");
        }
    }

    public static string GetTagsFromFileName(string fileName)
    {
        if (string.IsNullOrEmpty(fileName))
        {
            return string.Empty;
        }

        try
        {
            if (fileName.Contains('_'))
            {
                var tagsAndFileExtension = fileName.Split('_')[1];
                var tags = Path.GetFileNameWithoutExtension(tagsAndFileExtension);

                return tags;
            }

            return string.Empty;

        }
        catch (Exception exception)
        {
            throw new Exception($"Error while get tags from file name '{fileName}', exception: {exception.Message}");
        }
    }
}
