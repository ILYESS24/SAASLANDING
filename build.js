const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const baseUrl = 'https://framerusercontent.com/sites/13Q5CpkJdcMlyToWRFMRpw/';
const modules = [
    'react.B2MFuzHS.mjs',
    'rolldown-runtime.JBZEuaf6.mjs',
    'motion.efWfJHUR.mjs',
    'framer.D_QcE7RE.mjs',
    'Phosphor.BNCJMALG.mjs',
    'VavXaAJ9A.DcG-NV7r.mjs',
    'NWkCScbQS.CahbXrwW.mjs',
    'MLs8e6SZC.C2MwiCMI.mjs',
    'mXDpoJr7q.CdscLgEh.mjs',
    'A3gbykYBB.BkU4eQqI.mjs',
    'xbDnFN_XjAK5Hkodo5zfKNHDGt7uAZZt_7aZoifyId8.BJdmSR0S.mjs',
    'YAP816Y5n.4-yCG32y.mjs',
    'AbV9gQtKz.CntJbfvb.mjs',
    'nEDMPIJV1.BO_0tD-G.mjs',
    'jeIIip8Yb.CEqQxo8x.mjs',
    'BZZ_AYR5d.DRGe-v9D.mjs',
    'Video.rIxMGYrG.mjs',
    'OIjZRBmWDcIE2B6qgG1j.DM23l95a.mjs',
    'mIhVW5FJR.BVVqU3su.mjs',
    'uFWltGs8H.DDz1zq3l.mjs',
    'JddkKo_8c.CI8fYceV.mjs',
    'mvXlq_92F.Dyzx64bG.mjs',
    'TV4mSw2UQ.uO9IlKi7.mjs',
    'xXSt2XMO6.DGJFVgwk.mjs',
    'S8xkpwiby.Bncqx6m1.mjs',
    'KDuYhwj5r.cEixV-O-.mjs',
    'h4jVEYDkM.BTMs3LPi.mjs',
    'd7g3Xba_U.gI_eDDUg.mjs',
    'YckFIlg3V.CxT7UFQM.mjs',
    'augiA20Il.3LHpnQ86.mjs',
    'shared-lib.DbYUmPEb.mjs',
    'wUQ5BUOwf.BlLW6Uut.mjs',
    'script_main.CekEp3y2.mjs'
];

const assetsDir = path.join(__dirname, 'assets');

if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
}

function downloadFile(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        const protocol = url.startsWith('https') ? https : http;

        protocol.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
                return;
            }

            response.pipe(file);

            file.on('finish', () => {
                file.close();
                console.log(`Downloaded: ${dest}`);
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => {});
            reject(err);
        });
    });
}

async function downloadModules() {
    console.log('Downloading Framer modules...');

    for (const module of modules) {
        const url = baseUrl + module;
        const dest = path.join(assetsDir, module);

        try {
            await downloadFile(url, dest);
        } catch (error) {
            console.error(`Failed to download ${module}:`, error.message);
        }
    }
}

function updateHTML() {
    console.log('Updating HTML to use local assets...');

    const htmlPath = path.join(__dirname, 'index.html');
    let html = fs.readFileSync(htmlPath, 'utf8');

    // Replace external module URLs with local ones
    html = html.replace(/https:\/\/framerusercontent\.com\/sites\/13Q5CpkJdcMlyToWRFMRpw\//g, './assets/');

    // Replace relative image paths with absolute paths for Vercel
    html = html.replace(/images\//g, './images/');

    fs.writeFileSync(htmlPath, html);
    console.log('HTML updated successfully');
}

async function main() {
    try {
        await downloadModules();
        updateHTML();
        console.log('Build completed successfully!');
        console.log('You can now deploy with: vercel --prod --yes');
    } catch (error) {
        console.error('Build failed:', error);
        process.exit(1);
    }
}

main();
