CREATE TABLE CongestionZoneDim(
	CongestionZoneKey int NOT NULL,
	CongestionZoneId varchar(30) NULL,
	CongestionZoneShortName varchar(150) NULL,
	CongestionZoneLongName varchar(300) NULL
);

CREATE TABLE CongestionZoneZipCodeMappingFact(
	CongestionZoneZipCodeMappingKey bigint NOT NULL,
	CongestionZoneZipCodeMappingId varchar(30) NULL,
	EnergyProviderKey int NULL,
	CongestionZoneKey int NULL,
	ZipCode varchar(30) NULL
);

CREATE TABLE DateDim(
	DateKey bigint NULL,
	DateValue date NULL,
	DisplayString varchar(50) NULL,
	DayOfWeek varchar(50) NULL,
	IndexDayOfWeek tinyint NULL,
	WeekNumber tinyint NULL,
	LastFridayDate date NULL,
	MonthEndDate date NULL,
	DayOfMonth tinyint NULL,
	MonthName varchar(50) NULL,
	MonthNumber tinyint NULL,
	QuarterNumber tinyint NULL,
	DayOfYear smallint NULL,
	Year smallint NULL,
	OccurrenceInMonth tinyint NULL,
	TomorrowDate date NULL,
	YearMonth varchar(50) NULL,
	Weekend tinyint NULL,
	FiscalYear smallint NULL,
	FiscalMonth tinyint NULL,
	FiscalQuarter tinyint NULL,
	DayOfWeekAbbreviation varchar(50) NULL,
	FormattedMonthYear varchar(50) NULL,
	FormattedQuarterNumber varchar(50) NULL,
	FormattedQuarterYear varchar(50) NULL,
	IsDayAfterHoliday tinyint NULL,
	IsDayBeforeHoliday tinyint NULL,
	IsHoliday tinyint NULL,
	IsoWeekNumber tinyint NULL,
	IsoWeekYear varchar(50) NULL,
	IsoYearWeek varchar(50) NULL,
	IsWeekendIncludingFriday tinyint NULL,
	MonthNameAbbreviation varchar(50) NULL,
	MonthStartDate date NULL,
	MonthYear varchar(50) NULL,
	NextYearDate date NULL,
	PreviousYearDate date NULL,
	QuarterEndDate date NULL,
	QuarterStartDate date NULL,
	QuarterYear varchar(50) NULL,
	WeekEndDate date NULL,
	WeekStartDate date NULL,
	WeekYear varchar(50) NULL,
	YearEndDate date NULL,
	YearFormattedMonth varchar(50) NULL,
	YearFormattedQuarter varchar(50) NULL,
	YearQuarter varchar(50) NULL,
	YearStartDate date NULL,
	YearWeek varchar(50) NULL
);

CREATE TABLE EnergyProviderDim(
	EnergyProviderKey int NOT NULL,
	EnergyProviderId varchar(30) NULL,
	EnergyProviderShortName varchar(150) NULL,
	EnergyProviderLongName varchar(300) NULL
);

CREATE TABLE ErcotFact(
	ErcotKey bigint NOT NULL,
	UtilityProviderKey int NOT NULL,
	ESIId varchar(30) NULL,
	Address varchar(300) NULL,
	AddressOverflow varchar(120) NULL,
	City varchar(60) NULL,
	State varchar(30) NULL,
	ZipCode varchar(30) NULL,
	DunsNumber varchar(30) NULL,
	MeterReadCycle varchar(30) NULL,
	Status varchar(30) NULL,
	PremiseType varchar(60) NULL,
	PowerRegion varchar(30) NULL,
	StationCode varchar(30) NULL,
	StationName varchar(100) NULL,
	IsMetered varchar(10) NULL,
	OpenServiceOrders varchar(300) NULL,
	POLRCustomerClass varchar(60) NULL,
	SettlementAMSIndicator varchar(10) NULL,
	TDSPAMSIndicator varchar(30) NULL,
	SwitchHoldIndicator varchar(10) NULL,
	LoadDate datetime NULL,
	UpdateDate datetime NULL
);

CREATE TABLE PriceMatrixFact(
	PriceMatrixKey bigint NOT NULL,
	EnergyProviderKey int NULL,
	UtilityProviderKey int NULL,
	ServiceStartDateKey int NULL,
	StateKey int NULL,
	CongestionZoneKey int NULL,
	RateEffectiveDateKey int NULL,
	TermLength int NULL,
	LoadFactor int NULL,
	IsCongestionIncluded tinyint NULL,
	EnergyRate numeric(18, 6) NULL,
	AnnualVolumeLowerBound int NULL,
	AnnualVolumeUpperBound int NULL,
	LoadDate date NULL,
	UpdateDate date NULL
);

CREATE TABLE StateDim(
	StateKey int NOT NULL,
	StateId varchar(30) NULL,
	StateAbbreviation varchar(2) NULL,
	StateName varchar(300) NULL
);

CREATE TABLE UtilityProviderDim(
	UtilityProviderKey int NOT NULL,
	UtilityProviderId varchar(30) NULL,
	UtilityProviderShortName varchar(150) NULL,
	UtilityProviderLongName varchar(300) NULL,
	DunsNumber varchar(30) NULL
);