var ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/fcc-covid-19-us',// <-- replace yourproject with your repo name
    {
        branch: 'gh-pages',
        repo: 'https://github.com/cch099/fcc-covid-19-us.git',
        user: {
            name: 'CCH',
            email: 'chicheong.ho@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)