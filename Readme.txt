

1)
For git repository for this project go to:
https://github.com/miticv/OwinAngularBoilerplate

2)
Microsoft SQL Server Data Tools - Business Intelligence for Visual Studio 2013:
http://www.microsoft.com/en-us/download/confirmation.aspx?id=42313

3)
For running test cases:
  a)you can use api to gegister user:
  Create user:  username = "miticv@gmail.com", password = "Test!234"

  b) manualy in the sql tables you have to do create admin role and add this user it.
  (since api will not allow non-admin users to create roles)
  Create role: "Admin"
  Add above user to Admin role!!!

  c) Also add role: "Test" it is used for testing


  4) Add Refresh Token Tables:
-------------------------------
USE [identity]
GO

/****** Object:  Table [dbo].[Client]    Script Date: 12/1/2014 2:07:09 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Clients](
	[Id] [nvarchar](50) NOT NULL,
	[Secret] [nvarchar](256) NOT NULL,
	[Name] [nvarchar](100) NULL,
	[ApplicationType] [int] NULL,
	[Active] [bit] NULL,
	[RefreshTokenLifeTime] [int] NULL,
	[AllowedOrigin] [nvarchar](100) NULL,
 CONSTRAINT [PK_Client] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

CREATE TABLE [dbo].[RefreshTokens](
	[Id] [nvarchar](50) NOT NULL,
	[Subject] [nvarchar](50) NOT NULL,
	[ClientId] [nvarchar](50) NOT NULL,
	[IssuedUtc] [datetime] NOT NULL,
	[ExpiresUtc] [datetime] NOT NULL,
	[ProtectedTicket] [varchar](MAX) NOT NULL,
 CONSTRAINT [PK_RefreshToken] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
-------------------------------

INSERT INTO [dbo].[Clients] ([Id] ,[Secret],[Name],[ApplicationType],[Active],[RefreshTokenLifeTime],[AllowedOrigin])
     VALUES ('app','if7MXRQfo6ZO0zx/D2cEiX+DsSKMKwrhAl1ImZRJgGQ=','AngularJs Front End Applicatrion (non confidential)', 0, 1, 7200, 'http://localhost:59690/');
          
INSERT INTO [dbo].[Clients] ([Id] ,[Secret],[Name],[ApplicationType],[Active],[RefreshTokenLifeTime],[AllowedOrigin])
     VALUES ('consoleApp','if7MXRQfo6ZO0zx/D2cEiX+DsSKMKwrhAl1ImZRJgGQ=','Console App (confidential)', 1, 0, 14400, '*');
GO

INSERT INTO [dbo].[AspNetRoles] ([Name])  VALUES ('Admin')
INSERT INTO [dbo].[AspNetRoles] ([Name])  VALUES ('Test')

GO


INSERT INTO [dbo].[AspNetUsers] ([Email],[EmailConfirmed],[PasswordHash],[SecurityStamp],[PhoneNumber],[PhoneNumberConfirmed],[TwoFactorEnabled],[LockoutEndDateUtc],[LockoutEnabled],[AccessFailedCount],[UserName])
     VALUES('miticv@gmail.com',0,'AMAAeglsP9Er115Yo5g2GyxRhyxvII9zxA7xajQh/pdpWVnark+oNu0ytrtBNoed4Q==','35001d6c-94a0-4527-9cec-a6a97637477f',NULL,0,0,NULL,1,0,'miticv@gmail.com')
GO


INSERT INTO [dbo].[Resources]
           ([ResourceCode],[ResourceGroup],[English],[Chinese],[SerbianLatin],[Serbian],[Italian],[CreateDate],[CreatedBy],[LastUpdateDate],[LastUpdatedBy])
     VALUES
           ('Language','Language','Languahen' 'English', 'Languahe chinese','Languahe Serbian','Languahe Serbian cyr','Languahe Italian','2001/1/1',1,'2001/1/1',1);
