    document.addEventListener('DOMContentLoaded', function () {
            document.querySelector('form').onsubmit = function (event) {
                event.preventDefault(); // Prevent form submission

                const currency = document.querySelector('#currency').value.toUpperCase();
                const apiUrl = `https://api.exchangerate-api.com/v4/latest/USD`;

                fetch(apiUrl)
                    .then(response => response.json())
                    .then(data => {
                        const rate = data.rates[currency];

                        if (rate !== undefined) {
                            document.querySelector('#result').innerHTML = `1 USD is equal to ${rate.toFixed(2)} ${currency}`;
                        } else {
                            document.querySelector('#result').innerHTML = `Invalid currency code: ${currency}`;
                        }
                    })
                    .catch(error => {
                        document.querySelector('#result').innerHTML = `Error: Unable to fetch exchange rates.`;
                        console.error('Error:', error);
                    });
            };
        });
    