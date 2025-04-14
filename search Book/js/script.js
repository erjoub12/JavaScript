function searchBooks() {
    const query = document.getElementById('searchInput').value;
    const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=10`;
  
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const results = document.getElementById('results');
        results.innerHTML = '';
  
        data.docs.forEach(book => {
          const coverUrl = book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
            : 'https://via.placeholder.com/150';
  
          const card = document.createElement('div');
          card.className = 'book-card';
          card.innerHTML = `
            <img src="${coverUrl}" alt="Cover">
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author_name?.[0] || 'Unknown'}</p>
            <p><strong>First Published:</strong> ${book.first_publish_year || 'N/A'}</p>
            <p><strong>Age Limit:</strong> Not Rated</p>
            <p><strong>Company:</strong> N/A</p>
            <p><strong>Genre:</strong> N/A</p>
            <p><strong>Platform:</strong> Book</p>
            <p><strong>Release Date:</strong> ${book.first_publish_year || 'N/A'}</p>
          `;
          results.appendChild(card);
        });
      });
  }
  