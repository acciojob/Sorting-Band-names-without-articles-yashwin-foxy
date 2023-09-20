//your code here

 function removeArticles(name) {
            return name.replace(/^(a |an |the )/i, '').trim();
        }

        // Array of band names
        let bandNames = ['The Rolling Stones', 'The Beatles', 'Led Zeppelin', 'Pink Floyd', 'Aerosmith'];

        // Remove articles and sort the array
        bandNames.sort((a, b) => {
            const nameA = removeArticles(a).toLowerCase();
            const nameB = removeArticles(b).toLowerCase();
            return nameA.localeCompare(nameB);
        });

        // Get the ul element
        const ul = document.getElementById('band');

        // Add band names to the ul element
        bandNames.forEach(name => {
            const li = document.createElement('li');
            li.textContent = name;
            ul.appendChild(li);
        });
    





