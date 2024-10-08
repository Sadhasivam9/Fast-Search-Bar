document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const suggestionsBox = document.getElementById('suggestions');

    // Dummy data (replace with actual data or fetch from API)
    const countries = [
        { name: 'Afghanistan', capital: 'Kabul' },
        { name: 'Albania', capital: 'Tirana' },
        { name: 'Algeria', capital: 'Algiers' },
        { name: 'Andorra', capital: 'Andorra la Vella' },
        { name: 'Angola', capital: 'Luanda' },
        { name: 'Antigua and Barbuda', capital: 'Saint John\'s' },
        { name: 'Argentina', capital: 'Buenos Aires' },
        { name: 'Armenia', capital: 'Yerevan' },
        { name: 'Australia', capital: 'Canberra' },
        { name: 'Austria', capital: 'Vienna' },
        { name: 'Azerbaijan', capital: 'Baku' },
        { name: 'Bahamas', capital: 'Nassau' },
        { name: 'Bahrain', capital: 'Manama' },
        { name: 'Bangladesh', capital: 'Dhaka' },
        { name: 'Barbados', capital: 'Bridgetown' },
        { name: 'Belarus', capital: 'Minsk' },
        { name: 'Belgium', capital: 'Brussels' },
        { name: 'Belize', capital: 'Belmopan' },
        { name: 'Benin', capital: 'Porto-Novo' },
        { name: 'Bhutan', capital: 'Thimphu' },
        { name: 'Bolivia', capital: 'Sucre' },
        { name: 'Bosnia and Herzegovina', capital: 'Sarajevo' },
        { name: 'Botswana', capital: 'Gaborone' },
        { name: 'Brazil', capital: 'Brasília' },
        { name: 'Brunei', capital: 'Bandar Seri Begawan' },
        { name: 'Bulgaria', capital: 'Sofia' },
        { name: 'Burkina Faso', capital: 'Ouagadougou' },
        { name: 'Burundi', capital: 'Gitega' },
        { name: 'Cabo Verde', capital: 'Praia' },
        { name: 'Cambodia', capital: 'Phnom Penh' },
        { name: 'Cameroon', capital: 'Yaoundé' },
        { name: 'Canada', capital: 'Ottawa' },
        { name: 'Central African Republic', capital: 'Bangui' },
        { name: 'Chad', capital: 'N\'Djamena' },
        { name: 'Chile', capital: 'Santiago' },
        { name: 'China', capital: 'Beijing' },
        { name: 'Colombia', capital: 'Bogotá' },
        { name: 'Comoros', capital: 'Moroni' },
        { name: 'Congo (Congo-Brazzaville)', capital: 'Brazzaville' },
        { name: 'Costa Rica', capital: 'San José' },
        { name: 'Croatia', capital: 'Zagreb' },
        { name: 'Cuba', capital: 'Havana' },
        { name: 'Cyprus', capital: 'Nicosia' },
        { name: 'Czech Republic', capital: 'Prague' },
        { name: 'Democratic Republic of the Congo', capital: 'Kinshasa' },
        { name: 'Denmark', capital: 'Copenhagen' },
        { name: 'Djibouti', capital: 'Djibouti' },
        { name: 'Dominica', capital: 'Roseau' },
        { name: 'Dominican Republic', capital: 'Santo Domingo' },
        { name: 'Ecuador', capital: 'Quito' },
        { name: 'Egypt', capital: 'Cairo' },
        { name: 'El Salvador', capital: 'San Salvador' },
        { name: 'Equatorial Guinea', capital: 'Malabo' },
        { name: 'Eritrea', capital: 'Asmara' },
        { name: 'Estonia', capital: 'Tallinn' },
        { name: 'Eswatini', capital: 'Mbabane' },
        { name: 'Ethiopia', capital: 'Addis Ababa' },
        { name: 'Fiji', capital: 'Suva' },
        { name: 'Finland', capital: 'Helsinki' },
        { name: 'France', capital: 'Paris' },
        { name: 'Gabon', capital: 'Libreville' },
        { name: 'Gambia', capital: 'Banjul' },
        { name: 'Georgia', capital: 'Tbilisi' },
        { name: 'Germany', capital: 'Berlin' },
        { name: 'Ghana', capital: 'Accra' },
        { name: 'Greece', capital: 'Athens' },
        { name: 'Grenada', capital: 'Saint George\'s' },
        { name: 'Guatemala', capital: 'Guatemala City' },
        { name: 'Guinea', capital: 'Conakry' },
        { name: 'Guinea-Bissau', capital: 'Bissau' },
        { name: 'Guyana', capital: 'Georgetown' },
        { name: 'Haiti', capital: 'Port-au-Prince' },
        { name: 'Honduras', capital: 'Tegucigalpa' },
        { name: 'Hungary', capital: 'Budapest' },
        { name: 'Iceland', capital: 'Reykjavík' },
        { name: 'India', capital: 'New Delhi' },
        { name: 'Indonesia', capital: 'Jakarta' },
        { name: 'Iran', capital: 'Tehran' },
        { name: 'Iraq', capital: 'Baghdad' },
        { name: 'Ireland', capital: 'Dublin' },
        { name: 'Israel', capital: 'Jerusalem' },
        { name: 'Italy', capital: 'Rome' },
        { name: 'Jamaica', capital: 'Kingston' },
        { name: 'Japan', capital: 'Tokyo' },
        { name: 'Jordan', capital: 'Amman' },
        { name: 'Kazakhstan', capital: 'Astana' },
        { name: 'Kenya', capital: 'Nairobi' },
        { name: 'Kiribati', capital: 'South Tarawa' },
        { name: 'Kuwait', capital: 'Kuwait City' },
        { name: 'Kyrgyzstan', capital: 'Bishkek' },
        { name: 'Laos', capital: 'Vientiane' },
        { name: 'Latvia', capital: 'Riga' },
        { name: 'Lebanon', capital: 'Beirut' },
        { name: 'Lesotho', capital: 'Maseru' },
        { name: 'Liberia', capital: 'Monrovia' },
        { name: 'Libya', capital: 'Tripoli' },
        { name: 'Liechtenstein', capital: 'Vaduz' },
        { name: 'Lithuania', capital: 'Vilnius' },
        { name: 'Luxembourg', capital: 'Luxembourg' },
        { name: 'Madagascar', capital: 'Antananarivo' },
        { name: 'Malawi', capital: 'Lilongwe' },
        { name: 'Malaysia', capital: 'Kuala Lumpur' },
        { name: 'Maldives', capital: 'Malé' },
        { name: 'Mali', capital: 'Bamako' },
        { name: 'Malta', capital: 'Valletta' },
        { name: 'Marshall Islands', capital: 'Majuro' },
        { name: 'Mauritania', capital: 'Nouakchott' },
        { name: 'Mauritius', capital: 'Port Louis' },
        { name: 'Mexico', capital: 'Mexico City' },
        { name: 'Micronesia', capital: 'Palikir' },
        { name: 'Moldova', capital: 'Chisinau' },
        { name: 'Monaco', capital: 'Monaco' },
        { name: 'Mongolia', capital: 'Ulaanbaatar' },
        { name: 'Montenegro', capital: 'Podgorica' },
        { name: 'Morocco', capital: 'Rabat' },
        { name: 'Mozambique', capital: 'Maputo' },
        { name: 'Myanmar (Burma)', capital: 'Naypyidaw' },
        { name: 'Namibia', capital: 'Windhoek' },
        { name: 'Nauru', capital: 'Yaren' },
        { name: 'Nepal', capital: 'Kathmandu' },
        { name: 'Netherlands', capital: 'Amsterdam' },
        { name: 'New Zealand', capital: 'Wellington' },
        { name: 'Nicaragua', capital: 'Managua' },
        { name: 'Niger', capital: 'Niamey' },
        { name: 'Nigeria', capital: 'Abuja' },
        { name: 'North Korea', capital: 'Pyongyang' },
        { name: 'North Macedonia', capital: 'Skopje' },
        { name: 'Norway', capital: 'Oslo' },
        { name: 'Oman', capital: 'Muscat' },
        { name: 'Pakistan', capital: 'Islamabad' },
        { name: 'Palau', capital: 'Ngerulmud' },
        { name: 'Panama', capital: 'Panama City' },
        { name: 'Papua New Guinea', capital: 'Port Moresby' },
        { name: 'Paraguay', capital: 'Asunción' },
        { name: 'Peru', capital: 'Lima' },
        { name: 'Philippines', capital: 'Manila' },
        { name: 'Poland', capital: 'Warsaw' },
        { name: 'Portugal', capital: 'Lisbon' },
        { name: 'Qatar', capital: 'Doha' },
        { name: 'Romania', capital: 'Bucharest' },
        { name: 'Russia', capital: 'Moscow' },
        { name: 'Rwanda', capital: 'Kigali' },
        { name: 'Saint Kitts and Nevis', capital: 'Basseterre' },
        { name: 'Saint Lucia', capital: 'Castries' },
        { name: 'Saint Vincent and the Grenadines', capital: 'Kingstown' },
        { name: 'Samoa', capital: 'Apia' },
        { name: 'San Marino', capital: 'San Marino' },
        { name: 'Sao Tome and Principe', capital: 'São Tomé' },
        { name: 'Saudi Arabia', capital: 'Riyadh' },
        { name: 'Senegal', capital: 'Dakar' },
        { name: 'Serbia', capital: 'Belgrade' },
        { name: 'Seychelles', capital: 'Victoria' },
        { name: 'Sierra Leone', capital: 'Freetown' },
        { name: 'Singapore', capital: 'Singapore' },
        { name: 'Slovakia', capital: 'Bratislava' },
        { name: 'Slovenia', capital: 'Ljubljana' },
        { name: 'Solomon Islands', capital: 'Honiara' },
        { name: 'Somalia', capital: 'Mogadishu' },
        { name: 'South Africa', capital: 'Pretoria' },
        { name: 'South Korea', capital: 'Seoul' },
        { name: 'South Sudan', capital: 'Juba' },
        { name: 'Spain', capital: 'Madrid' },
        { name: 'Sri Lanka', capital: 'Sri Jayawardenepura Kotte' },
        { name: 'Sudan', capital: 'Khartoum' },
        { name: 'Suriname', capital: 'Paramaribo' },
        { name: 'Sweden', capital: 'Stockholm' },
        { name: 'Switzerland', capital: 'Bern' },
        { name: 'Syria', capital: 'Damascus' },
        { name: 'Taiwan', capital: 'Taipei' },
        { name: 'Tajikistan', capital: 'Dushanbe' },
        { name: 'Tanzania', capital: 'Dodoma' },
        { name: 'Thailand', capital: 'Bangkok' },
        { name: 'Timor-Leste', capital: 'Dili' },
        { name: 'Togo', capital: 'Lomé' },
        { name: 'Tonga', capital: 'Nukuʻalofa' },
        { name: 'Trinidad and Tobago', capital: 'Port of Spain' },
        { name: 'Tunisia', capital: 'Tunis' },
        { name: 'Turkey', capital: 'Ankara' },
        { name: 'Turkmenistan', capital: 'Ashgabat' },
        { name: 'Tuvalu', capital: 'Funafuti' },
        { name: 'Uganda', capital: 'Kampala' },
        { name: 'Ukraine', capital: 'Kyiv' },
        { name: 'United Arab Emirates', capital: 'Abu Dhabi' },
        { name: 'United Kingdom', capital: 'London' },
        { name: 'United States', capital: 'Washington, D.C.' },
        { name: 'Uruguay', capital: 'Montevideo' },
        { name: 'Uzbekistan', capital: 'Tashkent' },
        { name: 'Vanuatu', capital: 'Port Vila' },
        { name: 'Vatican City', capital: 'Vatican City' },
        { name: 'Venezuela', capital: 'Caracas' },
        { name: 'Vietnam', capital: 'Hanoi' },
        { name: 'Yemen', capital: 'Sana\'a' },
        { name: 'Zambia', capital: 'Lusaka' },
        { name: 'Zimbabwe', capital: 'Harare' }
        // Add more countries
    ];

    searchInput.addEventListener('input', function () {
        const query = this.value.toLowerCase();
        suggestionsBox.innerHTML = '';

        if (query) {
            const filteredCountries = countries.filter(country =>
                country.name.toLowerCase().includes(query) ||
                country.capital.toLowerCase().includes(query)
            );

            filteredCountries.forEach(country => {
                const div = document.createElement('div');
                div.textContent = `${country.name} - ${country.capital}`;
                div.classList.add('suggestion-item');
                div.addEventListener('click', () => {
                    searchInput.value = `${country.name} - ${country.capital}`;
                    suggestionsBox.innerHTML = '';
                });
                suggestionsBox.appendChild(div);
            });
        }
    });
});
