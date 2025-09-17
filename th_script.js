const SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSTmb_5cQD8k6GoPk3fRB6dEiz_7PDEbwioH_D4IPSijIFabbT4oO8QaqbIzRrlPvWc6RB7tSPXi-nA/pub?output=csv'; // Replace with your CSV URL

async function loadBlogPosts() {
  try {
    const response = await fetch(SHEET_URL);
    const csvText = await response.text();
    const data = parseCSV(csvText);
    renderPosts(data);
  } catch (err) {
    console.error('Failed to load blog posts', err);
  }
}

function parseCSV(csv) {
  const lines = csv.trim().split('\n');
  const headers = lines[0].split(',');
  return lines.slice(1).map(line => {
    const values = line.split(',');
    return headers.reduce((obj, header, i) => {
      obj[header.trim()] = values[i]?.trim();
      return obj;
    }, {});
  });
}

function renderPosts(posts) {
  const container = document.getElementById('blog-posts');
  posts.forEach(post => {
    const card = document.createElement('div');
    card.className = 'blog-card';
    /*
    const image = document.createElement('img');
    //image.src = post.image || 'https://via.placeholder.com/600x200';
    image.src = post.image ? post.image : 'image/default.jpg';
    */

    const content = document.createElement('div');
    content.className = 'blog-content';
    content.innerHTML = `
      <h3>${post.title}</h3>
      <div class="blog-meta">On ${post.date}</div> 
      <p>${post.content}</p>
    `;
    // By ${post.author} on ${post.date}
    //card.appendChild(image);
    card.appendChild(content);
    container.appendChild(card);
  });
}

loadBlogPosts();
