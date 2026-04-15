/**
 * MAK Interior Designs - Image Compression Script
 * Converts all JPEG/PNG assets to:
 *   1. WebP (primary) - 80% quality, excellent compression
 *   2. Optimized JPEG fallback - 82% quality (replaces originals)
 *
 * Run: node scripts/compress-images.mjs
 */

import sharp from 'sharp';
import { readdir, stat, rename } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ASSETS_DIR = join(__dirname, '..', 'src', 'assets');

// Target max dimensions for web display (will not upscale)
const MAX_WIDTH = 1920;
const MAX_HEIGHT = 1200;

// Quality settings
const WEBP_QUALITY = 82;
const JPEG_QUALITY = 82;
const PNG_QUALITY = 90;

// Extensions to process
const SUPPORTED_EXT = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'];

async function formatBytes(bytes) {
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

async function processImage(filePath) {
  const ext = extname(filePath);
  const nameWithoutExt = filePath.slice(0, -ext.length);
  const webpPath = nameWithoutExt + '.webp';
  const fileName = basename(filePath);

  try {
    const originalStat = await stat(filePath);
    const originalSize = originalStat.size;

    // Create WebP version
    await sharp(filePath)
      .resize({
        width: MAX_WIDTH,
        height: MAX_HEIGHT,
        fit: 'inside',
        withoutEnlargement: true,
      })
      .webp({ quality: WEBP_QUALITY, effort: 4 })
      .toFile(webpPath);

    const webpStat = await stat(webpPath);
    const webpSize = webpStat.size;
    const savingPercent = Math.round((1 - webpSize / originalSize) * 100);

    // Also overwrite the original with an optimized version (compressed JPEG/PNG)
    if (['.jpg', '.jpeg', '.JPG', '.JPEG'].includes(ext)) {
      const tempPath = filePath + '.tmp';
      await sharp(filePath)
        .resize({
          width: MAX_WIDTH,
          height: MAX_HEIGHT,
          fit: 'inside',
          withoutEnlargement: true,
        })
        .jpeg({ quality: JPEG_QUALITY, progressive: true, mozjpeg: true })
        .toFile(tempPath);
      
      await rename(tempPath, filePath);
    } else if (['.png', '.PNG'].includes(ext)) {
      const tempPath = filePath + '.tmp';
      await sharp(filePath)
        .resize({
          width: MAX_WIDTH,
          height: MAX_HEIGHT,
          fit: 'inside',
          withoutEnlargement: true,
        })
        .png({ quality: PNG_QUALITY, progressive: true, compressionLevel: 8 })
        .toFile(tempPath);
      
      await rename(tempPath, filePath);
    }

    const newOriginalStat = await stat(filePath);
    const newOriginalSize = newOriginalStat.size;

    console.log(`✅ ${fileName}`);
    console.log(`   Original: ${await formatBytes(originalSize)}  →  JPEG: ${await formatBytes(newOriginalSize)} | WebP: ${await formatBytes(webpSize)} (${savingPercent}% saved)`);
    
    return { originalSize, newOriginalSize, webpSize };
  } catch (err) {
    console.error(`❌ Failed to process ${fileName}: ${err.message}`);
    return null;
  }
}

async function main() {
  console.log('🚀 MAK Image Optimizer Starting...');
  console.log(`📁 Assets directory: ${ASSETS_DIR}\n`);

  const files = await readdir(ASSETS_DIR);
  const imageFiles = files.filter(f => SUPPORTED_EXT.includes(extname(f)));

  console.log(`📸 Found ${imageFiles.length} images to process\n`);
  console.log('─'.repeat(70));

  let totalOriginal = 0;
  let totalNew = 0;
  let totalWebp = 0;
  let processed = 0;

  for (const file of imageFiles) {
    const filePath = join(ASSETS_DIR, file);
    const result = await processImage(filePath);
    if (result) {
      totalOriginal += result.originalSize;
      totalNew += result.newOriginalSize;
      totalWebp += result.webpSize;
      processed++;
    }
  }

  console.log('\n' + '─'.repeat(70));
  console.log(`\n✨ Done! Processed ${processed}/${imageFiles.length} images`);
  console.log(`📊 Total original size: ${await formatBytes(totalOriginal)}`);
  console.log(`📉 Total JPEG size:     ${await formatBytes(totalNew)} (${Math.round((1 - totalNew/totalOriginal)*100)}% reduction)`);
  console.log(`🌐 Total WebP size:     ${await formatBytes(totalWebp)} (${Math.round((1 - totalWebp/totalOriginal)*100)}% reduction)`);
  console.log('\n💡 WebP files created alongside originals.');
  console.log('   Update your HTML to use <picture> with WebP source for maximum speed.');
}

main().catch(console.error);
