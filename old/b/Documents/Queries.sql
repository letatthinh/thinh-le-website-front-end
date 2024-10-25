SELECT * FROM [dbo].[UserRoles] ORDER BY [UserId];
SELECT * FROM [dbo].[Role];
SELECT * FROM [dbo].[User];

DELETE FROM [dbo].[UserRoles];
DELETE FROM [dbo].[Role];
DELETE FROM [dbo].[User];

DROP TABLE [dbo].[__EFMigrationsHistory];
DROP TABLE [dbo].[UserRoles];
DROP TABLE [dbo].[Role];
DROP TABLE [dbo].[User];


/* Google database */

DELETE FROM [dbo].[Image]
DELETE FROM [dbo].[File]

DROP TABLE [dbo].[__EFMigrationsHistory];
DROP TABLE [dbo].[Image];
DROP TABLE [dbo].[File];