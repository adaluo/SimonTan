USE [master]
GO

/****** Object:  Database [RealEstate]    Script Date: 12/21/2015 9:15:35 PM ******/
CREATE DATABASE [RealEstate]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'RealEstate', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.MSSQLSERVER\MSSQL\DATA\RealEstate.mdf' , SIZE = 4096KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'RealEstate_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.MSSQLSERVER\MSSQL\DATA\RealEstate_log.ldf' , SIZE = 1024KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO

ALTER DATABASE [RealEstate] SET COMPATIBILITY_LEVEL = 120
GO

IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [RealEstate].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO

ALTER DATABASE [RealEstate] SET ANSI_NULL_DEFAULT OFF 
GO

ALTER DATABASE [RealEstate] SET ANSI_NULLS OFF 
GO

ALTER DATABASE [RealEstate] SET ANSI_PADDING OFF 
GO

ALTER DATABASE [RealEstate] SET ANSI_WARNINGS OFF 
GO

ALTER DATABASE [RealEstate] SET ARITHABORT OFF 
GO

ALTER DATABASE [RealEstate] SET AUTO_CLOSE OFF 
GO

ALTER DATABASE [RealEstate] SET AUTO_SHRINK OFF 
GO

ALTER DATABASE [RealEstate] SET AUTO_UPDATE_STATISTICS ON 
GO

ALTER DATABASE [RealEstate] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO

ALTER DATABASE [RealEstate] SET CURSOR_DEFAULT  GLOBAL 
GO

ALTER DATABASE [RealEstate] SET CONCAT_NULL_YIELDS_NULL OFF 
GO

ALTER DATABASE [RealEstate] SET NUMERIC_ROUNDABORT OFF 
GO

ALTER DATABASE [RealEstate] SET QUOTED_IDENTIFIER OFF 
GO

ALTER DATABASE [RealEstate] SET RECURSIVE_TRIGGERS OFF 
GO

ALTER DATABASE [RealEstate] SET  DISABLE_BROKER 
GO

ALTER DATABASE [RealEstate] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO

ALTER DATABASE [RealEstate] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO

ALTER DATABASE [RealEstate] SET TRUSTWORTHY OFF 
GO

ALTER DATABASE [RealEstate] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO

ALTER DATABASE [RealEstate] SET PARAMETERIZATION SIMPLE 
GO

ALTER DATABASE [RealEstate] SET READ_COMMITTED_SNAPSHOT OFF 
GO

ALTER DATABASE [RealEstate] SET HONOR_BROKER_PRIORITY OFF 
GO

ALTER DATABASE [RealEstate] SET RECOVERY FULL 
GO

ALTER DATABASE [RealEstate] SET  MULTI_USER 
GO

ALTER DATABASE [RealEstate] SET PAGE_VERIFY CHECKSUM  
GO

ALTER DATABASE [RealEstate] SET DB_CHAINING OFF 
GO

ALTER DATABASE [RealEstate] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO

ALTER DATABASE [RealEstate] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO

ALTER DATABASE [RealEstate] SET DELAYED_DURABILITY = DISABLED 
GO

ALTER DATABASE [RealEstate] SET  READ_WRITE 
GO




