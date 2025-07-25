const num_of_diners = [
        { value: 1, label: '1' },
        { value: 2, label: '2' },
        { value: 3, label: '3' },
        { value: 4, label: '4' },
        { value: 5, label: '5' },
        { value: 6, label: '6' },
        { value: 7, label: '7' },
        { value: 8, label: '8' },
        { value: 9, label: '9' },
        { value: 10, label: '10' },
    ]

    const occasions = [
        { value: 'birthday', label: 'Birthday' },
        { value: 'engagement', label: 'Engagement' },
        { value: 'anniversery', label: 'Anniversery' }
    ]


const states = [
        // United States (US)
        { value: 'AL', label: 'Alabama', country: 'US' }, { value: 'AK', label: 'Alaska', country: 'US' },
        { value: 'AZ', label: 'Arizona', country: 'US' }, { value: 'AR', label: 'Arkansas', country: 'US' },
        { value: 'CA', label: 'California', country: 'US' }, { value: 'CO', label: 'Colorado', country: 'US' },
        { value: 'CT', label: 'Connecticut', country: 'US' }, { value: 'DE', label: 'Delaware', country: 'US' },
        { value: 'FL', label: 'Florida', country: 'US' }, { value: 'GA', label: 'Georgia', country: 'US' },
        { value: 'HI', label: 'Hawaii', country: 'US' }, { value: 'ID', label: 'Idaho', country: 'US' },
        { value: 'IL', label: 'Illinois', country: 'US' }, { value: 'IN', label: 'Indiana', country: 'US' },
        { value: 'IA', label: 'Iowa', country: 'US' }, { value: 'KS', label: 'Kansas', country: 'US' },
        { value: 'KY', label: 'Kentucky', country: 'US' }, { value: 'LA', label: 'Louisiana', country: 'US' },
        { value: 'ME', label: 'Maine', country: 'US' }, { value: 'MD', label: 'Maryland', country: 'US' },
        { value: 'MA', label: 'Massachusetts', country: 'US' }, { value: 'MI', label: 'Michigan', country: 'US' },
        { value: 'MN', label: 'Minnesota', country: 'US' }, { value: 'MS', label: 'Mississippi', country: 'US' },
        { value: 'MO', label: 'Missouri', country: 'US' }, { value: 'MT', label: 'Montana', country: 'US' },
        { value: 'NE', label: 'Nebraska', country: 'US' }, { value: 'NV', label: 'Nevada', country: 'US' },
        { value: 'NH', label: 'New Hampshire', country: 'US' }, { value: 'NJ', label: 'New Jersey', country: 'US' },
        { value: 'NM', label: 'New Mexico', country: 'US' }, { value: 'NY', label: 'New York', country: 'US' },
        { value: 'NC', label: 'North Carolina', country: 'US' }, { value: 'ND', label: 'North Dakota', country: 'US' },
        { value: 'OH', label: 'Ohio', country: 'US' }, { value: 'OK', label: 'Oklahoma', country: 'US' },
        { value: 'OR', label: 'Oregon', country: 'US' }, { value: 'PA', label: 'Pennsylvania', country: 'US' },
        { value: 'RI', label: 'Rhode Island', country: 'US' }, { value: 'SC', label: 'South Carolina', country: 'US' },
        { value: 'SD', label: 'South Dakota', country: 'US' }, { value: 'TN', label: 'Tennessee', country: 'US' },
        { value: 'TX', label: 'Texas', country: 'US' }, { value: 'UT', label: 'Utah', country: 'US' },
        { value: 'VT', label: 'Vermont', country: 'US' }, { value: 'VA', label: 'Virginia', country: 'US' },
        { value: 'WA', label: 'Washington', country: 'US' }, { value: 'WV', label: 'West Virginia', country: 'US' },
        { value: 'WI', label: 'Wisconsin', country: 'US' }, { value: 'WY', label: 'Wyoming', country: 'US' },

        // Canada (CA)
        { value: 'AB', label: 'Alberta', country: 'CA' }, { value: 'BC', label: 'British Columbia', country: 'CA' },
        { value: 'MB', label: 'Manitoba', country: 'CA' }, { value: 'NB', label: 'New Brunswick', country: 'CA' },
        { value: 'NL', label: 'Newfoundland and Labrador', country: 'CA' }, { value: 'NS', label: 'Nova Scotia', country: 'CA' },
        { value: 'ON', label: 'Ontario', country: 'CA' }, { value: 'PE', label: 'Prince Edward Island', country: 'CA' },
        { value: 'QC', label: 'Quebec', country: 'CA' }, { value: 'SK', label: 'Saskatchewan', country: 'CA' },
        { value: 'NT', label: 'Northwest Territories', country: 'CA' }, { value: 'NU', label: 'Nunavut', country: 'CA' },
        { value: 'YT', label: 'Yukon', country: 'CA' },

        // United Kingdom (GB) - Major regions/countries
        { value: 'ENG', label: 'England', country: 'GB' }, { value: 'SCT', label: 'Scotland', country: 'GB' },
        { value: 'WLS', label: 'Wales', country: 'GB' }, { value: 'NIR', label: 'Northern Ireland', country: 'GB' },

        // Australia (AU)
        { value: 'NSW', label: 'New South Wales', country: 'AU' }, { value: 'VIC', label: 'Victoria', country: 'AU' },
        { value: 'QLD', label: 'Queensland', country: 'AU' }, { value: 'WA', label: 'Western Australia', country: 'AU' },
        { value: 'SA', label: 'South Australia', country: 'AU' }, { value: 'TAS', label: 'Tasmania', country: 'AU' },
        { value: 'ACT', label: 'Australian Capital Territory', country: 'AU' }, { value: 'NT', label: 'Northern Territory', country: 'AU' },

        // Germany (DE) - States (Bundesländer)
        { value: 'BW', label: 'Baden-Württemberg', country: 'DE' }, { value: 'BY', label: 'Bavaria', country: 'DE' },
        { value: 'BE', label: 'Berlin', country: 'DE' }, { value: 'BB', label: 'Brandenburg', country: 'DE' },
        { value: 'HB', label: 'Bremen', country: 'DE' }, { value: 'HH', label: 'Hamburg', country: 'DE' },
        { value: 'HE', label: 'Hesse', country: 'DE' }, { value: 'MV', label: 'Mecklenburg-Vorpommern', country: 'DE' },
        { value: 'NI', label: 'Lower Saxony', country: 'DE' }, { value: 'NW', label: 'North Rhine-Westphalia', country: 'DE' },
        { value: 'RP', label: 'Rhineland-Palatinate', country: 'DE' }, { value: 'SL', label: 'Saarland', country: 'DE' },
        { value: 'SN', label: 'Saxony', country: 'DE' }, { value: 'ST', label: 'Saxony-Anhalt', country: 'DE' },
        { value: 'SH', label: 'Schleswig-Holstein', country: 'DE' }, { value: 'TH', label: 'Thuringia', country: 'DE' },

        // France (FR) - Regions (simplified for common use)
        { value: 'IDF', label: 'Île-de-France', country: 'FR' }, { value: 'ARA', label: 'Auvergne-Rhône-Alpes', country: 'FR' },
        { value: 'BFC', label: 'Bourgogne-Franche-Comté', country: 'FR' }, { value: 'BRE', label: 'Brittany', country: 'FR' },
        { value: 'CVL', label: 'Centre-Val de Loire', country: 'FR' }, { value: 'COR', label: 'Corsica', country: 'FR' },
        { value: 'GES', label: 'Grand Est', country: 'FR' }, { value: 'HDF', label: 'Hauts-de-France', country: 'FR' },
        { value: 'NOR', label: 'Normandy', country: 'FR' }, { value: 'NAQ', label: 'Nouvelle-Aquitaine', country: 'FR' },
        { value: 'OCC', label: 'Occitania', country: 'FR' }, { value: 'PDL', label: 'Pays de la Loire', country: 'FR' },
        { value: 'PAC', label: 'Provence-Alpes-Côte d\'Azur', country: 'FR' },

        // Japan (JP) - Prefectures
        { value: 'HKD', label: 'Hokkaido', country: 'JP' }, { value: 'AOM', label: 'Aomori', country: 'JP' },
        { value: 'IWT', label: 'Iwate', country: 'JP' }, { value: 'MIY', label: 'Miyagi', country: 'JP' },
        { value: 'AKK', label: 'Akita', country: 'JP' }, { value: 'YMG', label: 'Yamagata', country: 'JP' },
        { value: 'FKS', label: 'Fukushima', country: 'JP' }, { value: 'IBR', label: 'Ibaraki', country: 'JP' },
        { value: 'TCH', label: 'Tochigi', country: 'JP' }, { value: 'GUN', label: 'Gunma', country: 'JP' },
        { value: 'SIT', label: 'Saitama', country: 'JP' }, { value: 'CHB', label: 'Chiba', country: 'JP' },
        { value: 'TKY', label: 'Tokyo', country: 'JP' }, { value: 'KNG', label: 'Kanagawa', country: 'JP' },
        { value: 'NIG', label: 'Niigata', country: 'JP' }, { value: 'TYM', label: 'Toyama', country: 'JP' },
        { value: 'ISK', label: 'Ishikawa', country: 'JP' }, { value: 'FKI', label: 'Fukui', country: 'JP' },
        { value: 'YMN', label: 'Yamanashi', country: 'JP' }, { value: 'NGN', label: 'Nagano', country: 'JP' },
        { value: 'GIF', label: 'Gifu', country: 'JP' }, { value: 'SZK', label: 'Shizuoka', country: 'JP' },
        { value: 'AIC', label: 'Aichi', country: 'JP' }, { value: 'MIE', label: 'Mie', country: 'JP' },
        { value: 'SHG', label: 'Shiga', country: 'JP' }, { value: 'KYT', label: 'Kyoto', country: 'JP' },
        { value: 'OSK', label: 'Osaka', country: 'JP' }, { value: 'HYG', label: 'Hyogo', country: 'JP' },
        { value: 'NAR', label: 'Nara', country: 'JP' }, { value: 'WKY', label: 'Wakayama', country: 'JP' },
        { value: 'TTT', label: 'Tottori', country: 'JP' }, { value: 'SNE', label: 'Shimane', country: 'JP' },
        { value: 'OKY', label: 'Okayama', country: 'JP' }, { value: 'HRS', label: 'Hiroshima', country: 'JP' },
        { value: 'YMG', label: 'Yamaguchi', country: 'JP' }, { value: 'TKS', label: 'Tokushima', country: 'JP' },
        { value: 'KGW', label: 'Kagawa', country: 'JP' }, { value: 'EHM', label: 'Ehime', country: 'JP' },
        { value: 'KCH', label: 'Kochi', country: 'JP' }, { value: 'FKO', label: 'Fukuoka', country: 'JP' },
        { value: 'SGA', label: 'Saga', country: 'JP' }, { value: 'NGS', label: 'Nagasaki', country: 'JP' },
        { value: 'KMM', label: 'Kumamoto', country: 'JP' }, { value: 'OIT', label: 'Oita', country: 'JP' },
        { value: 'MYZ', label: 'Miyazaki', country: 'JP' }, { value: 'KGS', label: 'Kagoshima', country: 'JP' },
        { value: 'OKN', label: 'Okinawa', country: 'JP' },

        // China (CN) - Provinces (simplified for common use)
        { value: 'AH', label: 'Anhui', country: 'CN' }, { value: 'BJ', label: 'Beijing', country: 'CN' },
        { value: 'CQ', label: 'Chongqing', country: 'CN' }, { value: 'FJ', label: 'Fujian', country: 'CN' },
        { value: 'GS', label: 'Gansu', country: 'CN' }, { value: 'GD', label: 'Guangdong', country: 'CN' },
        { value: 'GX', label: 'Guangxi', country: 'CN' }, { value: 'GZ', label: 'Guizhou', country: 'CN' },
        { value: 'HA', label: 'Hainan', country: 'CN' }, { value: 'HEB', label: 'Hebei', country: 'CN' },
        { value: 'HLJ', label: 'Heilongjiang', country: 'CN' }, { value: 'HEN', label: 'Henan', country: 'CN' },
        { value: 'HK', label: 'Hong Kong', country: 'CN' }, { value: 'HUB', label: 'Hubei', country: 'CN' },
        { value: 'HUN', label: 'Hunan', country: 'CN' }, { value: 'NM', label: 'Inner Mongolia', country: 'CN' },
        { value: 'JS', label: 'Jiangsu', country: 'CN' }, { value: 'JX', label: 'Jiangxi', country: 'CN' },
        { value: 'JL', label: 'Jilin', country: 'CN' }, { value: 'LN', label: 'Liaoning', country: 'CN' },
        { value: 'MO', label: 'Macau', country: 'CN' }, { value: 'NX', label: 'Ningxia', country: 'CN' },
        { value: 'QH', label: 'Qinghai', country: 'CN' }, { value: 'SN', label: 'Shaanxi', country: 'CN' },
        { value: 'SD', label: 'Shandong', country: 'CN' }, { value: 'SH', label: 'Shanghai', country: 'CN' },
        { value: 'SX', label: 'Shanxi', country: 'CN' }, { value: 'SC', label: 'Sichuan', country: 'CN' },
        { value: 'TW', label: 'Taiwan', country: 'CN' }, { value: 'TJ', label: 'Tianjin', country: 'CN' },
        { value: 'XJ', label: 'Xinjiang', country: 'CN' }, { value: 'XZ', label: 'Xizang (Tibet)', country: 'CN' },
        { value: 'YN', label: 'Yunnan', country: 'CN' }, { value: 'ZJ', label: 'Zhejiang', country: 'CN' },

        // India (IN) - States (simplified for common use)
        { value: 'AP', label: 'Andhra Pradesh', country: 'IN' }, { value: 'AR', label: 'Arunachal Pradesh', country: 'IN' },
        { value: 'AS', label: 'Assam', country: 'IN' }, { value: 'BR', label: 'Bihar', country: 'IN' },
        { value: 'CT', label: 'Chhattisgarh', country: 'IN' }, { value: 'GA', label: 'Goa', country: 'IN' },
        { value: 'GJ', label: 'Gujarat', country: 'IN' }, { value: 'HR', label: 'Haryana', country: 'IN' },
        { value: 'HP', label: 'Himachal Pradesh', country: 'IN' }, { value: 'JH', label: 'Jharkhand', country: 'IN' },
        { value: 'KA', label: 'Karnataka', country: 'IN' }, { value: 'KL', label: 'Kerala', country: 'IN' },
        { value: 'MP', label: 'Madhya Pradesh', country: 'IN' }, { value: 'MH', label: 'Maharashtra', country: 'IN' },
        { value: 'MN', label: 'Manipur', country: 'IN' }, { value: 'ML', label: 'Meghalaya', country: 'IN' },
        { value: 'MZ', label: 'Mizoram', country: 'IN' }, { value: 'NL', label: 'Nagaland', country: 'IN' },
        { value: 'OR', label: 'Odisha', country: 'IN' }, { value: 'PB', label: 'Punjab', country: 'IN' },
        { value: 'RJ', label: 'Rajasthan', country: 'IN' }, { value: 'SK', label: 'Sikkim', country: 'IN' },
        { value: 'TN', label: 'Tamil Nadu', country: 'IN' }, { value: 'TG', label: 'Telangana', country: 'IN' },
        { value: 'TR', label: 'Tripura', country: 'IN' }, { value: 'UP', label: 'Uttar Pradesh', country: 'IN' },
        { value: 'UK', label: 'Uttarakhand', country: 'IN' }, { value: 'WB', label: 'West Bengal', country: 'IN' },
        { value: 'AN', label: 'Andaman and Nicobar Islands', country: 'IN' }, { value: 'CH', label: 'Chandigarh', country: 'IN' },
        { value: 'DN', label: 'Dadra and Nagar Haveli and Daman and Diu', country: 'IN' }, { value: 'DL', label: 'Delhi', country: 'IN' },
        { value: 'JK', label: 'Jammu and Kashmir', country: 'IN' }, { value: 'LA', label: 'Ladakh', country: 'IN' },
        { value: 'LD', label: 'Lakshadweep', country: 'IN' }, { value: 'PY', label: 'Puducherry', 'country': 'IN' },

        // Brazil (BR) - States
        { value: 'AC', label: 'Acre', country: 'BR' }, { value: 'AL', label: 'Alagoas', country: 'BR' },
        { value: 'AP', label: 'Amapá', country: 'BR' }, { value: 'AM', label: 'Amazonas', country: 'BR' },
        { value: 'BA', label: 'Bahia', country: 'BR' }, { value: 'CE', label: 'Ceará', country: 'BR' },
        { value: 'DF', label: 'Distrito Federal', country: 'BR' }, { value: 'ES', label: 'Espírito Santo', country: 'BR' },
        { value: 'GO', label: 'Goiás', country: 'BR' }, { value: 'MA', label: 'Maranhão', country: 'BR' },
        { value: 'MT', label: 'Mato Grosso', country: 'BR' }, { value: 'MS', label: 'Mato Grosso do Sul', country: 'BR' },
        { value: 'MG', label: 'Minas Gerais', country: 'BR' }, { value: 'PA', label: 'Pará', country: 'BR' },
        { value: 'PB', label: 'Paraíba', country: 'BR' }, { value: 'PR', label: 'Paraná', country: 'BR' },
        { value: 'PE', label: 'Pernambuco', country: 'BR' }, { value: 'PI', label: 'Piauí', country: 'BR' },
        { value: 'RJ', label: 'Rio de Janeiro', country: 'BR' }, { value: 'RN', label: 'Rio Grande do Norte', country: 'BR' },
        { value: 'RS', label: 'Rio Grande do Sul', country: 'BR' }, { value: 'RO', label: 'Rondônia', country: 'BR' },
        { value: 'RR', label: 'Roraima', country: 'BR' }, { value: 'SC', label: 'Santa Catarina', country: 'BR' },
        { value: 'SP', label: 'São Paulo', country: 'BR' }, { value: 'SE', label: 'Sergipe', country: 'BR' },
        { value: 'TO', label: 'Tocantins', country: 'BR' },
    ]

const countries = [
        { value: 'US', label: 'United States' },
        { value: 'CA', label: 'Canada' },
        { value: 'GB', label: 'United Kingdom' },
        { value: 'AU', label: 'Australia' },
        { value: 'DE', label: 'Germany' },
        { value: 'FR', label: 'France' },
        { value: 'JP', label: 'Japan' },
        { value: 'CN', label: 'China' },
        { value: 'IN', label: 'India' },
        { value: 'BR', label: 'Brazil' },
    ]


export { num_of_diners, occasions, states, countries }