"use client";

import React, { useState } from "react";
import * as RPNInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

import { Check, ChevronsUpDown } from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

const frameworks = [
  {
    value: "415-867-5309",
    label: "415-867-5309",
  },
  {
    value: "98765-43210",
    label: "98765-43210",
  },
  {
    value: "7700-900123",
    label: "7700-900123",
  },
  {
    value: "400-123-456",
    label: "400-123-456",
  },
];

type PhoneInputProps = {
  value?: string;
  onChange?: (value: string) => void;
  countries?: { label: string; code: RPNInput.Country }[];
};

const PhoneInput: React.FC<PhoneInputProps> = ({
  countries = [
    { label: "Afghanistan", code: "AF" },
    { label: "Albania", code: "AL" },
    { label: "Algeria", code: "DZ" },
    { label: "Andorra", code: "AD" },
    { label: "Angola", code: "AO" },
    { label: "Antigua and Barbuda", code: "AG" },
    { label: "Argentina", code: "AR" },
    { label: "Armenia", code: "AM" },
    { label: "Australia", code: "AU" },
    { label: "Austria", code: "AT" },
    { label: "Azerbaijan", code: "AZ" },
    { label: "Bahamas", code: "BS" },
    { label: "Bahrain", code: "BH" },
    { label: "Bangladesh", code: "BD" },
    { label: "Barbados", code: "BB" },
    { label: "Belarus", code: "BY" },
    { label: "Belgium", code: "BE" },
    { label: "Belize", code: "BZ" },
    { label: "Benin", code: "BJ" },
    { label: "Bhutan", code: "BT" },
    { label: "Bolivia", code: "BO" },
    { label: "Bosnia and Herzegovina", code: "BA" },
    { label: "Botswana", code: "BW" },
    { label: "Brazil", code: "BR" },
    { label: "Brunei Darussalam", code: "BN" },
    { label: "Bulgaria", code: "BG" },
    { label: "Burkina Faso", code: "BF" },
    { label: "Burundi", code: "BI" },
    { label: "Cabo Verde", code: "CV" },
    { label: "Cambodia", code: "KH" },
    { label: "Cameroon", code: "CM" },
    { label: "Canada", code: "CA" },
    { label: "Central African Republic", code: "CF" },
    { label: "Chad", code: "TD" },
    { label: "Chile", code: "CL" },
    { label: "China", code: "CN" },
    { label: "Colombia", code: "CO" },
    { label: "Comoros", code: "KM" },
    { label: "Congo (Congo-Brazzaville)", code: "CG" },
    { label: "Congo (Congo-Kinshasa)", code: "CD" },
    { label: "Costa Rica", code: "CR" },
    { label: "Croatia", code: "HR" },
    { label: "Cuba", code: "CU" },
    { label: "Cyprus", code: "CY" },
    { label: "Czechia", code: "CZ" },
    { label: "Denmark", code: "DK" },
    { label: "Djibouti", code: "DJ" },
    { label: "Dominica", code: "DM" },
    { label: "Dominican Republic", code: "DO" },
    { label: "Ecuador", code: "EC" },
    { label: "Egypt", code: "EG" },
    { label: "El Salvador", code: "SV" },
    { label: "Equatorial Guinea", code: "GQ" },
    { label: "Eritrea", code: "ER" },
    { label: "Estonia", code: "EE" },
    { label: "Eswatini (fmr. Swaziland)", code: "SZ" },
    { label: "Ethiopia", code: "ET" },
    { label: "Fiji", code: "FJ" },
    { label: "Finland", code: "FI" },
    { label: "France", code: "FR" },
    { label: "Gabon", code: "GA" },
    { label: "Gambia", code: "GM" },
    { label: "Georgia", code: "GE" },
    { label: "Germany", code: "DE" },
    { label: "Ghana", code: "GH" },
    { label: "Greece", code: "GR" },
    { label: "Grenada", code: "GD" },
    { label: "Guatemala", code: "GT" },
    { label: "Guinea", code: "GN" },
    { label: "Guinea-Bissau", code: "GW" },
    { label: "Guyana", code: "GY" },
    { label: "Haiti", code: "HT" },
    { label: "Honduras", code: "HN" },
    { label: "Hungary", code: "HU" },
    { label: "Iceland", code: "IS" },
    { label: "India", code: "IN" },
    { label: "Indonesia", code: "ID" },
    { label: "Iran", code: "IR" },
    { label: "Iraq", code: "IQ" },
    { label: "Ireland", code: "IE" },
    { label: "Israel", code: "IL" },
    { label: "Italy", code: "IT" },
    { label: "Jamaica", code: "JM" },
    { label: "Japan", code: "JP" },
    { label: "Jordan", code: "JO" },
    { label: "Kazakhstan", code: "KZ" },
    { label: "Kenya", code: "KE" },
    { label: "Kiribati", code: "KI" },
    { label: "Kuwait", code: "KW" },
    { label: "Kyrgyzstan", code: "KG" },
    { label: "Laos", code: "LA" },
    { label: "Latvia", code: "LV" },
    { label: "Lebanon", code: "LB" },
    { label: "Lesotho", code: "LS" },
    { label: "Liberia", code: "LR" },
    { label: "Libya", code: "LY" },
    { label: "Liechtenstein", code: "LI" },
    { label: "Lithuania", code: "LT" },
    { label: "Luxembourg", code: "LU" },
    { label: "Madagascar", code: "MG" },
    { label: "Malawi", code: "MW" },
    { label: "Malaysia", code: "MY" },
    { label: "Maldives", code: "MV" },
    { label: "Mali", code: "ML" },
    { label: "Malta", code: "MT" },
    { label: "Marshall Islands", code: "MH" },
    { label: "Mauritania", code: "MR" },
    { label: "Mauritius", code: "MU" },
    { label: "Mexico", code: "MX" },
    { label: "Micronesia", code: "FM" },
    { label: "Moldova", code: "MD" },
    { label: "Monaco", code: "MC" },
    { label: "Mongolia", code: "MN" },
    { label: "Montenegro", code: "ME" },
    { label: "Morocco", code: "MA" },
    { label: "Mozambique", code: "MZ" },
    { label: "Myanmar (Burma)", code: "MM" },
    { label: "Namibia", code: "NA" },
    { label: "Nauru", code: "NR" },
    { label: "Nepal", code: "NP" },
    { label: "Netherlands", code: "NL" },
    { label: "New Zealand", code: "NZ" },
    { label: "Nicaragua", code: "NI" },
    { label: "Niger", code: "NE" },
    { label: "Nigeria", code: "NG" },
    { label: "North Korea", code: "KP" },
    { label: "North Macedonia", code: "MK" },
    { label: "Norway", code: "NO" },
    { label: "Oman", code: "OM" },
    { label: "Pakistan", code: "PK" },
    { label: "Palau", code: "PW" },
    { label: "Palestine", code: "PS" },
    { label: "Panama", code: "PA" },
    { label: "Papua New Guinea", code: "PG" },
    { label: "Paraguay", code: "PY" },
    { label: "Peru", code: "PE" },
    { label: "Philippines", code: "PH" },
    { label: "Poland", code: "PL" },
    { label: "Portugal", code: "PT" },
    { label: "Qatar", code: "QA" },
    { label: "Romania", code: "RO" },
    { label: "Russia", code: "RU" },
    { label: "Rwanda", code: "RW" },
    { label: "Saint Kitts and Nevis", code: "KN" },
    { label: "Saint Lucia", code: "LC" },
    { label: "Saint Vincent and the Grenadines", code: "VC" },
    { label: "Samoa", code: "WS" },
    { label: "San Marino", code: "SM" },
    { label: "Sao Tome and Principe", code: "ST" },
    { label: "Saudi Arabia", code: "SA" },
    { label: "Senegal", code: "SN" },
    { label: "Serbia", code: "RS" },
    { label: "Seychelles", code: "SC" },
    { label: "Sierra Leone", code: "SL" },
    { label: "Singapore", code: "SG" },
    { label: "Slovakia", code: "SK" },
    { label: "Slovenia", code: "SI" },
    { label: "Solomon Islands", code: "SB" },
    { label: "Somalia", code: "SO" },
    { label: "South Africa", code: "ZA" },
    { label: "South Korea", code: "KR" },
    { label: "South Sudan", code: "SS" },
    { label: "Spain", code: "ES" },
    { label: "Sri Lanka", code: "LK" },
    { label: "Sudan", code: "SD" },
    { label: "Suriname", code: "SR" },
    { label: "Sweden", code: "SE" },
    { label: "Switzerland", code: "CH" },
    { label: "Syria", code: "SY" },
    { label: "Taiwan", code: "TW" },
    { label: "Tajikistan", code: "TJ" },
    { label: "Tanzania", code: "TZ" },
    { label: "Thailand", code: "TH" },
    { label: "Timor-Leste", code: "TL" },
    { label: "Togo", code: "TG" },
    { label: "Tonga", code: "TO" },
    { label: "Trinidad and Tobago", code: "TT" },
    { label: "Tunisia", code: "TN" },
    { label: "Turkey", code: "TR" },
    { label: "Turkmenistan", code: "TM" },
    { label: "Tuvalu", code: "TV" },
    { label: "Uganda", code: "UG" },
    { label: "Ukraine", code: "UA" },
    { label: "United Arab Emirates", code: "AE" },
    { label: "United Kingdom", code: "GB" },
    { label: "United States", code: "US" },
    { label: "Uruguay", code: "UY" },
    { label: "Uzbekistan", code: "UZ" },
    { label: "Vanuatu", code: "VU" },
    { label: "Vatican City", code: "VA" },
    { label: "Venezuela", code: "VE" },
    { label: "Vietnam", code: "VN" },
    { label: "Yemen", code: "YE" },
    { label: "Zambia", code: "ZM" },
    { label: "Zimbabwe", code: "ZW" },
  ],
}) => {
  const [selectedCountry, setSelectedCountry] =
    useState<RPNInput.Country>("US");

  const handleCountryChange = (country: RPNInput.Country) => {
    setSelectedCountry(country);
  };

  return (
    <div className="flex items-center gap-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button className="flex items-center px-3 bg-white text-black hover:bg-gray-50 border">
            <Flag
              country={selectedCountry}
              countryName={getCountryName(selectedCountry, countries)}
            />
            <span className="ml-2">{`+${RPNInput.getCountryCallingCode(
              selectedCountry
            )}`}</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="max-w-[200px] max-h-[300px] overflow-y-auto">
          {countries.map(({ label, code }) => (
            <div
              key={code}
              className="flex items-center p-2 cursor-pointer "
              onClick={() => handleCountryChange(code)}
            >
              <Flag country={code} countryName={label} />
              <span className="ml-2">{label}</span>
            </div>
          ))}
        </PopoverContent>
      </Popover>
      {/* <Input
        className="ml-2 flex-1"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder="Enter phone number"
      /> */}
      <ComboboxDemo />
    </div>
  );
};

type FlagProps = {
  country: RPNInput.Country;
  countryName?: string;
};

const Flag: React.FC<FlagProps> = ({ country, countryName }) => {
  const CountryFlag = flags[country];
  return (
    <span
      className="h-5 w-8 overflow-hidden rounded-sm bg-white"
      title={countryName || ""}
    >
      {CountryFlag && <CountryFlag title={countryName || ""} />}
    </span>
  );
};

// Helper function to get country name from country code
const getCountryName = (
  countryCode: RPNInput.Country,
  countries: { label: string; code: RPNInput.Country }[]
): string | undefined => {
  return countries.find((country) => country.code === countryCode)?.label;
};

function ComboboxDemo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select Phone Number"}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search Phone Number" className="h-9" />
          <CommandList>
            <CommandEmpty>Select Phone number</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {framework.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export { PhoneInput };