/****** Object:  Table [dbo].[AspNetRoles]    Script Date: 12/21/2015 9:15:56 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[AspNetRoles](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](256) NOT NULL,
 CONSTRAINT [PK_dbo.AspNetRoles] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO




/****** Object:  Table [dbo].[AspNetUserClaims]    Script Date: 12/21/2015 9:17:04 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[AspNetUserClaims](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NOT NULL,
	[ClaimType] [nvarchar](max) NULL,
	[ClaimValue] [nvarchar](max) NULL,
 CONSTRAINT [PK_dbo.AspNetUserClaims] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO

ALTER TABLE [dbo].[AspNetUserClaims]  WITH CHECK ADD  CONSTRAINT [FK_dbo.AspNetUserClaims_dbo.AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO

ALTER TABLE [dbo].[AspNetUserClaims] CHECK CONSTRAINT [FK_dbo.AspNetUserClaims_dbo.AspNetUsers_UserId]
GO



/****** Object:  Table [dbo].[AspNetUserLogins]    Script Date: 12/21/2015 9:17:22 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[AspNetUserLogins](
	[LoginProvider] [nvarchar](128) NOT NULL,
	[ProviderKey] [nvarchar](128) NOT NULL,
	[UserId] [int] NOT NULL,
 CONSTRAINT [PK_dbo.AspNetUserLogins] PRIMARY KEY CLUSTERED 
(
	[LoginProvider] ASC,
	[ProviderKey] ASC,
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE [dbo].[AspNetUserLogins]  WITH CHECK ADD  CONSTRAINT [FK_dbo.AspNetUserLogins_dbo.AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO

ALTER TABLE [dbo].[AspNetUserLogins] CHECK CONSTRAINT [FK_dbo.AspNetUserLogins_dbo.AspNetUsers_UserId]
GO


/****** Object:  Table [dbo].[AspNetUserRoles]    Script Date: 12/21/2015 9:17:44 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[AspNetUserRoles](
	[UserId] [int] NOT NULL,
	[RoleId] [int] NOT NULL,
 CONSTRAINT [PK_dbo.AspNetUserRoles] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC,
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE [dbo].[AspNetUserRoles]  WITH CHECK ADD  CONSTRAINT [FK_dbo.AspNetUserRoles_dbo.AspNetRoles_RoleId] FOREIGN KEY([RoleId])
REFERENCES [dbo].[AspNetRoles] ([Id])
ON DELETE CASCADE
GO

ALTER TABLE [dbo].[AspNetUserRoles] CHECK CONSTRAINT [FK_dbo.AspNetUserRoles_dbo.AspNetRoles_RoleId]
GO

ALTER TABLE [dbo].[AspNetUserRoles]  WITH CHECK ADD  CONSTRAINT [FK_dbo.AspNetUserRoles_dbo.AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO

ALTER TABLE [dbo].[AspNetUserRoles] CHECK CONSTRAINT [FK_dbo.AspNetUserRoles_dbo.AspNetUsers_UserId]
GO


/****** Object:  Table [dbo].[AspNetUsers]    Script Date: 12/21/2015 9:18:00 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[AspNetUsers](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Email] [nvarchar](256) NULL,
	[EmailConfirmed] [bit] NOT NULL,
	[PasswordHash] [nvarchar](max) NULL,
	[SecurityStamp] [nvarchar](max) NULL,
	[PhoneNumber] [nvarchar](max) NULL,
	[PhoneNumberConfirmed] [bit] NOT NULL,
	[TwoFactorEnabled] [bit] NOT NULL,
	[LockoutEndDateUtc] [datetime] NULL,
	[LockoutEnabled] [bit] NOT NULL,
	[AccessFailedCount] [int] NOT NULL,
	[UserName] [nvarchar](256) NOT NULL,
 CONSTRAINT [PK_dbo.AspNetUsers] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO


/****** Object:  Table [dbo].[Clients]    Script Date: 12/21/2015 9:18:19 PM ******/
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


/****** Object:  Table [dbo].[RefreshTokens]    Script Date: 12/21/2015 9:18:35 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

SET ANSI_PADDING ON
GO

CREATE TABLE [dbo].[RefreshTokens](
	[Id] [nvarchar](50) NOT NULL,
	[Subject] [nvarchar](50) NOT NULL,
	[ClientId] [nvarchar](50) NOT NULL,
	[IssuedUtc] [datetime] NOT NULL,
	[ExpiresUtc] [datetime] NOT NULL,
	[ProtectedTicket] [varchar](max) NOT NULL,
 CONSTRAINT [PK_RefreshToken] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO

SET ANSI_PADDING OFF
GO


/****** Object:  Table [dbo].[Resources]    Script Date: 12/21/2015 9:18:52 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Resources](
	[ResourceId] [int] IDENTITY(1,1) NOT NULL,
	[ResourceCode] [nvarchar](max) NOT NULL,
	[ResourceGroup] [nvarchar](max) NOT NULL,
	[English] [nvarchar](max) NOT NULL,
	[Chinese] [nvarchar](max) NULL,
	[SerbianLatin] [nvarchar](max) NULL,
	[Serbian] [nvarchar](max) NULL,
	[Italian] [nvarchar](max) NULL,
	[CreateDate] [datetime] NOT NULL,
	[CreatedBy] [int] NOT NULL,
	[LastUpdateDate] [datetime] NOT NULL,
	[LastUpdatedBy] [int] NOT NULL,
 CONSTRAINT [PK_dbo.Resources] PRIMARY KEY CLUSTERED 
(
	[ResourceId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

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
