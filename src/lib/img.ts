import fs from 'node:fs';
/** true if a file exists under /public (path relative to public, e.g. 'images/hero.jpg') */
export const exists = (p: string) => fs.existsSync(`./public/${p}`);
