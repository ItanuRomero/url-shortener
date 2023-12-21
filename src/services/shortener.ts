export class URLShortener {
    constructor() {
        this.urlMap = new Map();
        this.loadFromDB();
    }

    async loadFromDB() {
        try {
            const data = await Deno.readTextFile('db.json');
            const parsedData = JSON.parse(data)
            if (Array.isArray(parsedData)) {
                parsedData.forEach(([shortURL, longURL]) => {
                    this.urlMap.set(shortURL, longURL);
                });
            }
        } catch (error) {
            this.persist()
        }
    }

    shortenURL(longURL) {
        // Simulate hashing for simplicity (You can use actual hash functions like MD5, SHA-1, etc.)
        const hash = this.generateHash(longURL);
        const shortURL = `http://short.url/${hash.substring(0, 8)}`; // Simulated short URL

        this.urlMap.set(shortURL, longURL);
        this.persist(); // Save to db.json
        return shortURL;
    }

    retrieveURL(shortURL) {
        const longURL = this.urlMap.get(shortURL);
        return longURL || 'URL not found';
    }

    generateHash(input) {
        // A simple hashing function (this is NOT a secure hash function)
        let hash = 0;
        if (input.length === 0) return hash;
        for (let i = 0; i < input.length; i++) {
            const char = input.charCodeAt(i);
            hash = (hash << 5) - hash + char;
            hash |= 0; // Convert to 32bit integer
        }
        return String(hash);
    }

    async persist() {
        const data = Array.from(this.urlMap.entries());
        await Deno.writeTextFile('db.json', JSON.stringify(data));
    }
}
