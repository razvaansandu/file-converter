# File Converter

A web app to convert files between any format, directly on your device.
Built as a PWA — installable on iPhone via Safari "Add to Home Screen".

## Features
- Video, audio and image conversion via FFmpeg.wasm (runs locally in the browser)
- Document and archive conversion via CloudConvert API
- GitHub-style dark UI with animations
- Mobile-first design, works on iPhone and desktop
- No file uploads — 100% client-side for media files

## Supported formats
| Category  | Input                          | Output                        |
|-----------|-------------------------------|-------------------------------|
| Video     | mp4, avi, mov, mkv, flv, wmv  | mp4, webm, avi, mov, mp3, gif |
| Audio     | mp3, wav, aac, ogg, flac      | mp3, wav, aac, ogg, flac      |
| Image     | jpg, png, webp, gif, bmp      | jpg, png, webp, gif, bmp      |
| Document  | docx, pdf, pptx, xlsx, txt    | pdf, docx, txt, html          |
| Archive   | zip, rar, 7z, tar, gz         | zip, rar, 7z, tar, gz         |

## Tech Stack
- Vanilla HTML + CSS + JavaScript
- FFmpeg.wasm 0.11.6
- CloudConvert API (documents & archives)
- Vercel (hosting + serverless proxy)

## Deploy
Hosted on Vercel. Add `CLOUDCONVERT_API_KEY` as environment variable before deploying.
