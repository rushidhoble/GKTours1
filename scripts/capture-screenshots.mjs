import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer-core';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/') reqPath = '/index.html';
  const filePath = path.join(distDir, reqPath);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath);
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

const PORT = 4173;
server.listen(PORT, async () => {
  console.log(`Preview server running at http://localhost:${PORT}`);

  const chromePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const artifactDir = 'C:\\Users\\words\\.gemini\\antigravity\\brain\\b7283294-f139-4143-b383-01bd55cbdc72\\screenshots';
  const localDir = path.join(projectRoot, 'screenshots');

  if (!fs.existsSync(artifactDir)) fs.mkdirSync(artifactDir, { recursive: true });
  if (!fs.existsSync(localDir)) fs.mkdirSync(localDir, { recursive: true });

  let browser;
  try {
    const tempProfileDir = path.join(projectRoot, '.puppeteer-temp', String(Date.now()));
    if (!fs.existsSync(tempProfileDir)) fs.mkdirSync(tempProfileDir, { recursive: true });

    browser = await puppeteer.launch({
      executablePath: chromePath,
      headless: true,
      userDataDir: tempProfileDir,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu', '--no-first-run']
    });

    const page = await browser.newPage();

    // 1. Desktop Viewport
    console.log('Capturing Desktop Hero & Fullpage...');
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
    await page.goto(`http://localhost:${PORT}`, { waitUntil: 'networkidle0' });
    await new Promise((r) => setTimeout(r, 2200)); // wait for preloader to complete

    const deskHero = path.join(artifactDir, 'desktop-hero.png');
    await page.screenshot({ path: deskHero });
    fs.copyFileSync(deskHero, path.join(localDir, 'desktop-hero.png'));
    console.log('✓ Saved desktop-hero.png');

    const deskFull = path.join(artifactDir, 'desktop-fullpage.png');
    await page.screenshot({ path: deskFull, fullPage: true });
    fs.copyFileSync(deskFull, path.join(localDir, 'desktop-fullpage.png'));
    console.log('✓ Saved desktop-fullpage.png');

    // 2. Modal open test
    console.log('Opening Enquiry Modal...');
    const planBtn = await page.$('button.btn-primary');
    if (planBtn) {
      await planBtn.click();
      await new Promise((r) => setTimeout(r, 600));
      const modalShot = path.join(artifactDir, 'enquiry-modal.png');
      await page.screenshot({ path: modalShot });
      fs.copyFileSync(modalShot, path.join(localDir, 'enquiry-modal.png'));
      console.log('✓ Saved enquiry-modal.png');
    }

    // 3. Mobile Viewport (iPhone 14 size)
    console.log('Capturing Mobile Viewport...');
    await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
    await page.goto(`http://localhost:${PORT}`, { waitUntil: 'networkidle0' });
    await new Promise((r) => setTimeout(r, 2200));

    const mobHero = path.join(artifactDir, 'mobile-hero.png');
    await page.screenshot({ path: mobHero });
    fs.copyFileSync(mobHero, path.join(localDir, 'mobile-hero.png'));
    console.log('✓ Saved mobile-hero.png');

    const mobFull = path.join(artifactDir, 'mobile-fullpage.png');
    await page.screenshot({ path: mobFull, fullPage: true });
    fs.copyFileSync(mobFull, path.join(localDir, 'mobile-fullpage.png'));
    console.log('✓ Saved mobile-fullpage.png');

    console.log('All screenshots captured successfully!');
  } catch (err) {
    console.error('Screenshot capture failed:', err);
  } finally {
    if (browser) await browser.close();
    server.close();
    process.exit(0);
  }
});
