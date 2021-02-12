import financiera from '../../assets/projects_images/financiera.png'
import acapp from '../../assets/projects_images/acapp.jpeg'
import dc24 from '../../assets/projects_images/dc24.png'
import folio_html from '../../assets/projects_images/portfolio-html.png'
import folio_react from '../../assets/projects_images/portfolio-react.png'
import financiera_api from '../../assets/projects_images/financiera-api.png'

const data_projects = [
    {
        name: 'Financiera Correntina',
        image: financiera,
        deployed_url: 'http://micrediya.com/',
        github_url: '',
        category: ['php', 'mysql', 'css']
    },

    {
        name: 'AcApp',
        image: acapp,
        deployed_url: '',
        github_url: '',
        category: ['java', 'firebase']
    },

    {
        name: 'API Financiera',
        image: financiera_api,
        deployed_url: '',
        github_url: '',
        category: ['php', 'mysql']
    },

    {
        name: 'Portfolio (HTML)',
        image: folio_html,
        deployed_url: 'http://sumaxtweetme.pythonanywhere.com/',
        github_url: 'https://github.com/Dey-Sumit/tweetme',
        category: ['html', 'css']
    },
    {
        name: 'Portfolio (React)',
        image: folio_react,
        deployed_url:'',
        github_url:'',
        category: ['react', 'css', 'javascript']
    },
    {
        name: 'DC24 News',
        image: dc24,
        deployed_url:'',
        github_url:'',
        category: ['wordpress']
    }
]

export default data_projects;