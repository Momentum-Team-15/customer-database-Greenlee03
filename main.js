const customerContainer = document.querySelector('#customer-container')
function buildDirectory(customerArray) {
    for (let customer of customerArray) {
        let customerDiv = document.createElement('div');
        customerDiv.classList.add('customer');

        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1)
        }

        let picture = document.createElement('img');
        customerDiv.appendChild(picture);
        picture.src = customer.picture.large;
        picture.classList.add('pictures');
        

        let name = document.createElement('p');
        name.innerText = `${capitalizeFirstLetter(customer.name.title)} ${capitalizeFirstLetter(customer.name.first)} ${capitalizeFirstLetter(customer.name.last)}`;
        customerDiv.appendChild(name);
        name.classList.add('name')

        let email = document.createElement('p');
        email.innerText = `${customer.email}`;
        customerDiv.appendChild(email);
        email.classList.add('email')

        let adressOne = document.createElement('p');
        adressOne.innerText = `${customer.location.street.number} ${customer.location.street.name}`;
        customerDiv.appendChild(adressOne);

        let adressTwo = document.createElement('p');
        adressTwo.innerText = `${customer.location.city}, ${customer.location.state} ${customer.location.postcode}`;
        customerDiv.appendChild(adressTwo);
        adressTwo.classList.add('adressTwo')


        let dateOfBirth = document.createElement('p');
        dateOfBirth.innerText = `Date of birth: ${moment(customer.dob.date).format('MMM Do YYYY')}`;
        customerDiv.appendChild(dateOfBirth);

        let registered = document.createElement('p');
        registered.innerText = `Customer since: ${moment(customer.registered.date).format('MMM Do YYYY')}`;
        customerDiv.appendChild(registered);

        customerContainer.appendChild(customerDiv);
    }
}

buildDirectory(customers)