import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
    // Konfiguracja CORS - pozwala na dostęp z każdej domeny
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') return res.status(200).end();

    // Bezpośrednie czytanie pliku lista.m3u z katalogu głównego projektu
    try {
        const filePath = path.join(process.cwd(), 'lista.m3u');
        const m3uContent = fs.readFileSync(filePath, 'utf-8');
        return res.status(200).send(m3uContent);
    } catch (error) {
        return res.status(500).json({ error: 'Błąd podczas odczytu listy kanałów.' });
    }
}
