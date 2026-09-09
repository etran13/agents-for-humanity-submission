from enum import Enum

class OrganizationSize(str, Enum):
    SIZE_1_10 = "1–10 employees"
    SIZE_11_50 = "11–50 employees"
    SIZE_51_250 = "51–250 employees"
    SIZE_251_500 = "251–500 employees"
    SIZE_500_PLUS = "500+ employees"

class OrganizationType(str, Enum):
    STATE_GOVERNMENT = "State Government"
    COUNTY_GOVERNMENT = "County Government"
    CITY_OR_TOWNSHIP_GOVERNMENT = "City or Township Government"
    SPECIAL_DISTRICT_GOVERNMENT = "Special District Government"
    REGIONAL_ORGANIZATION = "Regional Organization"
    US_TERRITORY_OR_POSSESSION = "U.S. Territory or Possession"
    INDEPENDENT_SCHOOL_DISTRICT = "Independent School District"
    PUBLIC_STATE_CONTROLLED_INSTITUTION_OF_HIGHER_EDUCATION = (
        "Public/State Controlled Institution of Higher Education"
    )
    FEDERALLY_RECOGNIZED_TRIBAL_GOVERNMENT = (
        "Indian/Native American Tribal Government (Federally Recognized)"
    )
    OTHER_TRIBAL_GOVERNMENT = (
        "Indian/Native American Tribal Government (Other than Federally Recognized)"
    )
    TRIBALLY_DESIGNATED_ORGANIZATION = (
        "Indian/Native American Tribally Designated Organization"
    )
    PUBLIC_INDIAN_HOUSING = "Public/Indian Housing"
    NONPROFIT_501C3 = (
        "Nonprofit with 501C3 IRS Status (Other than Institution of Higher Education)"
    )
    NONPROFIT_NON_501C3 = (
        "Nonprofit without 501C3 IRS Status (Other than Institution of Higher Education)"
    )
    PRIVATE_INSTITUTION_OF_HIGHER_EDUCATION = (
        "Private Institution of Higher Education"
    )
    INDIVIDUAL = "Individual"
    FOR_PROFIT = "For-Profit Organization (Other than Small Business)"
    SMALL_BUSINESS = "Small Business"
    HISPANIC_SERVING_INSTITUTION = "Hispanic-serving Institution"
    HBCU = "Historically Black Colleges and Universities (HBCUs)"
    TCCU = "Tribally Controlled Colleges and Universities (TCCUs)"
    ALASKA_NATIVE_NATIVE_HAWAIIAN_INSTITUTION = (
        "Alaska Native and Native Hawaiian Serving Institutions"
    )
    NON_US_ENTITY = "Non-US Entity"
    OTHER = "Other"

class State(str, Enum):
    ALABAMA = "Alabama"
    ALASKA = "Alaska"
    ARIZONA = "Arizona"
    ARKANSAS = "Arkansas"
    CALIFORNIA = "California"
    COLORADO = "Colorado"
    CONNECTICUT = "Connecticut"
    DELAWARE = "Delaware"
    FLORIDA = "Florida"
    GEORGIA = "Georgia"
    HAWAII = "Hawaii"
    IDAHO = "Idaho"
    ILLINOIS = "Illinois"
    INDIANA = "Indiana"
    IOWA = "Iowa"
    KANSAS = "Kansas"
    KENTUCKY = "Kentucky"
    LOUISIANA = "Louisiana"
    MAINE = "Maine"
    MARYLAND = "Maryland"
    MASSACHUSETTS = "Massachusetts"
    MICHIGAN = "Michigan"
    MINNESOTA = "Minnesota"
    MISSISSIPPI = "Mississippi"
    MISSOURI = "Missouri"
    MONTANA = "Montana"
    NEBRASKA = "Nebraska"
    NEVADA = "Nevada"
    NEW_HAMPSHIRE = "New Hampshire"
    NEW_JERSEY = "New Jersey"
    NEW_MEXICO = "New Mexico"
    NEW_YORK = "New York"
    NORTH_CAROLINA = "North Carolina"
    NORTH_DAKOTA = "North Dakota"
    OHIO = "Ohio"
    OKLAHOMA = "Oklahoma"
    OREGON = "Oregon"
    PENNSYLVANIA = "Pennsylvania"
    RHODE_ISLAND = "Rhode Island"
    SOUTH_CAROLINA = "South Carolina"
    SOUTH_DAKOTA = "South Dakota"
    TENNESSEE = "Tennessee"
    TEXAS = "Texas"
    UTAH = "Utah"
    VERMONT = "Vermont"
    VIRGINIA = "Virginia"
    WASHINGTON = "Washington"
    WEST_VIRGINIA = "West Virginia"
    WISCONSIN = "Wisconsin"
    WYOMING = "Wyoming"
    DISTRICT_OF_COLUMBIA = "District of Columbia"

class FundingInstrumentType(str, Enum):
    GRANT = "Grant"
    COOPERATIVE_AGREEMENT = "Cooperative Agreement"
    PROCUREMENT_CONTRACT = "Procurement Contract"
    OTHER = "Other"