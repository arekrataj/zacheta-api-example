# Edu Depth – Backend Server

This repository contains the **Node.js** backend server that provides API access to digital collections from **Zachęta – National Gallery of Art** and other museums sharing their resources. It demonstrates how to use the **Open Zachęta API** in a practical context. Alongside the frontend repository ([hackarton-zacheta-dla-sztuki](https://github.com/propanibutan/hackarton-zacheta-dla-sztuki)), it forms the **Edu Depth** application.

**Edu Depth** won **3rd place** in the **Hack(art)hon 2022** competition organized by:
- [Centrum Cyfrowe Foundation](https://centrumcyfrowe.pl/en/homepage/)
- [Zachęta – National Gallery of Art](https://zacheta.art.pl/en/?setlang=1)
- [Mentors4Starters](https://mentors4starters.pl/)
- [Generator Pomysłów](https://generatorpomyslow.pl/)

## About Edu Depth

Edu Depth is an educational tool aimed at:
- Helping teachers quickly access high-quality art reproductions.
- Encouraging students to engage emotionally with art, going beyond typical school curricula.
- Providing a user-friendly approach for exploring digital art collections, including features that can benefit people with disabilities.

The project features:
- **Frontend**: Built with React and Sass (see [hackarton-zacheta-dla-sztuki](https://github.com/propanibutan/hackarton-zacheta-dla-sztuki)).
- **Backend**: (This repository) Node.js server (Express/GraphQL) exposing endpoints for cultural institutions’ APIs.

---

## Installation and Setup

1. **Clone or Download the Repository**
   ```bash
   git clone https://github.com/YourUsername/your-backend-repo.git
   cd your-backend-repo
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Build the Application**
   ```bash
   npm run build
   ```
   This will compile and bundle the source code into a production-ready form.

4. **Start the Server**
   ```bash
   npm start
   ```
   The server (Express/GraphQL) will start and typically listen on `http://localhost:3000` (unless configured otherwise).

### API Key Configuration

To access the **Zachęta API**, you need to provide an **API Key**. Open the `apis/zacheta.ts` file and replace the placeholder API key with your own.

Example:
```typescript
this._axiosInstance.defaults.headers.common["Authorization"] = 'Bearer YOUR_API_KEY_HERE';
```
Make sure to keep your API key secure and do not commit it to public repositories.

### Testing the API

- **GraphQL Endpoint**:  
  Visit `http://localhost:3000/graphql` to use GraphiQL or GraphQL Playground (if enabled).
  
- **cURL / Postman / Similar Tools**:  
  You can test queries with:
  ```bash
  curl -X POST -H "Content-Type: application/json" \
  -d '{ "query": "{ __typename }" }' \
  http://localhost:3000/graphql
  ```
  Replace the query body with the actual GraphQL queries you want to test.

---

## Hack(art)hon 2022 – About

**Hack(art)hon 2022** was a design sprint for open-source educational tools for [Zachęta – National Gallery of Art](https://zacheta.art.pl/en/?setlang=1). Solutions were aimed at enhancing online collections and making them more accessible, particularly for users with disabilities.  

### Organizers
- [Centrum Cyfrowe Foundation](https://centrumcyfrowe.pl/en/homepage/)
- [Zachęta – National Gallery of Art](https://zacheta.art.pl/en/?setlang=1)
- [Mentors4Starters](https://mentors4starters.pl/)
- [Generator Pomysłów](https://generatorpomyslow.pl/)

---

## License

This project is licensed under:
- [Creative Commons CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
- [GNU Affero General Public License, version 3](https://www.gnu.org/licenses/agpl-3.0.en.html)

---

## Contact

If you have any questions or feedback, please open an issue in this repository.

Thank you for your interest in **Edu Depth**!

