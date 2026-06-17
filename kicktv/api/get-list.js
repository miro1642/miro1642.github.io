import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
    // CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-heartbeat');

    if (req.method === 'OPTIONS') return res.status(200).end();

    // Legge il corpo della richiesta
    let body = {};
    try {
        const buffers = [];
        for await (const chunk of req) { buffers.push(chunk); }
        const data = Buffer.concat(buffers).toString();
        body = data ? JSON.parse(data) : {};
    } catch (e) {
        body = {};
    }

    const psw = body.password ? body.password.trim() : '';

    // ==========================================
    // TUTAJ WPISUJESZ HASŁO BEZPOŚREDNIO W KODZIE
    // ==========================================
    const authorizedPasswords = ['KICK2026', 'mojeDrugieHaslo'];

    // Verifica se la password è tra quelle autorizzate
    if (!psw || !authorizedPasswords.includes(psw)) {
        return res.status(401).json({ error: 'Password errata' });
    }

    // Heartbeat: Odpowiedź sukcesu (bez zapisu w bazie danych)
    if (req.headers['x-heartbeat'] === 'true') {
        return res.status(200).json({ status: 'ok' });
    }

    // Legge il file lista.m3u dalla root del progetto
    try {
        const filePath = path.join(process.cwd(), 'lista.m3u');
        const m3uContent = fs.readFileSync(filePath, 'utf-8');
        return res.status(200).send(m3uContent);
    } catch (error) {
        return res.status(500).json({ error: 'Errore nel leggere la lista' });
    }
}
