# Image Migration Instructions

## To complete the image optimization, you need to move these files:

### From: `public/content-images/`
### To: `src/assets/content-images/`

1. **pixelate.pictures.avif** → `src/assets/content-images/pixelate.pictures.avif`
2. **spike.news.avif** → `src/assets/content-images/spike.news.avif`
3. **quote-man.avif** → `src/assets/content-images/quote-man.avif`
4. **brighton.dog.avif** → `src/assets/content-images/brighton.dog.avif`
5. **blackspike-wallpaper-01.avif** → `src/assets/content-images/blackspike-wallpaper-01.avif`
6. **blackspike-wallpaper-02.avif** → `src/assets/content-images/blackspike-wallpaper-02.avif`
7. **blackspike-wallpaper-03.avif** → `src/assets/content-images/blackspike-wallpaper-03.avif`
8. **blackspike-wallpaper-04.avif** → `src/assets/content-images/blackspike-wallpaper-04.avif`

## Steps:
1. Copy each file from `public/content-images/` to `src/assets/content-images/`
2. Replace the placeholder files I created
3. Build and test the site

## Expected Result:
- All images will be processed by Astro's image optimization
- Proper responsive sizing will be applied
- 776 KiB savings will be achieved
- PageSpeed score should improve significantly

## Note:
The components are already updated to use the new image paths. Once you move the files, the optimization will be complete.
