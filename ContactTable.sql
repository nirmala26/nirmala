/****** Script for SelectTopNRows command from SSMS  ******/
SELECT TOP (1000) [ID]
      ,[FirstName]
      ,[LastName]
      ,[Phone]
      ,[City]
  FROM [PhoneBookDB].[dbo].[tblContact]