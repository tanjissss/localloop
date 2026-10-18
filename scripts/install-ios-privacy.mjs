import { cp, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';
const root = process.cwd();
const source = resolve(root, 'privacy/PrivacyInfo.xcprivacy');
const destination = resolve(root, 'ios/App/App/PrivacyInfo.xcprivacy');
await mkdir(resolve(root, 'ios/App/App'), { recursive: true });
await cp(source, destination);
console.log('Privacy manifest copied to ios/App/App/PrivacyInfo.xcprivacy');
