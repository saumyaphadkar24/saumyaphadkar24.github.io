import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';

const ASSETS_DIR = './src/assets';
const QUALITY = 85;
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png'];

async function optimizeImage(filePath) {
  const ext = extname(filePath).toLowerCase();

  if (!IMAGE_EXTENSIONS.includes(ext)) {
    return;
  }

  const fileName = basename(filePath, ext);
  const outputPath = join(ASSETS_DIR, `${fileName}.webp`);

  try {
    const stats = await stat(filePath);
    const originalSize = stats.size;

    await sharp(filePath)
      .webp({ quality: QUALITY })
      .toFile(outputPath);

    const newStats = await stat(outputPath);
    const newSize = newStats.size;
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(2);

    console.log(`✓ ${fileName}${ext}`);
    console.log(`  Original: ${(originalSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`  WebP: ${(newSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`  Savings: ${savings}%\n`);
  } catch (error) {
    console.error(`✗ Failed to optimize ${filePath}:`, error.message);
  }
}

async function processDirectory(dirPath) {
  const entries = await readdir(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dirPath, entry.name);

    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.isFile()) {
      await optimizeImage(fullPath);
    }
  }
}

console.log('Starting image optimization...\n');
await processDirectory(ASSETS_DIR);
console.log('Done!');
