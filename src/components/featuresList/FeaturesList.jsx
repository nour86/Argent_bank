import { Feature } from '../feature/Feature'
const imagesPath = '../../../public/images/'
import './FeaturesList.style.scss'

export function FeaturesList() {
    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>
            {featuresData.map((feature, index) => {
                return (
                    <Feature
                        data={feature}
                        imagesPath={imagesPath}
                        key={index}
                    />
                )
            })}
        </section>
    )
}

const featuresData = [
    {
        src: 'icon-chat.png',
        altImg: 'Chat Icon',
        title: 'You are our #1 priority',
        description:
            'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
    },
    {
        src: 'icon-money.png',
        altImg: 'Money Icon',
        title: 'More savings means higher rates',
        description:
            'The more you save with us, the higher your interest rate will be!',
    },
    {
        src: 'icon-security.png',
        altImg: 'Security Icon',
        title: 'Security you can trust',
        description:
            'We use top of the line encryption to make sure your data and money is always safe.',
    },
]
