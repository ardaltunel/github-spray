const { execSync } = require('child_process');
const fs = require('fs');
const moment = require('moment');
const _ = require('lodash');

const addFakeContributions = () => {
    const today = moment().subtract(_.random(1, 400), 'days').format('YYYY-MM-DD');
    const numberOfContributions = _.random(4, 5);
    const filePath = './data.txt';

    for (let i = 0; i < numberOfContributions; i++) {
        // Dosyaya tarih bilgisini ekle
        fs.appendFileSync(filePath, today + ' neo\n');
    }

    // GitHub'a push işlemi yap
    execSync(`git add ${filePath}`);
    execSync(`git commit -m "Fake Commits" --date="${today}"`);
    execSync('git push');
};

// Test için 400 gün boyunca her gün 4-5 contribution ekle
for (let i = 0; i < 400; i++) {
    addFakeContributions();
}
