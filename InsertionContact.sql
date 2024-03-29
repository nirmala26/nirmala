USE [PhoneBookDB]
GO
/****** Object:  StoredProcedure [dbo].[InsertionContact]    Script Date: 12/2/2019 1:10:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
ALTER PROCEDURE [dbo].[InsertionContact]

	@FirstName varchar(50),
		@LastName varchar(50),
			@Phone varchar(50),
				@City varchar(50)
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	insert into tblContact (FirstName,LastName,Phone,City) values (@FirstName,@LastName,@Phone,@City)
END
