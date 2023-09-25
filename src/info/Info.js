import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Harsh",
    lastName: "Wadhwa",
    initials: "hw", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in India'
        },
        {
            emoji: "👨‍💻",
            text: "Software Developer at Aumhum"
        },
        {
            emoji: "📧",
            text: "harsh.wadhwa1711@gmail.com"
        },
    ],
    socials: [
        {
            link: "https://www.instagram.com/system.out101/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/harsh-wadhwa/",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/harshwadhwa01/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Harsh. I'm a software developer for Aumhum. I studied CompSci at NIIT, I enjoy long runs on the lake, and I believe artificial intelligence will inevitably rule us all one day.",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma', 'tailwind', 'Vite', 'Stripe', 'Razorpay', 'styled-components', 'Postman API', 'Firebase'],
            exposedTo: ['nodejs', 'python', 'java', 'aws', 'mongoDB']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater-movies-music',
            emoji: '🎭'
        },
        {
            label: 'active sports',
            emoji: '🏃'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "CAPSTONE PROJECT - ONLINE MARKETPLACE (2022)",
            source: "https://github.com/harsh-wadhwa/trading-platform",
            image: mock2
        },
        {
            title: "RND PROJECT - HUMAN ACTIVITY RECOGNITION (2022)",
            source: "https://github.com/harsh-wadhwa/human-activity",
            image: mock2
        },
        {
            title: "MACHINE LEARNING PROJECT - PARA D(2022)",
            source: "https://github.com/harsh-wadhwa/Para-D",
            image: mock2
        },
        {
            title: "TECH CARE (2020)",
            source: "https://github.com/harsh-wadhwa/Tech-Care",
            image: mock2
        }
    ]
}