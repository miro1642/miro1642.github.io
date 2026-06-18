import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
    // Pełne nagłówki CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') return res.status(200).end();

    try {
        // Wymuszenie poprawnej ścieżki niezależnie od katalogu roboczego Vercel
        const filePath = path.join(process.cwd(), 'lista.m3u');
        
        if (!fs.existsSync(filePath)) {
            return res.status(404).json({ error: 'Plik lista.m3u nie został znaleziony w katalogu głównym.' });
        }

        const m3uContent = fs.readFileSync(filePath, 'utf-8');
        
        // Ustawienie nagłówka tekstowego
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        return res.status(200).send(m3uContent);
    } catch (error) {
        return res.status(500).json({ error: 'Błąd serwera podczas odczytu pliku', details: error.message });
    }
}
