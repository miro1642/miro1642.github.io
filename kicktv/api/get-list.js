import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
    // Obsługa nagłówków CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-heartbeat');

    // Obsługa żądania wstępnego (Preflight)
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // LISTA DOZWOLONYCH HASEŁ (Wpisz tutaj swoje hasło)
    const authorizedPasswords = ['KICK2026', 'mojeDrugieHaslo'];

    // Pobranie hasła bezpośrednio z req.body (automatycznie parsowane przez Vercel)
    let psw = '';
    if (req.body && typeof req.body === 'object' && req.body.password) {
        psw = req.body.password.trim();
    } else if (req.body && typeof req.body === 'string') {
        try {
            const parsed = JSON.parse(req.body);
            if (parsed.password) psw = parsed.password.trim();
        } catch (e) {
            // Jeśli nie uda się sparsować jako JSON, zostaw puste
        }
    }

    // Weryfikacja hasła
    if (!psw || !authorizedPasswords.includes(psw)) {
        return res.status(401).json({ error: 'Password errata 1' });
    }

    // Obsługa zapytania Heartbeat (jeśli frontend wciąż je wysyła)
    if (req.headers['x-heartbeat'] === 'true') {
        return res.status(200).json({ status: 'ok' });
    }

    // Odczyt i wysłanie pliku lista.m3u
    try {
        const filePath = path.join(process.cwd(), 'lista.m3u');
        if (!fs.existsSync(filePath)) {
            return res.status(404).json({ error: 'Plik lista.m3u nie istnieje na serwerze' });
        }
        const m3uContent = fs.readFileSync(filePath, 'utf-8');
        return res.status(200).send(m3uContent);
    } catch (error) {
        return res.status(500).json({ error: 'Errore nel leggere la lista' });
    }
}
